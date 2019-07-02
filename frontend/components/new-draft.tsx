import React from 'react';
import { CreateDraftMutationComponent } from '../generated/apollo-components';

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
              createDraft({ variables: { ...this.state } }).then(() => {
                this.setState({ title: '', content: '', authorEmail: '' });
              });
            }}
          >
            <input name="title" value={this.state.title} onChange={this.handleChange} type="text"></input>
            <input name="content" value={this.state.content} onChange={this.handleChange} type="text"></input>
            <input name="authorEmail" value={this.state.authorEmail} onChange={this.handleChange} type="text"></input>

            <button type="submit">Create Draft</button>
          </form>
        )}
      </CreateDraftMutationComponent>
    );
  }
}

export default NewDraft;
