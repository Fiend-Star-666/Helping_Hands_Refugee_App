import React from "react";
import AccountService from "../services/AccountService";
import { Form, Row, Col, Button } from "react-bootstrap";
import '../css/form.css'
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

        <div className="card" style={{ height: "45rem", width: "45rem", margin: "auto", marginTop: "2rem",marginBottom: '2rem' }} >
        <div className="container" style={{ width: "35rem", margin: "auto", marginTop: "2rem" }}>
            <h1 className="signup-h mt-3">Create A Volunteer Account</h1>
            <Form id="refugee-form" onSubmit={this.saveRefugee}>
                <Form.Label className="ref-form-label">Name</Form.Label>
                <Form.Control name="name" value={this.state.name} onChange={this.changeHandler}/>
                <Form.Label className="ref-form-label">Email</Form.Label>
                <Form.Control name="emailId" value={this.state.emailId} onChange={this.changeHandler}/>
                <Form.Label className="ref-form-label">Password</Form.Label>
                <Form.Control type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
                <Form.Label className="ref-form-label">Phone Number</Form.Label>
                <Form.Control name="phoneNumber" value={this.state.phoneNumber} onChange={this.changeHandler}/>

                <Row>
                    <Form.Group as={Col}>
                        <Form.Label className="ref-form-label">City</Form.Label>
                        

        <Form.Control name="city" value={this.state.city} onChange={this.changeHandler}/>                </Form.Group>


            <Form.Group as={Col}>
                <Form.Label className="ref-form-label">State</Form.Label>
                <Form.Control name="state" value={this.state.state} onChange={this.changeHandler}/>
            </Form.Group>
        </Row>

        <Row>
            <Form.Group as={Col}>
                <Form.Label className="ref-form-label">Zip Code</Form.Label>
                <Form.Control name="zipCode" value={this.state.zipCode} onChange={this.changeHandler}/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label className="ref-form-label">Country</Form.Label>
                <Form.Control name="country" value={this.state.country} onChange={this.changeHandler} />
            </Form.Group>
        </Row>

        <button type="submit" className="button mt-3 mb-2">Submit</button>
    </Form>
</div>
</div>
        );
    }
}
export default TempCreateVolunteer;
