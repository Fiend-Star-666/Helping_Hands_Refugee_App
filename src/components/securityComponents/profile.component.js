import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import {Redirect, BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
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
  text-transform: uppercase;
  text-align: center;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
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

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 13px;
  }
`;










export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    
    
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="card-container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3 style={{textAlign:'center'}}>
            <strong >Profile</strong> 
          </h3>
        </header>
          
        
         <p >
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>

       <div className='container'>   
        <CardWrapper>
          <CardContainer
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
        <BottomContainer>
        <Link to={"/account/view/pinfo/"+currentUser.accid} >
            <DetailsContainer>
              <SpacedHorizontalContainer>
                <MediumText> Personal Info</MediumText>
              </SpacedHorizontalContainer>
              
                <BuyButton>View</BuyButton>
            </DetailsContainer>
            </Link>
        
          </BottomContainer>
          </CardContainer>
          <span>
            &emsp;
            &emsp;
            &emsp;
            &emsp;
            &emsp;
            &emsp;
          </span>
          <CardContainer
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
        <BottomContainer>
        <Link to={"/vehiclereservation/account/view/"+currentUser.accid} >
            <DetailsContainer>
              <SpacedHorizontalContainer>
                <MediumText> Reservations</MediumText>
              </SpacedHorizontalContainer>

              <BuyButton>View</BuyButton>
            </DetailsContainer>
            </Link>
        
          </BottomContainer>
          </CardContainer>
        </CardWrapper>
      </div>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        <p>
          <strong>Account Id:</strong>{" "}
          {currentUser.accid}
        </p>
      </div>: null}

      
      
<br></br>

   
      
            
      </div>
    );
  }
 }

/*



/*

        <CardWrapper>
          <CardContainer
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
          <BottomContainer>
            <DetailsContainer>
              <SmallText>NIKE</SmallText>
              <SpacedHorizontalContainer>
                <MediumText>AIR JORDAN 1 MID SE GC</MediumText>
                <MediumText>¥856</MediumText>
              </SpacedHorizontalContainer>

              <SpacedHorizontalContainer>
                <MediumText>YOUR NEXT SHOES</MediumText>
                <BuyButton>BUY</BuyButton>
              </SpacedHorizontalContainer>

          </DetailsContainer>        
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
*/