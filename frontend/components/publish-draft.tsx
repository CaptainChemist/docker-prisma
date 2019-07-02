import React from 'react';
import { PublishMutationComponent, FeedQueryDocument } from '../generated/apollo-components';

type Props = {
  id: string;
};

class PublishDraft extends React.Component<Props> {
  render() {
    const { id } = this.props;
    return (
      <PublishMutationComponent>
        {publishDraft => (
          <form
            onSubmit={e => {
              e.preventDefault();
              publishDraft({
                variables: { id },
                refetchQueries: [
                  { query: FeedQueryDocument, variables: { published: true } },
                  { query: FeedQueryDocument, variables: { published: false } }
                ]
              });
            }}
          >
            <button type="submit">Publish</button>
          </form>
        )}
      </PublishMutationComponent>
    );
  }
}

export default PublishDraft;
