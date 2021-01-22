import "reflect-metadata";
import { FastifyReply, FastifyRequest } from 'fastify'
import mercurius, { IResolvers, MercuriusLoaders } from 'mercurius'
import mercuriusCodegen from 'mercurius-codegen'

import { loadFilesSync } from '@graphql-tools/load-files'
import dotenv from "dotenv";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs } from "@graphql-tools/merge";


dotenv.config();
const typesArray = loadFilesSync('src/graphql/schema/**/*.gql', {}).map(String)

const fastify = require('fastify')({
  logger: true
})

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
  { name: 'Max', coat: 'Black' },
  { name: 'Charlie', coat: 'Blue' },
  { name: 'Buddy', coat: 'Brown' },
  { name: 'Max', coat: 'Red' },
]

const owners: Record<string, { firstname: string, lastname: string }> = {
  Max: {
    firstname: 'Jennifer',
    lastname: 'Doe'
  },
  Charlie: {
    firstname: 'Sarah',
    lastname: 'Reed'
  },
  Buddy: {
    firstname: 'Tracy',
    lastname: 'Johnson'
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
const schema =  makeExecutableSchema({ typeDefs});

mercuriusCodegen(fastify, {
  targetPath: './src/graphql/generated.ts',
  operationsGlob: './src/graphql/operations/*.gql',
})

fastify.register(mercurius, {
  schema,
  resolvers,
  loaders,
  context: buildContext,
  subscription: true,
  graphiql: 'playground',
  ide: true,
  routes: true,
  jit: 1,
})


const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
console.log(`🚀  Server ready `)
