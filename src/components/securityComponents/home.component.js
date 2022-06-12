import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


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
import Review from "../../icons/review.svg";

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
      <Container id="hero" className="text-center">
        <Row>
          <Col className="hero-content d-inline-block m-4">
            <h1 id="home-headline">Helping Hand</h1>
            <p>We're on a world wide mission to help Ukraine refugees in need. Small or big, you can show your caring by lending a helping hand.</p>
            <button className="button">Join Today</button>
          </Col>
          <Col>
            <img className="d-inline-block" src={HandsImg} alt="hand shake" style={{width: "200px", height: "220px"}}></img>
          </Col>
        </Row>
      </Container>

      <div className="arrow-up"></div>
      <section id="features" className="background-shape spaceTop bold">
        <div className="features-content text-center mb-4">
          <h1 className="pb-4 white bold">Become a <span className="orange">Volunteer</span></h1>
          <CardGroup className="text-center spacing">
            <Card className="feature shadow-border spacing rounded mb-4">
              <Card.Body>
              <Card.Img src={Contact} alt="Contact" style={{maxWidth: "180px", height: "190px"}} />
              <Card.Title className="orange ">Set up your account</Card.Title>
              <Card.Text>Join Helping Hand today to help refugees. Set up your account to see refugees’ needs, accept new tasks, track your volunteer history, and receive special event notification.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="feature shadow-border spacing rounded mb-4">
              <Card.Body>
              <Card.Img src={World} alt="Contact" style={{maxWidth: "160px", height: "190px"}} />
              <Card.Title className="orange ">Accept a task</Card.Title>
              <Card.Text>Contribute to the community by accepting a task posted by refugees. Pick the one you are able to help, whether it is temporary accommodation, job opportunities, or clothes.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="feature shadow-border spacing rounded mb-4">
              <Card.Body>
              <Card.Img src={Join} alt="Contact" style={{maxWidth: "120px", height: "190px"}} />
              <Card.Title className="orange ">Collect reward points</Card.Title>
              <Card.Text>After completing each task, you will be awarded a certain amount of points. These points can be redeemed for volunteer hours or discounts.</Card.Text>
              </Card.Body>
              </Card>
            </CardGroup>
          <button className="button mb-4">Create Account</button>
        </div>
      </section>

      <section id="home-refugees">
        <Container className="home-refugees-content text-center bold">

          <h1 className="mb-4 bold">In need of <span className="orange">Assistance?</span></h1>

          <Row className="mb-3">
            <Col>
              <img className="image-width" src={Motherhood} alt="Contact" />
            </Col>
            <Col className="home-ref-card light-purple-background" xs={12} md={5} >
                <Card.Title>We have Volunteers who want to help you</Card.Title>
                <Card.Text>Our volunteers can help with providing temorary accommodation, job opportunities, child care, household items, or food.</Card.Text>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col className="home-ref-card light-purple-background" xs={12} md={5} >
              <Card.Title>Start by expressing your needs on a ‘task card’</Card.Title>
              <Card.Text>Express your needs by posting a ‘task card.’ Our volunteers can then see the tasks and accept one of them. You’ll be notified when there is a volunteer wanting to help you.</Card.Text>
            </Col>
            <Col xs={{ order: 'first' }} md={{ order: 'last' }}>
              <img className="image-width" src={House} alt="House" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <img className="image-width" src={Review} alt="Agreement" />
            </Col>
            <Col className="home-ref-card light-purple-background" xs={12} md={5} >
                <Card.Title>Provide precious feedback after receiving the help</Card.Title>
                <Card.Text>Rate the volunteers afterwards. Did they meet your expectations? Do you want to keep the connection in the future? You can also send a thank you card to your volunteers</Card.Text>
            </Col>
          </Row>

        </Container>
      </section>

      <footer>
        <ul>
          <Link></Link> 
        </ul>
      </footer>
      </div>
    );
  }
}