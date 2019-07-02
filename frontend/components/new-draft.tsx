import React from 'react';
import { CreateDraftMutationComponent, FeedQueryDocument } from '../generated/apollo-components';

type Props = {};
const initialState = { title: '', content: '', authorEmail: '' };
type State = typeof initialState;

class NewDraft extends React.Component<Props> {
  state: State = initialState;

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <CreateDraftMutationComponent>
        {createDraft => (
          <form
            onSubmit={e => {
              e.preventDefault();
              createDraft({
                variables: { ...this.state },
                refetchQueries: [
                  { query: FeedQueryDocument, variables: { published: true } },
                  { query: FeedQueryDocument, variables: { published: false } }
                ]
              }).then(() => {
                this.setState({ title: '', content: '', authorEmail: '' });
              });
            }}
          >
            <input placeholder="title" name="title" value={this.state.title} onChange={this.handleChange} type="text" />
            <input placeholder="content" name="content" value={this.state.content} onChange={this.handleChange} type="text" />
            <input
              placeholder="authorEmail"
              name="authorEmail"
              value={this.state.authorEmail}
              onChange={this.handleChange}
              type="text"
            />

            <button type="submit">Create Draft</button>
          </form>
        )}
      </CreateDraftMutationComponent>
    );
  }
}

export default NewDraft;
