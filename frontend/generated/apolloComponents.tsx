import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
};

export type Mutation = {
  __typename?: "Mutation";
  signupUser: User;
  deleteOnePost?: Maybe<Post>;
  createDraft: Post;
  publish?: Maybe<Post>;
};

export type MutationSignupUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};

export type MutationCreateDraftArgs = {
  title?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  authorEmail?: Maybe<Scalars["String"]>;
};

export type MutationPublishArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type Post = {
  __typename?: "Post";
  id: Scalars["ID"];
  title: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
  published: Scalars["Boolean"];
};

export type PostCreateManyWithoutPostsInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars["ID"]>;
  published: Scalars["Boolean"];
  title: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Query = {
  __typename?: "Query";
  post?: Maybe<Post>;
  feed: Array<Post>;
  filterPosts: Array<Post>;
};

export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  posts?: Maybe<Array<Post>>;
};

export type UserPostsArgs = {
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserCreateInput = {
  id?: Maybe<Scalars["ID"]>;
  email: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  posts?: Maybe<PostCreateManyWithoutPostsInput>;
};
export type FeedQueryQueryVariables = {};

export type FeedQueryQuery = { __typename?: "Query" } & {
  feed: Array<
    { __typename?: "Post" } & Pick<
      Post,
      "id" | "published" | "title" | "content"
    >
  >;
};

export const FeedQueryDocument = gql`
  query feedQuery {
    feed {
      id
      published
      title
      content
    }
  }
`;
export type FeedQueryComponentProps = Omit<
  ReactApollo.QueryProps<FeedQueryQuery, FeedQueryQueryVariables>,
  "query"
>;

export const FeedQueryComponent = (props: FeedQueryComponentProps) => (
  <ReactApollo.Query<FeedQueryQuery, FeedQueryQueryVariables>
    query={FeedQueryDocument}
    {...props}
  />
);

export type FeedQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<FeedQueryQuery, FeedQueryQueryVariables>
> &
  TChildProps;
export function withFeedQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    FeedQueryQuery,
    FeedQueryQueryVariables,
    FeedQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    FeedQueryQuery,
    FeedQueryQueryVariables,
    FeedQueryProps<TChildProps>
  >(FeedQueryDocument, {
    alias: "withFeedQuery",
    ...operationOptions
  });
}
