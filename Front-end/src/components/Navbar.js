// import Logo from "../icons/logo.svg";
// import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
// const { currentUser, showAdminBoard,showRefugeeBoard,showVolunteerBoard } = this.state;



// export const NavBar = (props) => {
//   <nav className="navbar navbar-expand navbar-light bg-light">
//     <Link to={"/home"} className="navbar-brand">
//       <img src={Logo} alt="Helping Hand" style={{width: "100px"}} />
//     </Link>
//     <div className="navbar-nav mr-auto">
//       <li className="nav-item">
//         <Link to={"/home"} className="nav-link">
//           Home
//         </Link>
//       </li>

//       {showAdminBoard && (
//         <li className="nav-item">
//           <Link to={"/admin"} className="nav-link">
//             Admin Board
//           </Link>
//         </li>
//       )}

//       {showVolunteerBoard && (
//         <li className="nav-item">
//           <Link to={"/volunteer"} className="nav-link">
//             Volunteer Board
//           </Link>
//         </li>
//       )}
      
//       {showRefugeeBoard && (
//         <li className="nav-item">
//           <Link to={"/refugee"} className="nav-link">
//             Refugee Board
//           </Link>
//         </li>
//       )}
//   {console.log('showAdminBoard',showAdminBoard)}
//   {console.log('showRefugeeBoard',showRefugeeBoard)}
//   {console.log('showVolunteerBoard',showVolunteerBoard)}
//     </div>

//     {currentUser ? (
//       <div className="navbar-nav ml-auto">

//       {showAdminBoard && (
//       <li className="nav-item">
//       <Link to={"/account/register/admin"} className="nav-link">
//         Register Admin
//       </Link>
//       </li>
//       )}
    

//         <li className="nav-item">
//           <Link to={"/profile"} className="nav-link">
//             Profile
//           </Link>
//         </li>

//         <li className="nav-item">
//           <a href="/home" className="nav-link" onClick={this.logOut}>
//             LogOut
//           </a>
//         </li>
//       </div>
//     ) : (
//       <div className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <Link to={"/login"} className="nav-link">
//             Login
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to={"/account/register/refugee"} className="nav-link">
//             Sign Up Refugee
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to={"/account/register/volunteer"} className="nav-link">
//             Sign Up Volunteer
//           </Link>
//         </li>

//       </div>
//     )}

//   </nav>
// };

// export default NavBar;
