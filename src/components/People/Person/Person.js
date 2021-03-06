import React, { Component } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.myInputRef = React.createRef();
  }

  //*Adding this property allows me to access context outside of the JSX essentially connecting this class based component to my context behind the scenes*/
  static contextType = AuthContext;

  componentDidMount() {
    // Must use current here because the element that myInputRef points to is now stored in the current reference
    this.myInputRef.current.focus();
    console.log(this.context.isLoggedIn);
  }

  render() {
    let loggedInDisplay = null;

    if (this.context.isLoggedIn) {
      loggedInDisplay = <p>Logged in!</p>;
    } else {
      loggedInDisplay = (
        <React.Fragment>
          <p>Please Log In</p>
          <label htmlFor="username">UserName: </label>
          <input id="username" placeholder="username" />
          <label htmlFor="password"> Password: </label>
          <input id="password" placeholder="i.e. b@c0n!$Awesome" />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className={classes.personContainer}>
          <form className={classes.personForm}>
          {/* <AuthContext.Consumer>
          {//Consumer doesn't return JSX but a function that receives the context object
          (context) => (context.isLoggedIn ? <p>Logged In!</p> : <p>Please log in</p>)}
        </AuthContext.Consumer> */}
          {loggedInDisplay}
          <p>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          {/* props.children allows me to render content that is placed between the opening and closing tags of my component in App.js */}
          <p>{this.props.children}</p>
          <label htmlFor="nameChangeInput">Change Name: </label>
          <input
            id="nameChangeInput"
            ref={this.myInputRef}
            type="text"
            onChange={this.props.handleInputName}
            placeholder={`i.e. ${this.props.name}`}
          />
          <button className={classes.personButtons} onClick={this.props.deletePerson}>
            Delete Person
          </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  handleInputName: PropTypes.func,
  deletePerson: PropTypes.func,
};

export default Person;
