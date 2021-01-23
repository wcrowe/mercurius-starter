"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const dogs = [
    { name: 'Max', coat: 'Black' },
    { name: 'Charlie', coat: 'Blue' },
    { name: 'Buddy', coat: 'Brown' },
    { name: 'Max', coat: 'Red' },
];
const NOTIFICATION = 'notification';
exports.resolvers = {
    Query: {
        Hello(root, args, ctx, info) {
            root;
            args;
            ctx.authorization;
            info;
            return 'world';
        },
        dogs() {
            return dogs;
        },
    },
    Mutation: {
        add(root, { x, y }, ctx, info) {
            root;
            x;
            y;
            ctx.authorization;
            info;
            return x + y;
        },
        multiply(root, { x, y }, ctx, info) {
            root;
            x;
            y;
            ctx.authorization;
            info;
            return x + y;
        },
        createNotification(_root, { message }, { pubsub }) {
            pubsub.publish({
                topic: NOTIFICATION,
                payload: {
                    newNotification: message,
                },
            });
            return true;
        },
    },
    Subscription: {
        newNotification: {
            subscribe: (_root, _args, { pubsub }) => {
                return pubsub.subscribe(NOTIFICATION);
            },
        },
    },
};
//# sourceMappingURL=resolvers.js.map