import './App.css';
import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import CreateVehicleComponent from './components/CreateVehicleComponent';
import ListVehicleComponents from './components/ListVehicleComponents';
import ViewVehicleComponent from './components/ViewVehicleComponent';
import ViewVehicleLogComponent from './components/ViewVehicleLogComponent';
import ViewParkingStallComponent from './components/ViewParkingStallComponent';
import ViewCRLocationForComponent from './components/ViewCRLocationForVehicleComponent';
import ListVehicleOfCRLocationComponents from './components/ListVehicleOfCRlLocationComponents';
import ListCRLocationComponents from './components/ListCRLocationComponents';
import ViewCRSystemComponent from './components/ViewCRSystemComponent';
import ViewAllAccountsViaAdmin from './components/ViewAllAccountsViaAdmin';
import ViewPersonalInfoAccount from './components/ViewPersonalInfoAccount';
import ViewReservationAccount from './components/ViewReservationAccount';
import ListVehicleReservationsAll from './components/ListVehicleReservationsAll';
import ListVehicleReservationPerCRLocation from './components/ListVehicleReservationPerCRLocation';
import CreateAccountMember from './components/CreateAccountMember';
import CreateCRLocation from './components/CreateCRLocation';
import CreateVehicleReservation from './components/CreateVehicleReservation';
import ViewBillComponentVRID from './components/ViewBillComponentsVRID';
import ViewBillItem from './components/ViewBillItem';
import CreateAccountReceptionist from './components/CreateAccountReceptionist';
import Home from './components/Home';
import CreateVehicleLogComponent from './components/CreateVehicleLog';
import AuthService from './services/auth.service';
import SLogin from './components/securityComponents/login.component';
import SHome from './components/securityComponents/home.component';
import Profile from './components/securityComponents/profile.component';
import BoardAdmin from './components/securityComponents/board-admin.component';
import BoardUser from './components/securityComponents/board-user.component';
import Register from './components/securityComponents/register.component';
import EventBus from './common/EventBus';
import UpdateVehicleLog from './components/UpdateVehicleLog';
import ProductTile from './components/ProductTile';
import ProductCatlog from './components/ProductCatlog';
import {products} from './components/products';
import error from './components/error';
import ForgotPassword from './components/ForgotPassword'
import ViewPricing from './components/ViewPricing';
import AboutUs from './components/AboutUs';

class App extends Component{
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
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
      showAdminBoard: false,
      currentUser: undefined,
    });
  }




  render(){

    const { currentUser, showAdminBoard } = this.state;

    return (
      <div>
        <Router>
            {/*<HeaderComponents />*/}
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            BoomCar
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

            {showAdminBoard && (
            <li className="nav-item">
            <Link to={"/account/register/admin"} className="nav-link">
              Register Admin
            </Link>
            </li>
            )}


            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}


            <li className="nav-item">
              <Link to={"/ViewPricing"} className="nav-link">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/viewCar"} className="nav-link">
                View Catalog
              </Link>
            </li>
        
            <li className="nav-item">
              <Link to={"/aboutUs"} className="nav-link">
                About
              </Link>
            </li>
        

          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
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
                <Link to={"/account/register/member"} className="nav-link">
                  Sign Up Member
                </Link>
              </li>
            </div>
          )}

          
        </nav>

                  <div className="container">   
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={SLogin} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/user" component={BoardUser} />
                        <Route exact path="/admin" component={BoardAdmin} />
                        {
                        //above are /api/test
                        }
                          <Route path="/vehicle/add" component={CreateVehicleComponent}/>
                          <Route path="/vehicle/view" exact component={ListVehicleComponents}/> 
                          <Route path="/vehicle/view/:id" component={ViewVehicleComponent}/>
                          <Route path="/logs/vehicle/view/:id" component={ViewVehicleLogComponent}/>
                          <Route path="/parkingstall/vehicle/view/:id" component={ViewParkingStallComponent}/>
                          <Route path="/carrentallocation/vehicle/view/:id" component={ViewCRLocationForComponent}/>
                          <Route path="/carrentallocation/:id/vehicles" component={ListVehicleOfCRLocationComponents}/>
                          <Route path="/carrentallocations/view" component={ListCRLocationComponents}/>
                          <Route path="/home/system" component={ViewCRSystemComponent}/>
                          <Route path="/admin/account/view/all" component={ViewAllAccountsViaAdmin}/>
                          <Route path="/account/view/pinfo/:id" component={ViewPersonalInfoAccount}/>
                          <Route path="/vehiclereservation/account/view/:id" component={ViewReservationAccount}/>
                          <Route path="/admin/vehiclereservations/view/all" component={ListVehicleReservationsAll}/>
                          <Route path="/admin/vehiclereservation/carrentallocation/view/vehicle/:id" component={ListVehicleReservationPerCRLocation}/>
                          <Route path="/account/register/member" component={CreateAccountMember}/>
                          <Route path="/admin/carrentallocation/add" component={CreateCRLocation}/>
                          <Route path="/createvehiclereservation/" component={CreateVehicleReservation}/>
                          <Route path="/vehiclereservation/viewbill/:id" component={ViewBillComponentVRID}/>
                          <Route path="/vehiclereservation/viewbillItem/:id/detailedview/" component={ViewBillItem}/>
                          <Route path="/account/register/admin" component={CreateAccountReceptionist}/>
                          <Route path="/home" component={Home}/>
                          <Route path="/vehicle/:id/createvehiclelog" component={CreateVehicleLogComponent}/>
                          <Route path="/viewCar" component={ProductCatlog}/>
                          <Route path="/forgotPassword" component={ForgotPassword} />
                          <Route path="/updateVehicleLog/:id" component = {UpdateVehicleLog}/>
                          <Route exact path="/ViewPricing" component={ViewPricing} />
                          <Route path="" component={AboutUs}/>
                          <Route  component={error} />                          
                          <Route/>  
                      </Switch>
                  </div>                
                {/*<FooterComponents/>*/}
        </Router>
      </div>    

    );
}
}

export default App;

//<Route path="/update-employee/:id" component={UpdateEmployeeComponent}/>