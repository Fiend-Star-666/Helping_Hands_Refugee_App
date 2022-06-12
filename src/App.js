import './App.css';
import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import AuthService from './services/auth.service';
import SLogin from './components/securityComponents/login.component';
import Profile from './components/securityComponents/profile.component';
import BoardAdmin from './components/securityComponents/board-admin.component';
import BoardUser from './components/securityComponents/board-user.component';
import BoardVolunteer from './components/securityComponents/board-volunteer.component';
import BoardRefugee from './components/securityComponents/board-refugee.component';
import Register from './components/securityComponents/register.component';
import EventBus from './common/EventBus';
import error from './components/error';
import Home from "./components/securityComponents/home.component.js";
import TaskForm from "./components/Pages/TaskForm.js"
// import NavBar from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "./icons/logo.svg";
import Contact from "./icons/contact_illustration.svg";
import HandsImg from "./icons/hands.svg";
import HouseDrawn from "./icons/house_hand_drawn.svg";
import House from "./icons/house_illustration.svg";
import Join from "./icons/join_illustration.svg";
import PurpleBackdrop from "./icons/lightpurple.svg";
import MapConnect from "./icons/map_connecting_world_illustration.svg";
import Motherhood from "./icons/motherhood_illustration.svg";
import ProfileInfoHand from "./icons/profile_info_hand.svg";
import UserDrawn from "./icons/user_hand_drawn.svg";
import World from "./icons/world_illustration.svg";

//TEMPORARY
import CreateRefugee from './components/tempCreateRefugee';
import CreateVolunteer from './components/tempCreateVolunteer';
import CreateService from './components/Pages/ServiceForm';
import CreateTask from './components/Pages/TaskForm';

class App extends Component{
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showRefugeeBoard: false,
      showVolunteerBoard: false,
      showAdminBoard: false,
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
 
    if (user) {
      this.setState({
        currentUser: user
      });
      if (user.roles == "ROLE_ADMIN") {
      this.setState({
        showAdminBoard: true,
      })
      }
      if(user.roles == "ROLE_VOLUNTEER"){
        this.setState({
          showVolunteerBoard: true
        });
      }
      if(user.roles == "ROLE_REFUGEE"){
        this.setState({
          showRefugeeBoard: true
        });
      }
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showRefugeeBoard: false,
      showVolunteerBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render(){

    const { currentUser, showAdminBoard,showRefugeeBoard,showVolunteerBoard } = this.state;

    return (
      <div>
        <Router>

          <nav className="navbar navbar-expand navbar-light bg-light">
            <Link to={"/home"} className="navbar-brand">
              <img src={Logo} alt="Helping Hand" style={{width: "100px"}} />
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {showVolunteerBoard && (
                <li className="nav-item">
                  <Link to={"/volunteer"} className="nav-link">
                    Volunteer Board
                  </Link>
                </li>
              )}
              
              {showRefugeeBoard && (
                <li className="nav-item">
                  <Link to={"/refugee"} className="nav-link">
                    Refugee Board
                  </Link>
                </li>
              )}
              {console.log('showAdminBoard',showAdminBoard)}
              {console.log('showRefugeeBoard',showRefugeeBoard)}
              {console.log('showVolunteerBoard',showVolunteerBoard)}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">

              {showAdminBoard && (
              <li className="nav-item">
              <Link to={"/account/register/admin"} className="nav-link">
                Register Admin
              </Link>
              </li>
              )}
            

                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Profile
                  </Link>
                </li>
  
                <li className="nav-item">
                  <a href="/home" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/account/register/refugee"} className="nav-link">
                    Sign Up Refugee
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/account/register/volunteer"} className="nav-link">
                    Sign Up Volunteer
                  </Link>
                </li>
              </div>
            )}
          </nav>

          <div>   
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={SLogin} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/user" component={BoardUser} />
              <Route exact path="/admin" component={BoardAdmin} />
              <Route exact path="/refugee" component={BoardRefugee} />
              <Route exact path="/volunteer" component={BoardVolunteer} />
              <Route exact path="/account/register/refugee" component={CreateRefugee} />
              <Route exact path="/account/register/volunteer" component={CreateVolunteer} />
              <Route exact path="/create-task" component={TaskForm} />
              {
              //above are /api/test
              }
              <Route exact path="/task/create" component={CreateTask} />
              <Route exact path="/service/create" component={CreateService} />
              <Route  component={error} />                          
              <Route/>  
            </Switch>
          </div>                
        </Router>
      </div>    
    );
  }
}

export default App;
