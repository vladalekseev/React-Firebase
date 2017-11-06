import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
      super();

      this.state = {
          speed : 10
      };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');

      speedRef.on('value', snap => {
          console.log(snap.val());
          this.setState({
             speed : snap.val()
          });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}

export default App;
