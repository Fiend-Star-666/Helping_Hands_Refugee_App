import React, { Component } from "react";
import {Redirect, BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 210px;
  height: 180px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #a6a6ed;
  color: #fff;
  position: relative;
  cursor: grab;
`;


const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;


const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-align: center;
`;



const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #400080 ;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: #cd00cd;
    color: #fff;
    border: 3px solid #fff;
  }
`;



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
          <h3 style={{textAlign:'center'}}>User Board</h3>
        </header>

     
          <br></br>




      </div>
    );
  }
}
