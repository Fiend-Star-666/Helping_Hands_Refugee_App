import React from "react";
import AccountService from "../services/AccountService";

class TempCreateVolunteer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            password: '',
            name: '',
            phoneNumber: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',

        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    saveVolunteer = (e) => {
        e.preventDefault();

        let Volunteer= { emailId: this.state.emailId, password: this.state.password, name: this.state.name, phoneNumber: this.state.phoneNumber,
                         streetAddress: this.state.streetAddress, city: this.state.city, state: this.state.state, zipCode: this.state.zipCode,
                         country: this.state.country};

        console.log("Volunteer" + JSON.stringify(Volunteer));

        AccountService.createVolunteer(Volunteer).then(response => {
            this.props.history.push('/login');
        }).catch(function (error) {
            alert('Please Check your Details or An account with Same details already exists');
        });
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Create a New Volunteer</h2>
                        <form onSubmit={this.saveVolunteer}>
                            <div className="form-group">
                                <label>Email Id</label>
                                <input type="text" className="form-control" name="emailId" value={this.state.emailId} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" className="form-control" name="phoneNumber" value={this.state.phoneNumber} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Street Address</label>
                                <input type="text" className="form-control" name="streetAddress" value={this.state.streetAddress} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <input type="text" className="form-control" name="state" value={this.state.state} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Zip Code</label>
                                <input type="text" className="form-control" name="zipCode" value={this.state.zipCode} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <input type="text" className="form-control" name="country" value={this.state.country} onChange={this.changeHandler} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default TempCreateVolunteer;
