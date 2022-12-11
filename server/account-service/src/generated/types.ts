import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
  _Any: any;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signUp: SignUp;
  signIn: SignIn;
};


export type MutationSignUpArgs = {
  input: UserInput;
};


export type MutationSignInArgs = {
  input: UserInput;
};

export type UserInput = {
  username?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type SignIn = {
  __typename?: 'SignIn';
  token: Scalars['String'];
};

export type SignUp = {
  __typename?: 'SignUp';
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  defaultWorkspaceId: Scalars['ID'];
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type _Entity = User;



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  UserInput: UserInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  SignIn: ResolverTypeWrapper<SignIn>;
  SignUp: ResolverTypeWrapper<SignUp>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  User: ResolverTypeWrapper<User>;
  _FieldSet: ResolverTypeWrapper<Scalars['_FieldSet']>;
  _Any: ResolverTypeWrapper<Scalars['_Any']>;
  _Service: ResolverTypeWrapper<_Service>;
  _Entity: ResolversTypes['User'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Mutation: {};
  UserInput: UserInput;
  String: Scalars['String'];
  SignIn: SignIn;
  SignUp: SignUp;
  ID: Scalars['ID'];
  User: User;
  _FieldSet: Scalars['_FieldSet'];
  _Any: Scalars['_Any'];
  _Service: _Service;
  _Entity: ResolversParentTypes['User'];
  Boolean: Scalars['Boolean'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  _entities?: Resolver<Array<Maybe<ResolversTypes['_Entity']>>, ParentType, ContextType, RequireFields<Query_EntitiesArgs, 'representations'>>;
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  signUp?: Resolver<ResolversTypes['SignUp'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>;
  signIn?: Resolver<ResolversTypes['SignIn'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'input'>>;
};

export type SignInResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignIn'] = ResolversParentTypes['SignIn']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignUpResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignUp'] = ResolversParentTypes['SignUp']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultWorkspaceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface _FieldSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_FieldSet'], any> {
  name: '_FieldSet';
}

export interface _AnyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_Any'], any> {
  name: '_Any';
}

export type _ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Service'] = ResolversParentTypes['_Service']> = {
  sdl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Entity'] = ResolversParentTypes['_Entity']> = {
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  SignIn?: SignInResolvers<ContextType>;
  SignUp?: SignUpResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  _FieldSet?: GraphQLScalarType;
  _Any?: GraphQLScalarType;
  _Service?: _ServiceResolvers<ContextType>;
  _Entity?: _EntityResolvers<ContextType>;
};

