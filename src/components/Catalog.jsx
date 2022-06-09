import React, {Component}from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

import verna from "../vehicleCatalog/verna.png"
import pulsar from "../vehicleCatalog/pulsar.png"
import omni from "../vehicleCatalog/omni.png"
import slavia from "../vehicleCatalog/slavia.png"
import ciaz from "../vehicleCatalog/ciaz.png"
import xuv700  from "../vehicleCatalog/xuv700.png"
import swift from "../vehicleCatalog/swift.png"
import volvoFH from "../vehicleCatalog/volvo.png"
import hcity from "../vehicleCatalog/city.png"




const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 350px;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #a6a6ed;
  color: #fff;
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #400080;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const NikeText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 76px;
  font-weight: 900;
`;

const ShoesWrapper = styled.div`
  width: 150%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoes = styled(motion.div)`
  width: 300px;
  height: 250px;
  z-index: 99;
  user-select: none;
  margin-right: 3em;
  margin-top: 4em;
  z: 10000;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
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
  background-color: #400080;
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
    border: 3px solid #fbbe01;
  }
`;




export default function Catalog(){
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [-30, 30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

        return(
            <div >
            
            <br></br>
            <br></br>
            <div className='card' style={{backgroundColor:'purple', boxShadow: '10px 10px' }}>
                <h1 style={{color:'white',textShadow: '1px 2px'}}>Vehicle Catalog :</h1> 
            </div> 
            <br></br>

                <br></br>
                <br></br>
                <div>
            
        <CardWrapper>
            <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
            <TopContainer>
            <CircleWrapper>
                <Circle />
            </CircleWrapper>
            <ShoesWrapper>
                <Shoes
                style={{
                    x,
                    y,
                    rotateX,
                    rotateY,
                    z: 100000
                }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
                >
                <img src={verna} />
                </Shoes>
            </ShoesWrapper>
            </TopContainer>
            <BottomContainer>
            <DetailsContainer>
                <SmallText>Hyundai</SmallText>
                    <SpacedHorizontalContainer>
                        <MediumText>Verna</MediumText>
                        <MediumText>₹ 3500/Day</MediumText>
                    </SpacedHorizontalContainer>
                    <br></br>

                    <SpacedHorizontalContainer>
                    
                        <a href="/vehicle/view/3"><BuyButton>More Info</BuyButton></a>
                    </SpacedHorizontalContainer>

        </DetailsContainer>        
        </BottomContainer>
        </CardContainer>

        <span>
            &emsp;
            &emsp;
            &emsp;
            &emsp;
            &emsp;
        </span>

        <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
            <TopContainer>
            <CircleWrapper>
                <Circle />
            </CircleWrapper>
            <ShoesWrapper>
                <Shoes
                style={{
                    x,
                    y,
                    rotateX,
                    rotateY,
                    z: 100000
                }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
                >
                <img src={pulsar} />
                </Shoes>
            </ShoesWrapper>
            </TopContainer>
            <BottomContainer>
            <DetailsContainer>
                <SmallText>bajaj</SmallText>
                    <SpacedHorizontalContainer>
                        <MediumText>Pulsar 150</MediumText>
                        <MediumText>₹ 800/Day</MediumText>
                    </SpacedHorizontalContainer>
                    <br></br>

                    <SpacedHorizontalContainer>
                  <a href="/vehicle/view/7"><BuyButton>more info</BuyButton></a>
                    </SpacedHorizontalContainer>

        </DetailsContainer>        
        </BottomContainer>
        </CardContainer>

        <span>
            &emsp;
            &emsp;
            &emsp;
            &emsp;
            &emsp;
        </span>

        <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
            <TopContainer>
            <CircleWrapper>
                <Circle />
            </CircleWrapper>
            <ShoesWrapper>
                <Shoes
                style={{
                    x,
                    y,
                    rotateX,
                    rotateY,
                    z: 100000
                }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
                >
                <img src={omni} />
                </Shoes>
            </ShoesWrapper>
            </TopContainer>
            <BottomContainer>
            <DetailsContainer>
                <SmallText>Maruti Suzuki</SmallText>
                    <SpacedHorizontalContainer>
                        <MediumText>Omni Van</MediumText>
                        <MediumText>₹ 1500/Day</MediumText>
                    </SpacedHorizontalContainer>
                <br></br>

                    <SpacedHorizontalContainer>
                  <a href="/vehicle/view/6"><BuyButton>more info</BuyButton></a>
                    </SpacedHorizontalContainer>

        </DetailsContainer>        
        </BottomContainer>
        </CardContainer>
        </CardWrapper>

<br></br>
<br></br>

        <CardWrapper>
            <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
            <TopContainer>
            <CircleWrapper>
                <Circle />
            </CircleWrapper>
            <ShoesWrapper>
                <Shoes
                style={{
                    x,
                    y,
                    rotateX,
                    rotateY,
                    z: 100000
                }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
                >
                <img src={slavia} />
                </Shoes>
            </ShoesWrapper>
            </TopContainer>
            <BottomContainer>
            <DetailsContainer>
                <SmallText>skoda</SmallText>
                    <SpacedHorizontalContainer>
                        <MediumText>slavia</MediumText>
                        <MediumText>₹ 3500/Day</MediumText>
                    </SpacedHorizontalContainer>
                    <br></br>

                    <SpacedHorizontalContainer>
                    
                        <a href="/vehicle/view/1"><BuyButton>More Info</BuyButton></a>
                    </SpacedHorizontalContainer>

        </DetailsContainer>        
        </BottomContainer>
        </CardContainer>

        <span>
            &emsp;
            &emsp;
            &emsp;
            &emsp;
            &emsp;
        </span>

        <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
            <TopContainer>
            <CircleWrapper>
                <Circle />
            </CircleWrapper>
            <ShoesWrapper>
                <Shoes
                style={{
                    x,
                    y,
                    rotateX,
                    rotateY,
                    z: 100000
                }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
                >
                <img src={ciaz} />
                </Shoes>
            </ShoesWrapper>
            </TopContainer>
            <BottomContainer>
            <DetailsContainer>
                <SmallText>Maruti Suzuki</SmallText>
                    <SpacedHorizontalContainer>
                        <MediumText>Ciaz</MediumText>
                        <MediumText>₹ 3500/Day</MediumText>
                    </SpacedHorizontalContainer>
                    <br></br>

                    <SpacedHorizontalContainer>
                  <a href="/vehicle/view/9"><BuyButton>more info</BuyButton></a>
                    </SpacedHorizontalContainer>

        </DetailsContainer>        
        </BottomContainer>
        </CardContainer>

        <span>
            &emsp;
            &emsp;
            &emsp;
            &emsp;
            &emsp;
        </span>

        <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
            <TopContainer>
            <CircleWrapper>
                <Circle />
            </CircleWrapper>
            <ShoesWrapper>
                <Shoes
                style={{
                    x,
                    y,
                    rotateX,
                    rotateY,
                    z: 100000
                }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
                >
                <img src={xuv700} />
                </Shoes>
            </ShoesWrapper>
            </TopContainer>
            <BottomContainer>
            <DetailsContainer>
                <SmallText>Mahindra</SmallText>
                    <SpacedHorizontalContainer>
                        <MediumText>xuv 700</MediumText>
                        <MediumText>₹ 2800/Day</MediumText>
                    </SpacedHorizontalContainer>
                <br></br>

                    <SpacedHorizontalContainer>
                  <a href="/vehicle/view/5"><BuyButton>more info</BuyButton></a>
                    </SpacedHorizontalContainer>

        </DetailsContainer>        
        </BottomContainer>
        </CardContainer>
        </CardWrapper>

<br></br>
<br></br>

        <CardWrapper>
            <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
            <TopContainer>
            <CircleWrapper>
                <Circle />
            </CircleWrapper>
            <ShoesWrapper>
                <Shoes
                style={{
                    x,
                    y,
                    rotateX,
                    rotateY,
                    z: 100000
                }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
                >
                <img src={swift} />
                </Shoes>
            </ShoesWrapper>
            </TopContainer>
            <BottomContainer>
            <DetailsContainer>
                <SmallText>maruti Suzuki</SmallText>
                    <SpacedHorizontalContainer>
                        <MediumText>Swift</MediumText>
                        <MediumText>₹ 1000/Day</MediumText>
                    </SpacedHorizontalContainer>
                    <br></br>

                    <SpacedHorizontalContainer>
                    
                        <a href="/vehicle/view/2"><BuyButton>More Info</BuyButton></a>
                    </SpacedHorizontalContainer>

        </DetailsContainer>        
        </BottomContainer>
        </CardContainer>

        <span>
            &emsp;
            &emsp;
            &emsp;
            &emsp;
            &emsp;
        </span>

        <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
            <TopContainer>
            <CircleWrapper>
                <Circle />
            </CircleWrapper>
            <ShoesWrapper>
                <Shoes
                style={{
                    x,
                    y,
                    rotateX,
                    rotateY,
                    z: 100000
                }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
                >
                <img src={volvoFH} />
                </Shoes>
            </ShoesWrapper>
            </TopContainer>
            <BottomContainer>
            <DetailsContainer>
                <SmallText>volvo</SmallText>
                    <SpacedHorizontalContainer>
                        <MediumText>Volvo FH</MediumText>
                        <MediumText>₹ 4000/Day</MediumText>
                    </SpacedHorizontalContainer>
                    <br></br>

                    <SpacedHorizontalContainer>
                  <a href="/vehicle/view/4"><BuyButton>more info</BuyButton></a>
                    </SpacedHorizontalContainer>

        </DetailsContainer>        
        </BottomContainer>
        </CardContainer>

        <span>
            &emsp;
            &emsp;
            &emsp;
            &emsp;
            &emsp;
        </span>

        <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
            <TopContainer>
            <CircleWrapper>
                <Circle />
            </CircleWrapper>
            <ShoesWrapper>
                <Shoes
                style={{
                    x,
                    y,
                    rotateX,
                    rotateY,
                    z: 100000
                }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
                >
                <img src={hcity} />
                </Shoes>
            </ShoesWrapper>
            </TopContainer>
            <BottomContainer>
            <DetailsContainer>
                <SmallText>honda</SmallText>
                    <SpacedHorizontalContainer>
                        <MediumText>Honda City</MediumText>
                        <MediumText>₹ 3500/Day</MediumText>
                    </SpacedHorizontalContainer>
                <br></br>
                    <SpacedHorizontalContainer>
                  <a href="/vehicle/view/8"><BuyButton>more info</BuyButton></a>
                    </SpacedHorizontalContainer>

        </DetailsContainer>        
        </BottomContainer>
        </CardContainer>
        </CardWrapper>
        </div>
    </div> 
    
        )
    }


    /*
                <div className="row">
                  <div className="col-md-4">
                    <div className='card'>
                    <div className="container" style={{boxShadow: '8px 8px'}}>
                        <img src="./Images/car1.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                        <div className="card-body">
                             <h5 className="card-title">Hyundai Verna</h5>
                             <p className="card-text">Price: ₹ 3500/Day </p>
                            <a href="/vehicle/view/3" className="btn btn-primary">More Info</a>
                        </div>
                        </div>
                     </div>
                     <br></br>
                    </div>
                <div className="col-md-4">
                    <div className='card' style={{boxShadow: '8px 8px'}}>
                        <div className="container">
                            <img src="./Images/car2.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Bajaj Pulsar 150</h5>
                                <p className="card-text">Price: ₹ 800/Day</p>
                                 <a href="/vehicle/view/7" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                        </div>
                        <br></br>
                    </div>

                    <div className="col-md-4">
                        <div className='card' style={{boxShadow: '8px 8px'}}>
                        <div className="container" >
                            <img src="./Images/car3.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Maruti Suzuki Omni</h5>
                                <p className="card-text">Price: ₹ 1500/Day</p>
                                 <a href="/vehicle/view/6" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                            </div>
                        </div>
                        <br></br>
                  </div>    
              
                <div className="row">
                  <div className="col-md-4">
                    <div className="card" style={{boxShadow: '8px 8px'}}>
                        <div className='container'>
                        <img src="./Images/car4.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                       
                        <div className="card-body">
                             <h5 className="card-title">Skoda Slavia</h5>
                             <p className="card-text">"Price: ₹ 3500/Day</p>
                            <a href="/vehicle/view/1" className="btn btn-primary">More Info</a>
                        </div>
                        </div> 
                     </div>
                     <br></br>
                    </div>

                <div className="col-md-4">
                        <div className="card" style={{boxShadow: '8px 8px'}}>
                        <div className='container'>
                            <img src="./Images/car5.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Maruti Suzuki Ciaz</h5>
                                <p className="card-text">Price: ₹ 3500/Day</p>
                                 <a href="/vehicle/view/9" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                        </div>
                    </div>
                
                <div className="col-md-4" >
                        <div className="card" style={{boxShadow: '8px 8px'}}>
                            <div className='container'>
                            <img src="./Images/car6.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Mahinda XUV 700</h5>
                                <p className="card-text">Price: ₹ 2800/Day</p>
                                 <a href="/vehicle/view/5" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                        </div>
                    </div>    
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="card" style={{boxShadow: '8px 8px'}}>
                        <div className='container'>
                        <img src="./Images/car7.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                        <div className="card-body">
                             <h5 className="card-title">Maruti Suzuki Swift</h5>
                             <p className="card-text">Price: ₹ 1000/Day</p>
                            <a href="/vehicle/view/2" className="btn btn-primary">More Info</a>
                        </div>
                        </div>
                     </div>
                    </div>
                <div className="col-md-4 ">
                        <div className="card" style={{boxShadow: '8px 8px'}}>
                            <div className='container'>
                            <img src="./Images/car8.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Volvo FH</h5>
                                <p className="card-text">Price: ₹ 4000/Day</p>
                                 <a href="/vehicle/view/4" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card " style={{boxShadow: '8px 8px'}}>
                            <div className='container'>
                            <img src="./Images/car9.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Honda City</h5>
                                <p className="card-text">Price: ₹ 3500/Day</p>
                                 <a href="/vehicle/view/8" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                        </div>
                    </div>    
                </div>

    */