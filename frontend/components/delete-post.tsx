import React from 'react';
import { DeleteOnePostComponent, FeedQueryDocument } from '../generated/apollo-components';

type Props = {
  id: string;
};

class DeletePost extends React.Component<Props> {
  render() {
    const { id } = this.props;
    return (
      <DeleteOnePostComponent>
        {deleteOnePost => (
          <form
            onSubmit={e => {
              e.preventDefault();
              deleteOnePost({
                variables: { id },
                refetchQueries: [
                  { query: FeedQueryDocument, variables: { published: true } },
                  { query: FeedQueryDocument, variables: { published: false } }
                ]
              });
            }}
          >
            <button type="submit">Delete</button>
          </form>
        )}
      </DeleteOnePostComponent>
    );
  }
}

export default DeletePost;
