import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import mercurius, { IResolvers, MercuriusLoaders } from 'mercurius'
import mercuriusCodegen from 'mercurius-codegen'
const { makeExecutableSchema } = require('@graphql-tools/schema')

import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'

////const schema = loadFilesSync('src/graphql/schema/**/*.gql', {}).map(String)
const typesArray = loadFilesSync('src/graphql/schema/**/*.gql', {}).map(String)

typesArray 

export const app = Fastify()

const buildContext = async (req: FastifyRequest, _reply: FastifyReply) => {
  return {
    authorization: req.headers.authorization,
  }
}

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T

declare module 'mercurius' {
  interface MercuriusContext
    extends PromiseType<ReturnType<typeof buildContext>> {}
}

const dogs = [
  { name: 'Max' },
  { name: 'Charlie' },
  { name: 'Buddy' },
  { name: 'Max' },
]

const owners: Record<string, { name: string }> = {
  Max: {
    name: 'Jennifer',
  },
  Charlie: {
    name: 'Sarah',
  },
  Buddy: {
    name: 'Tracy',
  },
}

const NOTIFICATION = 'notification'

const resolvers: IResolvers = {
  Query: {
    Hello(root, args, ctx, info) {
      // root ~ {}
      root
      // args ~ {}
      args
      // ctx.authorization ~ string | undefined
      ctx.authorization
      // info ~ GraphQLResolveInfo
      info

      return 'world'
    },
    dogs() {
      return dogs
    },
  },
  Mutation: {
    add(root, { x, y }, ctx, info) {
      // root ~ {}
      root
      // x ~ string
      x
      // x ~ string
      y
      // ctx.authorization ~ string | undefined
      ctx.authorization
      // info ~ GraphQLResolveInfo
      info

      return x + y
    },
    createNotification(_root, { message }, { pubsub }) {
      pubsub.publish({
        topic: NOTIFICATION,
        payload: {
          newNotification: message,
        },
      })
      return true
    },
  },
  Subscription: {
    newNotification: {
      subscribe: (_root, _args, { pubsub }) => {
        return pubsub.subscribe(NOTIFICATION)
      },
    },
  },
}

const loaders: MercuriusLoaders = {
  Dog: {
    async owner(queries, _ctx) {
      return queries.map(({ obj }) => owners[obj.name])
    },
  },
}
const typeDefs = mergeTypeDefs(typesArray)

const schema =  makeExecutableSchema({ typeDefs, resolvers });
//const schema = typeDefs;
console.log(schema);
app.register(mercurius, {
  schema,
 // resolvers,
  loaders,
  context: buildContext,
  subscription: true,
  graphiql: 'playground',
  ide: true,
  routes: true,
})

mercuriusCodegen(app, {
  targetPath: './src/graphql/generated.ts',
  operationsGlob: './src/graphql/operations/*.gql',
})

app.listen(3000);
