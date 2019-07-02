import React from 'react';
import { FeedQueryComponent } from '../generated/apollo-components';

type Props = {};

class PostsList extends React.PureComponent<Props> {
  render() {
    return (
      <FeedQueryComponent>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          if (data && 'feed' in data && data.feed.length > 0) {
            return (
              <ul>
                {data.feed.map(({ title, content }, i) => (
                  <li key={i}>
                    {title}-{content}
                  </li>
                ))}
              </ul>
            );
          }

          return <p>No results yet.</p>;
        }}
      </FeedQueryComponent>
    );
  }
}

export default PostsList;
