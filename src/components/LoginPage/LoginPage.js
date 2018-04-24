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
    backgroundColor: 'red',
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
        <Segment>
          <h1>{this.state.name}</h1>
        </Segment>
      </div>
    );
  }
}
// LoginPage = Radium(LoginPage)
export default Radium(LoginPage);
