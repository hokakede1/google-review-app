import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import Radium from "radium";

const styles = {
  wrapper: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // background: 'linear-gradient(#ff9a9e,#fecfef)'
    background:
      "linear-gradient(rgba(43, 44, 78, 0.8), rgba(43, 44, 78, 1)), url(https://source.unsplash.com/cNgsAdd4-m4)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
//   loginSegment: {
//     width: "100%",
//     height: "250px",
//     "@media (min-width: 500px)": {
//       width: "400px",
//       height: "300px"
//     }
//   },
  loginContainer: {
    color: "#B2B2B2",
    fontSize: "14px",
    fontWeight: "400"
  },
  signInUpContainer: {
    width: "180px",
	marginBottom: "120px",
	marginLeft: "12px",
  },
  userSelected: {
	  color: "#E3E3E3",
	  fontSize: "21px",
	  marginBottom: "5px",
  },
  userUnselected: {
	color: "#717595",
	fontSize: "21px",
	marginBottom: "5px",
  },
  loginHeader: {
    marginLeft: "12px"
  },
  loginInput: {
    width: "320px",
    height: "35px",
    marginTop: "10px",
    marginBottom: "15px",
    paddingLeft: "16px",
    backgroundColor: "rgba(113, 117, 149, 0.2)",
    border: "0",
    borderRadius: "25px",
    fontSize: "15px",
    color: "#E3E3E3"
  },
  loginButton: {
    backgroundColor: "#1762EE",
    width: "320px",
    height: "35px",
    borderRadius: "25px",
    color: "#E3E3E3",
    border: "none",
    marginBottom: "90px"
  },
  keepSignedInContainer: {
    display: "flex",
    marginLeft: "12px",
    marginBottom: "15px"
  },
  keepSignedInCheckbox: {

  },
  underlineStyle: {
    height: "2px",
    color: "#717595",
    background: "rgba(113, 117, 149, 0.2)",
    fontSize: "0",
    border: "0"
  },
  forgotPasswordContainer: {
	textAlign: "center",
	marginTop: "51px",
	color: "#717595",
  }, 
  displayFlex: {
    display: "flex",
    justifyContent: "space-between"
  }
};

class LoginPage extends Component {
  state = {
    signIn: true,
    signUp: false
  };

  handleSignIn = () => {
    this.setState({
      signIn: true,
      signUp: false
    });
  };

  handleSignUp = () => {
    this.setState({
      signIn: false,
      signUp: true
    });
  };

  render() {
    console.log(`[STATE]`, this.state);
    return (
      <div style={styles.wrapper}>
        <div style={styles.loginContainer}>
          <div style={[styles.displayFlex, styles.signInUpContainer]}>
            <div onClick={this.handleSignIn}>
              {this.state.signIn ? (
                <div>
                  <h1 style={styles.userSelected}>SIGN IN</h1>
                  <hr
                    style={[
                      styles.underlineStyle,
                      { color: "#1762EE", background: "#1762EE", height: "2px" }
                    ]}
                  />
                </div>
              ) : (
                <div>
                  <h1 style={styles.userUnselected}>SIGN IN</h1>
                </div>
              )}
            </div>
            <div onClick={this.handleSignUp}>
			{this.state.signUp ? (
                <div>
                  <h1 style={styles.userSelected}>SIGN UP</h1>
                  <hr
                    style={[
                      styles.underlineStyle,
                      { color: "#1762EE", background: "#1762EE", height: "2px" }
                    ]}
                  />
                </div>
              ) : (
                <div>
                  <h1 style={styles.userUnselected}>SIGN UP</h1>
                </div>
              )}
            </div>
          </div>
          <div>
            <h3 style={styles.loginHeader}>USERNAME</h3>
            <input type="text" style={styles.loginInput} />
          </div>
          <div>
            <h3 style={styles.loginHeader}>PASSWORD</h3>
            <input type="text" style={styles.loginInput} />
          </div>
          <div style={styles.keepSignedInContainer}>
            <input type="checkbox" style={{marginRight: "5px"}}/>
            <h3>Keep me Signed in</h3>
          </div>
          <button style={styles.loginButton}>SIGN IN</button>
          <div>
            <hr style={styles.underlineStyle} />
          </div>
          <div style={styles.forgotPasswordContainer}>
            <h3>Forgot Password?</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(LoginPage);
