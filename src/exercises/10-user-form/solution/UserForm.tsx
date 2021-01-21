import React, {ChangeEvent, FormEvent} from 'react';

// styles
const tableRow = {
  display: 'flex',
  backgroundColor: '#eaeaea',
  justifyContent: 'space-between',
  padding: '5px'
};

const tableHeader = {
  display: 'flex',
  backgroundColor: '#f3f3f3',
  justifyContent: 'space-between',
  padding: '5px'
};

const labelStyle = {
  marginRight: '10px'
};


interface User {
  firstName: string,
  lastName: string,
  username: string,
}

interface State {
  users: User[],
  form: User
}

class UserForm extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      form: {
        username: '',
        firstName: '',
        lastName: '',
      },
      users: []
    };
  }

  handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ form: {...this.state.form, firstName: event.target.value }}) ;
  };

  handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ form: {...this.state.form, lastName: event.target.value }}) ;
  };

  handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ form: {...this.state.form, username: event.target.value }}) ;
  };

  handleSubmit = (event: FormEvent) => {
    console.log("button clicked ", this.state);
    // create new user from form values
    const newUser = {
      username: this.state.form.username,
      firstName: this.state.form.firstName,
      lastName: this.state.form.lastName
    };
    // add user to users array in state
    this.setState({ users: [...this.state.users, newUser]});
    // reset form
    this.setState({ form: { username: '', lastName: '', firstName: '' }});
    event.preventDefault();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName" style={labelStyle}>
              First name
            </label>
            <input id="firstName" type="text" value={this.state.form.firstName} onChange={this.handleFirstNameChange} />
          </div>
          <div>
            <label htmlFor="lastName" style={labelStyle}>
              Last name
            </label>
            <input id="lastName" type="text" value={this.state.form.lastName} onChange={this.handleLastNameChange} />
          </div>
          <div>
            <label htmlFor="username" style={labelStyle}>
              Username
            </label>
            <input id="username" type="text" value={this.state.form.username} onChange={this.handleUsernameChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>Users</h2>
          <div style={tableHeader}>
            <div>username</div>
            <div>lastName</div>
            <div>firstName</div>
          </div>
          {this.state.users.map((user, index) => (
            <div key={index} style={tableRow}>
              <div>{user.username}</div>
              <div>{user.lastName}</div>
              <div>{user.firstName}</div>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default UserForm;
