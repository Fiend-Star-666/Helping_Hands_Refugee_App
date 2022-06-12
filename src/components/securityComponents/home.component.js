import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import UserService from "../../services/user.service";

import Logo from "../../icons/logo.svg";
import Contact from "../../icons/contact_illustration.svg";
import HandsImg from "../../icons/hands.svg";
import HouseDrawn from "../../icons/house_hand_drawn.svg";
import House from "../../icons/house_illustration.svg";
import Join from "../../icons/join_illustration.svg";
import PurpleBackdrop from "../../icons/lightpurple.svg";
import MapConnect from "../../icons/map_connecting_world_illustration.svg";
import Motherhood from "../../icons/motherhood_illustration.svg";
import ProfileInfoHand from "../../icons/profile_info_hand.svg";
import UserDrawn from "../../icons/user_hand_drawn.svg";
import World from "../../icons/world_illustration.svg";
// import Shape from "../../Shape.svg";





export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      // <div className="container">
      //   // <header className="jumbotron">
      //   //   <h3>{this.state.content}</h3>
      //   // </header>
      // </div>
      <div>
      <section id="hero">
        <div class="hero-content">
          <h1 id="home-headline">Helping Hand</h1>
          <p>We're on a world wide mission to help Ukraine refugees in need. Small or big, you can show your caring by lending a helping hand.</p>
          <button class="button">Join Today</button>
        </div>
      </section>

      <section id="features" className="background-shape spaceTop">
        <div className="features-content text-center tl">
          <h1>Become a <span className="orange">Volunteer</span></h1>
            <CardGroup>
              <Card className="feature shadow-border text-center spacing">
                <Card.Body>
                <Card.Img src={Contact} alt="Contact" style={{maxWidth: "180px", height: "150px"}} />
                <Card.Title className="orange ">Set up your account</Card.Title>
                <Card.Text>Join Helping Hand today to help refugees. Set up your account to see refugees’ needs, accept new tasks, track your volunteer history, and receive special event notification.</Card.Text>
                </Card.Body>
              </Card>
              <Card className="feature shadow-border text-center spacing">
                <Card.Body>
                <Card.Img src={World} alt="Contact" style={{maxWidth: "160px", height: "150px"}} />
                <Card.Title className="orange ">Accept a task</Card.Title>
                <Card.Text>Contribute to the community by accepting a task posted by refugees. Pick the one you are able to help, whether it is temorary accommodation, job opportunities, or clothes.</Card.Text>
                </Card.Body>
              </Card>
              <Card className="feature shadow-border text-center spacing">
                <Card.Body>
                <Card.Img src={Join} alt="Contact" style={{maxWidth: "120px", height: "150px"}} />
                <Card.Title className="orange ">Collect reward points</Card.Title>
                <Card.Text>After completing each task, you will be awarded a certain amount of points. These points can be redeemed for volunteer hours or discounts.</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          <button className="button">Create Account</button>
        </div>
      </section>

      <section id="home-refugees">
        <div className="home-refugees-content">
          <h1>In need of <span className="orange">Assistance?</span></h1>
          <div className="home-ref-card">
            <h2>We have Volunteers who want to help you</h2>
            <p>Our volunteers can help with providing temorary accommodation, job opportunities, child care, household items, or food.</p>
          </div>
          <div className="home-ref-card">
            <h2>Start by expressing your needs on a ‘task card’</h2>
            <p>Express your needs by posting a ‘task card.’ Our volunteers can then see the tasks and accept one of them. You’ll be notified when there is a volunteer wanting to help you.</p>
          </div>
          <div className="home-ref-card">
            <h2>Provide precious feedback after receiving the help</h2>
            <p>Rate the volunteers afterwards. Did they meet your expectations? Do you want to keep the connection in the future? You can also send a thank you card to your volunteers</p>
          </div>
        </div>
      </section>
      </div>
    );
  }
}