"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const fastify_1 = __importDefault(require("fastify"));
const mercurius_1 = __importDefault(require("mercurius"));
const mercurius_codegen_1 = __importDefault(require("mercurius-codegen"));
const load_files_1 = require("@graphql-tools/load-files");
const schema_1 = require("@graphql-tools/schema");
const merge_1 = require("@graphql-tools/merge");
const dotenv_1 = __importDefault(require("dotenv"));
const resolvers_1 = require("./resolvers");
const loaders_1 = require("./loaders");
dotenv_1.default.config();
const PORT = Number(process.env.PORT) || 4000;
const typesArray = load_files_1.loadFilesSync("src/graphql/schema/**/*.gql", {}).map(String);
const fastify = fastify_1.default({ logger: true });
const buildContext = (req, _reply) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        authorization: req.headers.authorization,
    };
});
const typeDefs = merge_1.mergeTypeDefs(typesArray);
const schema = schema_1.makeExecutableSchema({ typeDefs });
mercurius_codegen_1.default(fastify, {
    targetPath: "./src/graphql/generated.ts",
    operationsGlob: "./src/graphql/operations/*.gql",
});
fastify.register(mercurius_1.default, {
    schema,
    resolvers: resolvers_1.resolvers,
    loaders: loaders_1.loaders,
    context: buildContext,
    subscription: true,
    graphiql: "playground",
    ide: true,
    routes: true,
    jit: 1,
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fastify.listen(PORT);
        const address = fastify.server.address();
        const port = address.port;
        console.log(`🚀 is running on ${port}`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
start();
//# sourceMappingURL=index.js.map