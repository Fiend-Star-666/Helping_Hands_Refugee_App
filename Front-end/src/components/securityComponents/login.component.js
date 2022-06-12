import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import AuthService from "../../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.form.validateAll();
    let loginDetails={email: this.state.username, password: this.state.password};
    console.log(loginDetails);
      AuthService.login(loginDetails).then(
        () => {
          const currentUser = AuthService.getCurrentUser();
          if (currentUser.roles == "ROLE_ADMIN") {
          this.props.history.push("/profile");
          } 
          if (currentUser.roles == "ROLE_REFUGEE") {
            this.props.history.push("/refugee");
          }
          if (currentUser.roles == "ROLE_VOLUNTEER") {
            this.props.history.push("/volunteer");
          }
          window.location.reload();
        }
      ).catch(function (error){
        alert('Please enter Correct details');
      });
 
  }

  render() {
    return (
      <div>
      <div className="card col-md-6 offset-md-3 my-5" style={{marginTop: "20px"}}>
        <div className="card-body" style={{marginTop: "20px"}}>

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Email ID:</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="button mb-2 btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
        <Link to={"/forgotpassword"} className="button mb-3" style={{ margin: "0 20px 0 20px"}}>Forgot Password?</Link> 
        
      </div>
      <footer className="lavfooter"></footer>
      </div>
    );
  }
}
