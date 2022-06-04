import React, { Component } from "react";
import {Redirect, BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <div className="card">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>

      <li>
        <Link to={"/home/system"} >
          View System
        </Link>
      </li>
      
      </div>
    );
  }
}
