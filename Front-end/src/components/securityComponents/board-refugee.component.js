import React, { Component } from "react";
import {Redirect, BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import Accepted from "../../icons/accepted-icon.svg";
import Available from "../../icons/available-icon.svg";
import Completed from "../../icons/completed-icon.svg"; 
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export default class BoardRefugee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getRefugeeBoard().then(
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
      //   <li>
      //     <Link to={"/task/create"} >
      //       Create a Task
      //     </Link>
      //   </li>
      // </div>
      <>

        <section id="volunteer-h">
          <div className="volunteer-h-contents">
            <div className="volunteer-h-inner">
              <h1 style={{textShadow: '1px 2px'}}>Welcome, Larysa</h1>
              <p style={{textShadow: '0px 1px'}}>Look through our volunteers services!</p>
            </div>
          </div>
        </section>
            

            
        <div className="side-nav">
          <ul>
            <br></br>
            <br></br>
            <img className="" src={Available} alt="Available" />
            <li>Available</li>
            <br></br>
            <br></br>

            <img className="" src={Accepted} alt="Accepted" />
            <li>Accepted</li>
            <br></br>
            <br></br>

            <img className="" src={Completed} alt="Completed" />
            <li>Completed</li>
          </ul>
        </div>

        <div id="dashboard-main">
        
          <div className="tasks">
            <h2 className="task-h">Available Services</h2>
            <Card className="task-content mb-4" style={{boxShadow: '5px 3px'}}>
              <div className="task-description">
                <h3>Free place to stay in Belarus</h3>
                <h4>Republic of Belarus</h4>
                <p>Please reach out to us if you're in need. We would love to accomadate.</p>
              </div>
            </Card>
            <Card className="task-content mb-4" style={{boxShadow: '5px 3px'}}>
              <div className="task-description">
                <h3>Child Care in Chișinău</h3>
                <h4>Chișinău, Moldova</h4>
                <p>We are running a day care for all Ukrainian families. Give us a call for more info!</p>
              </div>
            </Card>
            <Card className="task-content mb-4" style={{boxShadow: '5px 3px'}}>
              <div className="task-description">
                <h3>Groceries in Bucharest</h3>
                <h4>Bucharest, Romania</h4>
                <p>We have a large supply of household items and groceries for those in need. Come on by and grab what you need.</p>
              </div>
            </Card>
          </div>
          <footer></footer>
        </div>
      </>
    );
  }
}

