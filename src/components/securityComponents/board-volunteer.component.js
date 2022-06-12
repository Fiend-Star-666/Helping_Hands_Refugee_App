import React, { Component } from "react";
import {Redirect, BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import "../../css/dashboard.css"

export default class BoardVolunteer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getVolunteerBoard().then(
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
      // <div className="card">
      //   <header className="jumbotron">
      //   <h3>{this.state.content}</h3>
      //   </header>
      // </div>
      <>
        <section id="volunteer-h">
          <div class="volunteer-h-contents">
            <h1>Welcome, username</h1>
            <p>Ready to take on a task? View them below</p>
          </div>
        </section>

        <div id="dashboard-main">
          <div class="side-nav">
            <ul>
              <li>Available</li>
              <li>Accepted</li>
              <li>Completed</li>
            </ul>
          </div>
          <div class="tasks">
            <h2 class="task-h">Available Tasks</h2>
            <div class="task-content">
              <div class="task-profile-pic">
                <img />
                <p>Username</p>
              </div>
              <div class="task-description">
                <h3>Tasking title goes here</h3>
                <h4>Location</h4>
                <p>Description here</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
