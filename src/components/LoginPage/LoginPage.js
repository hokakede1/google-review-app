import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Radium from 'radium';

const styles = {
  wrapper: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(#ff9a9e,#fecfef)',
  },
  loginSegment: {
    width: '100%',
    height: '250px',
    '@media (min-width: 500px)': {
      width: '400px',
      height: '300px',
    },
  },

};
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      name: 'hi',
    };
  }
  render() {
    return (
      <div style={styles.wrapper}>
        <Segment raised style={styles.loginSegment}>
          <h1>{this.state.name}</h1>
        </Segment>
      </div>
    );
  }
}
// LoginPage = Radium(LoginPage)
export default Radium(LoginPage);
