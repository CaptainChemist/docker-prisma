import * as React from 'react';
import { Query } from 'react-apollo';

import FEED_QUERY from '../queries/feed.gql';
import { BasePayload } from 'generated/extraTypes';
import { BlogFragment } from 'generated/apolloComponents';

type Props = {
  variables: {};
  children: any;
};

type Payload = BasePayload & {
  data: {
    blog: BlogFragment;
  };
};

const FeedQuery = (props: Props) => (
  <Query {...props} query={FEED_QUERY}>
    {(payload: Payload) => props.children(payload)}
  </Query>
);

export default FeedQuery;
export { FEED_QUERY };
