import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jonathan', age: 33 },
      { name: 'Stephanie', age: 29 },
      { name: 'Travis', age: 38 },
    ],
  };

  nameSwitchHandler = (newName, newNameTwo, newNameThree) => {
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: newNameTwo, age: 29 },
        { name: newNameThree, age: 38 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Course :)</h1>
        <button onClick={()=>this.nameSwitchHandler('Johnny Boy!', 'Stephy', 'Travvy')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person
          nameSwitchHandler={this.nameSwitchHandler.bind(this, '**JONATHAN**', '***STEPHANIE***', '<---TRAVIS--->')}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          {/*Anything placed between component tags can be accessed via props.children*/}
          My hobbies: Gaming
        </Person>
      </div>
    );
  }
}

export default App;
