import React from 'react';
import { FeedQueryComponent } from '../generated/apollo-components';
import PublishDraft from './publish-draft';
import DeletePost from './delete-post';

type Props = {
  published: boolean;
};

class FeedList extends React.PureComponent<Props> {
  render() {
    const { published } = this.props;
    return (
      <FeedQueryComponent variables={{ published }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          if (data && 'feed' in data && data.feed.length > 0) {
            return (
              <ul>
                {data.feed.map(({ id, title, content, published }, i) => (
                  <li key={i}>
                    <p>
                      title: {title} content: {content}
                    </p>
                    {published ? null : <PublishDraft id={id} />}
                    <DeletePost id={id} />
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

export default FeedList;
