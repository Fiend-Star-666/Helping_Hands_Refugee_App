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
      content: "",
      
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
      <li>
          <Link to={"/service/create"} >
            Create a service
          </Link>
        </li>

        <section id="volunteer-h">
          <div className="volunteer-h-contents">
            <div className="volunteer-h-inner">
            <h1>Welcome, username</h1>
            <p>Ready to take on a task? View them below</p>
            </div>
          </div>
        </section>

        <div id="dashboard-main">
          <div className="side-nav">
            <ul>
              <li>Available</li>
              <li>Accepted</li>
              <li>Completed</li>
            </ul>
          </div>
          <div className="tasks">
            <h2 className="task-h">Available Tasks</h2>
            <div className="task-content">
              <div className="task-profile-pic">
                <img />
                <p>Username</p>
              </div>
              <div className="task-description">
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
