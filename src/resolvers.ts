import { IResolvers } from "mercurius"

const dogs = [
    { name: 'Max', coat: 'Black' },
    { name: 'Charlie', coat: 'Blue' },
    { name: 'Buddy', coat: 'Brown' },
    { name: 'Max', coat: 'Red' },
  ]
  const NOTIFICATION = 'notification' 
export const resolvers: IResolvers = {
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
      multiply(root, { x, y }, ctx, info) {
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
        return x * y
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
  
