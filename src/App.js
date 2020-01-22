import React, { Component } from 'react';
import './App.css';
import List from './components/List.js'
import UserInput from './components/UserInput.js'


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
        firstName: "will",
        lastName: "palafox",
        userName: "wpalafox",
        games: 0,
      },
      {
        firstName: "nestor",
        lastName: "islas",
        userName: "neggstor",
        games: 0,
      },
      {
        firstName: "son",
        lastName: "truong",
        userName: "sun",
        games: 0
      },
      {
        firstName: "maria",
        lastName: "hernandez",
        userName: "mhernandez",
        games: 0
      }
    ]
}

  //Create a method for adding Gamers into the gamerz array

addGamer = (gamer) => {
  console.log(gamer);
 /* this.setState((currentState) => ({
    
  })) */
  
}









render() {
    return (
      <div className="App">

       <div className="container">
        <h1 className="App-title">Gamerz</h1>
        <UserInput addGamer={this.addGamer}/>
        <List gamerz={this.state.gamerz} />
        </div> 
      
      </div>
    );
  }
}

export default App;
