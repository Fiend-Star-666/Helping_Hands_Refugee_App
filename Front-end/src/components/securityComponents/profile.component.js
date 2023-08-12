import React, {Component} from "react";
import AuthService from "../../services/auth.service";
import {Redirect} from 'react-router-dom';

/* an example for css    using custom library styled-components 
const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
*/

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {username: ""}
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})
    }

    render() {


        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        const {currentUser} = this.state;

        return (
            <div className="card-container">
                {(this.state.userReady) ?
                    <div>
                        <header className="jumbotron">
                            <h3 style={{textAlign: 'center'}}>
                                <strong>Profile</strong>
                            </h3>
                        </header>


                        <p>
                            <strong>Email:</strong>{" "}
                            {currentUser.email}
                        </p>

                        <strong>Authorities:</strong>
                        <ul>
                            {currentUser.roles &&
                                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                        </ul>
                        <p>
                            <strong>Account Id:</strong>{" "}
                            {currentUser.accid}
                        </p>
                    </div> : null}

                <br></br>


            </div>
        );
    }
}
