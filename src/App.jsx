import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import { config } from './config/config';
import User from './User/User.jsx';
import UserForm from './UserForm/UserForm.jsx';

class App extends Component {
  constructor() {
      super();

      this.addUser = this.addUser.bind(this);

      this.app = firebase.initializeApp(config);
      this.database = this.app.database().ref().child('users');

      this.state = {
          users: []
      };
  }

    componentWillMount() {
      const prevUsers = this.state.users;

      this.database.on('child_added', snap => {
          prevUsers.push({
              id: snap.key,
             login: snap.val().login
         })

          this.setState({
              users: prevUsers
          })
      });

  }

  addUser(user) {
      this.database.push().set({ login: user, some: user });
  }

  render() {
    return (
      <div className="App">
          {
              this.state.users.map((user) => {
                  return (
                      <User userLogin={user.login}
                            userId={user.id}
                            key={user.id}
                      />
                  )
              })
          }
          <div>
              <UserForm addUser={this.addUser} />
          </div>
      </div>
    );
  }
}

export default App;
