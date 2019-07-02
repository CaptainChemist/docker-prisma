import React from 'react';
import { UsersQueryComponent } from '../generated/apollo-components';

type Props = {};

class UsersList extends React.PureComponent<Props> {
  render() {
    return (
      <UsersQueryComponent>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          if (data && 'users' in data && data.users.length > 0) {
            return (
              <ul>
                {data.users.map(({ id, name, email }, i) => (
                  <li key={i}>
                    <p>
                      name: {name} email: {email} id: {id}
                    </p>
                  </li>
                ))}
              </ul>
            );
          }

          return <p>No users yet.</p>;
        }}
      </UsersQueryComponent>
    );
  }
}

export default UsersList;
