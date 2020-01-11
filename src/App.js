import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js'
import List from './components/List.js'


/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = { 
    gamerz: [
      {
        "firstName": "will",
        "lastName": "palafox",
        "userName": "wpalafox"
      },
      {
        "firstName": "nestor",
        "lastName": "islas",
        "userName": "neggstor"
      },
      {
        "firstName": "son",
        "lastName": "truong",
        "userName": "sun"
      }
    ]
}

  











render() {
    return (
      <div className="App">
        <h1 className="App-title">Gamerz</h1>
        <Form/>
        
        <List gamerz={this.state.gamerz} />
      
      
      
      
      
      </div>
    );
  }
}

export default App;
