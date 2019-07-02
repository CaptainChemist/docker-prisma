import React from 'react';
import { SignupUserMutationComponent, UsersQueryDocument } from '../generated/apollo-components';

type Props = {};
const initialState = { name: '', email: '' };
type State = typeof initialState;

class SignupUser extends React.Component<Props> {
  state: State = initialState;

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignupUserMutationComponent>
        {createUser => (
          <form
            onSubmit={e => {
              e.preventDefault();
              createUser({
                variables: { ...this.state },
                refetchQueries: [{ query: UsersQueryDocument }]
              }).then(() => {
                this.setState({ name: '', email: '' });
              });
            }}
          >
            <input placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} type="text" />
            <input placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} type="text" />

            <button type="submit">Signup User</button>
          </form>
        )}
      </SignupUserMutationComponent>
    );
  }
}

export default SignupUser;
