import React from "react";
import AccountService from "../services/AccountService";

class TempCreateRefugee extends React.Component {
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

            sizeOfGroup: '',
            numberOfAdults: '',
            numberOfChildren: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    saveRefugee = (e) => {
        e.preventDefault();

        let refugee = {
            emailId: this.state.emailId, password: this.state.password, name: this.state.name, phoneNumber: this.state.phoneNumber,
            streetAddress: this.state.streetAddress, city: this.state.city, state: this.state.state, zipCode: this.state.zipCode, 
            country: this.state.country, sizeOfGroup: this.state.sizeOfGroup, numberOfAdults: this.state.numberOfAdults, numberOfChildren: this.state.numberOfChildren
        };

        console.log("refugee" + JSON.stringify(refugee));

        AccountService.createRefugee(refugee).then(response => {
            this.props.history.push('/login');
        }).catch(function (error) {
            alert('Please Check your Details or An account with Same details already exists');
        });
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <div className="card" style={{ width: "30rem", margin: "auto", marginTop: "2rem",marginBottom: '2rem' }}  >
            <div className="container" style={{ width: "50rem", margin: "auto", marginTop: "2rem" }}>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Refugee Registration:</h2>
                        <form onSubmit={this.saveRefugee}>
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
                            <div className="form-group">
                                <label>Size of Group</label>
                                <input type="text" className="form-control" name="sizeOfGroup" value={this.state.sizeOfGroup} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Number of Adults</label>
                                <input type="text" className="form-control" name="numberOfAdults" value={this.state.numberOfAdults} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Number of Children</label>
                                <input type="text" className="form-control" name="numberOfChildren" value={this.state.numberOfChildren} onChange={this.changeHandler} />
                            </div>
                            <button type="submit" className="button mb-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
</div>
        )
    }
}
export default TempCreateRefugee;