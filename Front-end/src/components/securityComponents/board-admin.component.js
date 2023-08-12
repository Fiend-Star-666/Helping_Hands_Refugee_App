import React, {Component} from "react";
import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";


export default class BoardAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getAdminBoard().then(
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


            </div>


        );
    }
}


/*
here's an example to use the custom style const written above


/*
const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;



          <CardWrapper>
          <CardContainer
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            <BottomContainer>
              <Link to={"/home/system"} >
                <DetailsContainer>
                  <SpacedHorizontalContainer>
                    <MediumText>View System</MediumText>
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
          </span>

          <CardContainer
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            <BottomContainer>
              <Link to={"/account/register/admin"} >
                <DetailsContainer>
                  <SpacedHorizontalContainer>
                    <MediumText>Create Admin Account</MediumText>
                  </SpacedHorizontalContainer>
                  <BuyButton>create</BuyButton>
                </DetailsContainer>
              </Link>
        
          </BottomContainer>
          </CardContainer>
           <span>
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
              <Link to={"/admin/carrentallocation/add"} >
                <DetailsContainer>
                  <SpacedHorizontalContainer>
                    <MediumText>Add a Rental Location</MediumText>
                  </SpacedHorizontalContainer>
                  <BuyButton>add</BuyButton>
                </DetailsContainer>
              </Link>
        
          </BottomContainer>
          </CardContainer>
        </CardWrapper>

*/