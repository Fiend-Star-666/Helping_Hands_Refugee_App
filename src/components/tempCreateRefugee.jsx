import React from "react";
import AccountService from "../services/AccountService";
import { Form, Row, Col, Button } from "react-bootstrap";
import '../css/form.css'

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
        //     <div className="card" style={{ width: "30rem", margin: "auto", marginTop: "2rem",marginBottom: '2rem' }}  >
        //     <div className="container" style={{ width: "50rem", margin: "auto", marginTop: "2rem" }}>
        //         <div className="row">
        //             <div className="col-md-6">
        //                 <h2>Refugee Registration:</h2>
        //                 <form onSubmit={this.saveRefugee}>
        //                     <div className="form-group">
        //                         <label>Email Id</label>
        //                         <input type="text" className="form-control" name="emailId" value={this.state.emailId} onChange={this.changeHandler} />
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Password</label>
        //                         <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.changeHandler} />
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Name</label>
        //                         <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.changeHandler} />
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Phone Number</label>
        //                         <input type="text" className="form-control" name="phoneNumber" value={this.state.phoneNumber} onChange={this.changeHandler} />
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Street Address</label>
        //                         <input type="text" className="form-control" name="streetAddress" value={this.state.streetAddress} onChange={this.changeHandler} />
        //                     </div>
        //                     <div className="form-group">
        //                         <label>City</label>
        //                         <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.changeHandler} />
        //                     </div>
        //                     <div className="form-group">
        //                         <label>State</label>
        //                         <input type="text" className="form-control" name="state" value={this.state.state} onChange={this.changeHandler} />
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Zip Code</label>
        //                         <input type="text" className="form-control" name="zipCode" value={this.state.zipCode} onChange={this.changeHandler} />
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Country</label>
        //                         <input type="text" className="form-control" name="country" value={this.state.country} onChange={this.changeHandler} />
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Size of Group</label>
        //                         <input type="text" className="form-control" name="sizeOfGroup" value={this.state.sizeOfGroup} onChange={this.changeHandler} />
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Number of Adults</label>
        //                         <input type="text" className="form-control" name="numberOfAdults" value={this.state.numberOfAdults} onChange={this.changeHandler} />
        //                     </div>
        //                     <div className="form-group">
        //                         <label>Number of Children</label>
        //                         <input type="text" className="form-control" name="numberOfChildren" value={this.state.numberOfChildren} onChange={this.changeHandler} />
        //                     </div>
        //                     <button type="submit" className="button mb-2">Submit</button>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="card" style={{ height: "47rem", width: "45rem", margin: "auto", marginTop: "2rem",marginBottom: '2rem' }} >
            <div className="container" style={{ width: "35rem", margin: "auto", marginTop: "2rem" }}>
                <h1 className="signup-h mt-3">Create A Refugee Account</h1>
                <Form id="refugee-form" onSubmit={this.saveRefugee}>
                    <Form.Label className="ref-form-label">Name</Form.Label>
                    <Form.Control name="name" value={this.state.name} onChange={this.changeHandler}/>
                    <Form.Label className="ref-form-label">Email</Form.Label>
                    <Form.Control name="emailId" value={this.state.emailId} onChange={this.changeHandler}/>
                    <Form.Label className="ref-form-label">Password</Form.Label>
                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
                    <Form.Label className="ref-form-label">Phone Number</Form.Label>
                    <Form.Control name="phoneNumber" value={this.state.phoneNumber} onChange={this.changeHandler}/>
                    <Form.Label className="ref-form-label">Address</Form.Label>
                    <Form.Control name="streetAddress" value={this.state.streetAddress} onChange={this.changeHandler} />

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

                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label className="ref-form-label">Size of Group</Form.Label>
                            <Form.Control name="sizeOfGroup" value={this.state.sizeOfGroup} onChange={this.changeHandler} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className="ref-form-label">Adults</Form.Label>
                            <Form.Control name="numberOfAdults" value={this.state.numberOfAdults} onChange={this.changeHandler} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className="ref-form-label">Children</Form.Label>
                            <Form.Control name="numberOfChildren" value={this.state.numberOfChildren} onChange={this.changeHandler} />
                        </Form.Group>
                    </Row>
                    <button type="submit" className="button mt-3 mb-2">Submit</button>
                </Form>
            </div>
        </div>
        )
    }
}
export default TempCreateRefugee;