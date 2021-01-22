import "reflect-metadata";
import { FastifyReply, FastifyRequest } from "fastify";
import mercurius from "mercurius";
import mercuriusCodegen from "mercurius-codegen";
import { loadFilesSync } from "@graphql-tools/load-files";
import dotenv from "dotenv";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs } from "@graphql-tools/merge";

import { resolvers } from "./resolvers";
import {loaders} from "./loaders";


dotenv.config();
const typesArray = loadFilesSync("src/graphql/schema/**/*.gql", {}).map(String);

const fastify = require("fastify")({
  logger: true,
});

const buildContext = async (req: FastifyRequest, _reply: FastifyReply) => {
  return {
    authorization: req.headers.authorization,
  };
};

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;

declare module "mercurius" {
  interface MercuriusContext
    extends PromiseType<ReturnType<typeof buildContext>> {}
}

const typeDefs = mergeTypeDefs(typesArray);
const schema = makeExecutableSchema({ typeDefs });

mercuriusCodegen(fastify, {
  targetPath: "./src/graphql/generated.ts",
  operationsGlob: "./src/graphql/operations/*.gql",
});

fastify.register(mercurius, {
  schema,
  resolvers,
  loaders,
  context: buildContext,
  subscription: true,
  graphiql: "playground",
  ide: true,
  routes: true,
  jit: 1,
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
console.log(`🚀  Server ready `);
