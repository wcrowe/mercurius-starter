import { MercuriusContext } from "mercurius";
import { FastifyReply } from "fastify";
import { GraphQLResolveInfo } from "graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<DeepPartial<TResult>> | DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Dog = {
  __typename?: "Dog";
  name: Scalars["String"];
  owner?: Maybe<Human>;
  coat?: Maybe<Scalars["String"]>;
};

export type Error = {
  __typename?: "Error";
  field: Scalars["String"];
  message: Scalars["String"];
};

export type Human = {
  __typename?: "Human";
  firstname: Scalars["String"];
  lastname: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  add: Scalars["Int"];
  multiply: Scalars["Int"];
  createNotification: Scalars["Boolean"];
};

export type MutationaddArgs = {
  x: Scalars["Int"];
  y: Scalars["Int"];
};

export type MutationmultiplyArgs = {
  x: Scalars["Int"];
  y: Scalars["Int"];
};

export type MutationcreateNotificationArgs = {
  message: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  Hello: Scalars["String"];
  dogs: Array<Dog>;
};

export type Subscription = {
  __typename?: "Subscription";
  newNotification: Scalars["String"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  firstname: Scalars["String"];
  lastname: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  phone?: Maybe<Scalars["String"]>;
  role?: Maybe<role>;
  active: Scalars["Boolean"];
};

export enum role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type UserInput = {
  password: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  role?: Maybe<role>;
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<Error>>;
  user?: Maybe<User>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Dog: ResolverTypeWrapper<Dog>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Error: ResolverTypeWrapper<Error>;
  Human: ResolverTypeWrapper<Human>;
  Mutation: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  role: role;
  UserInput: UserInput;
  UserResponse: ResolverTypeWrapper<UserResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Dog: Dog;
  String: Scalars["String"];
  Error: Error;
  Human: Human;
  Mutation: {};
  Int: Scalars["Int"];
  Boolean: Scalars["Boolean"];
  Query: {};
  Subscription: {};
  User: User;
  ID: Scalars["ID"];
  UserInput: UserInput;
  UserResponse: UserResponse;
};

export type DogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Dog"] = ResolversParentTypes["Dog"]
> = {
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["Human"]>, ParentType, ContextType>;
  coat?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Error"] = ResolversParentTypes["Error"]
> = {
  field?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HumanResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Human"] = ResolversParentTypes["Human"]
> = {
  firstname?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  add?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<MutationaddArgs, "x" | "y">
  >;
  multiply?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    RequireFields<MutationmultiplyArgs, "x" | "y">
  >;
  createNotification?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateNotificationArgs, "message">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  Hello?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  dogs?: Resolver<Array<ResolversTypes["Dog"]>, ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
  newNotification?: SubscriptionResolver<
    ResolversTypes["String"],
    "newNotification",
    ParentType,
    ContextType
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["role"]>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserResponse"] = ResolversParentTypes["UserResponse"]
> = {
  errors?: Resolver<
    Maybe<Array<ResolversTypes["Error"]>>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Dog?: DogResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Human?: HumanResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj;
    params: TParams;
  }>,
  context: TContext & {
    reply: FastifyReply;
  }
) => Promise<Array<DeepPartial<TReturn>>>;
type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>;
      opts?: {
        cache?: boolean;
      };
    };
export interface Loaders<
  TContext = MercuriusContext & { reply: FastifyReply }
> {
  Dog?: {
    name?: LoaderResolver<Scalars["String"], Dog, {}, TContext>;
    owner?: LoaderResolver<Maybe<Human>, Dog, {}, TContext>;
    coat?: LoaderResolver<Maybe<Scalars["String"]>, Dog, {}, TContext>;
  };

  Error?: {
    field?: LoaderResolver<Scalars["String"], Error, {}, TContext>;
    message?: LoaderResolver<Scalars["String"], Error, {}, TContext>;
  };

  Human?: {
    firstname?: LoaderResolver<Scalars["String"], Human, {}, TContext>;
    lastname?: LoaderResolver<Scalars["String"], Human, {}, TContext>;
  };

  User?: {
    id?: LoaderResolver<Scalars["ID"], User, {}, TContext>;
    firstname?: LoaderResolver<Scalars["String"], User, {}, TContext>;
    lastname?: LoaderResolver<Scalars["String"], User, {}, TContext>;
    email?: LoaderResolver<Scalars["String"], User, {}, TContext>;
    password?: LoaderResolver<Scalars["String"], User, {}, TContext>;
    phone?: LoaderResolver<Maybe<Scalars["String"]>, User, {}, TContext>;
    role?: LoaderResolver<Maybe<role>, User, {}, TContext>;
    active?: LoaderResolver<Scalars["Boolean"], User, {}, TContext>;
  };

  UserResponse?: {
    errors?: LoaderResolver<Maybe<Array<Error>>, UserResponse, {}, TContext>;
    user?: LoaderResolver<Maybe<User>, UserResponse, {}, TContext>;
  };
}
export type helloQueryVariables = Exact<{ [key: string]: never }>;

export type helloQuery = { __typename?: "Query" } & Pick<Query, "Hello">;

export type addMutationVariables = Exact<{
  x: Scalars["Int"];
  y: Scalars["Int"];
}>;

export type addMutation = { __typename?: "Mutation" } & Pick<Mutation, "add">;

export type multiplyMutationVariables = Exact<{
  x: Scalars["Int"];
  y: Scalars["Int"];
}>;

export type multiplyMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "add"
>;

export type dogsQueryVariables = Exact<{ [key: string]: never }>;

export type dogsQuery = { __typename?: "Query" } & {
  dogs: Array<
    { __typename?: "Dog" } & Pick<Dog, "name" | "coat"> & {
        owner?: Maybe<
          { __typename?: "Human" } & Pick<Human, "firstname" | "lastname">
        >;
      }
  >;
};

export type createNotificationMutationVariables = Exact<{
  message: Scalars["String"];
}>;

export type createNotificationMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "createNotification"
>;

export type newNotificationSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type newNotificationSubscription = {
  __typename?: "Subscription";
} & Pick<Subscription, "newNotification">;

export const helloDocument: DocumentNode<helloQuery, helloQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "hello" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "Hello" } }],
      },
    },
  ],
};
export const addDocument: DocumentNode<addMutation, addMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "add" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "x" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "y" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "add" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "x" },
                value: { kind: "Variable", name: { kind: "Name", value: "x" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "y" },
                value: { kind: "Variable", name: { kind: "Name", value: "y" } },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const multiplyDocument: DocumentNode<
  multiplyMutation,
  multiplyMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "multiply" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "x" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "y" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "add" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "x" },
                value: { kind: "Variable", name: { kind: "Name", value: "x" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "y" },
                value: { kind: "Variable", name: { kind: "Name", value: "y" } },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const dogsDocument: DocumentNode<dogsQuery, dogsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "dogs" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "dogs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "coat" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "owner" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const createNotificationDocument: DocumentNode<
  createNotificationMutation,
  createNotificationMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createNotification" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "message" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createNotification" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "message" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "message" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
export const newNotificationDocument: DocumentNode<
  newNotificationSubscription,
  newNotificationSubscriptionVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "newNotification" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "newNotification" } },
        ],
      },
    },
  ],
};
export type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
  ? _DeepPartialArray<U>
  : T extends object
  ? _DeepPartialObject<T>
  : T | undefined;

interface _DeepPartialArray<T> extends Array<DeepPartial<T>> {}
type _DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> };

declare module "mercurius" {
  interface IResolvers extends Resolvers<MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
