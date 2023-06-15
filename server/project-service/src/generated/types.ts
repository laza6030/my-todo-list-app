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
  getColumns?: Maybe<Array<Maybe<Column>>>;
  getTasksByColumn?: Maybe<Array<Task>>;
  getWorkspace: Array<Maybe<Workspace>>;
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
};


export type QueryGetColumnsArgs = {
  workspaceId: Scalars['ID'];
};


export type QueryGetTasksByColumnArgs = {
  columnId: Scalars['ID'];
};


export type QueryGetWorkspaceArgs = {
  userId: Scalars['ID'];
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createColumn: Column;
  deleteColumn: Scalars['Boolean'];
  renameColumn: Scalars['Boolean'];
  createTask?: Maybe<Task>;
  deleteTask?: Maybe<Scalars['Boolean']>;
  moveTask: Task;
  createWorkspace?: Maybe<Workspace>;
  deleteWorkspace: Scalars['Boolean'];
};


export type MutationCreateColumnArgs = {
  name: Scalars['String'];
  workspaceId: Scalars['ID'];
};


export type MutationDeleteColumnArgs = {
  id: Scalars['String'];
};


export type MutationRenameColumnArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateTaskArgs = {
  columnId: Scalars['ID'];
  name: Scalars['String'];
  rank: Scalars['Int'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['String'];
};


export type MutationMoveTaskArgs = {
  taskId: Scalars['ID'];
  columnId: Scalars['ID'];
  rank: Scalars['Int'];
};


export type MutationCreateWorkspaceArgs = {
  name: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationDeleteWorkspaceArgs = {
  workspaceId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  defaultWorkspaceId: Scalars['ID'];
};

export type Column = {
  __typename?: 'Column';
  id: Scalars['ID'];
  name: Scalars['String'];
  workspaceId: Scalars['ID'];
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['ID'];
  columnId: Scalars['ID'];
  name: Scalars['String'];
  rank: Scalars['Int'];
};

export type Workspace = {
  __typename?: 'Workspace';
  id: Scalars['ID'];
  name: Scalars['String'];
  userId: Scalars['String'];
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
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  User: ResolverTypeWrapper<User>;
  Column: ResolverTypeWrapper<Column>;
  Task: ResolverTypeWrapper<Task>;
  Workspace: ResolverTypeWrapper<Workspace>;
  _FieldSet: ResolverTypeWrapper<Scalars['_FieldSet']>;
  _Any: ResolverTypeWrapper<Scalars['_Any']>;
  _Service: ResolverTypeWrapper<_Service>;
  _Entity: ResolversTypes['User'];
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars['ID'];
  Mutation: {};
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  User: User;
  Column: Column;
  Task: Task;
  Workspace: Workspace;
  _FieldSet: Scalars['_FieldSet'];
  _Any: Scalars['_Any'];
  _Service: _Service;
  _Entity: ResolversParentTypes['User'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getColumns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Column']>>>, ParentType, ContextType, RequireFields<QueryGetColumnsArgs, 'workspaceId'>>;
  getTasksByColumn?: Resolver<Maybe<Array<ResolversTypes['Task']>>, ParentType, ContextType, RequireFields<QueryGetTasksByColumnArgs, 'columnId'>>;
  getWorkspace?: Resolver<Array<Maybe<ResolversTypes['Workspace']>>, ParentType, ContextType, RequireFields<QueryGetWorkspaceArgs, 'userId'>>;
  _entities?: Resolver<Array<Maybe<ResolversTypes['_Entity']>>, ParentType, ContextType, RequireFields<Query_EntitiesArgs, 'representations'>>;
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createColumn?: Resolver<ResolversTypes['Column'], ParentType, ContextType, RequireFields<MutationCreateColumnArgs, 'name' | 'workspaceId'>>;
  deleteColumn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteColumnArgs, 'id'>>;
  renameColumn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRenameColumnArgs, 'id' | 'name'>>;
  createTask?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<MutationCreateTaskArgs, 'columnId' | 'name' | 'rank'>>;
  deleteTask?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteTaskArgs, 'id'>>;
  moveTask?: Resolver<ResolversTypes['Task'], ParentType, ContextType, RequireFields<MutationMoveTaskArgs, 'taskId' | 'columnId' | 'rank'>>;
  createWorkspace?: Resolver<Maybe<ResolversTypes['Workspace']>, ParentType, ContextType, RequireFields<MutationCreateWorkspaceArgs, 'name' | 'userId'>>;
  deleteWorkspace?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteWorkspaceArgs, 'workspaceId'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  defaultWorkspaceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColumnResolvers<ContextType = any, ParentType extends ResolversParentTypes['Column'] = ResolversParentTypes['Column']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  workspaceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  columnId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkspaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Workspace'] = ResolversParentTypes['Workspace']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  User?: UserResolvers<ContextType>;
  Column?: ColumnResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  Workspace?: WorkspaceResolvers<ContextType>;
  _FieldSet?: GraphQLScalarType;
  _Any?: GraphQLScalarType;
  _Service?: _ServiceResolvers<ContextType>;
  _Entity?: _EntityResolvers<ContextType>;
};

