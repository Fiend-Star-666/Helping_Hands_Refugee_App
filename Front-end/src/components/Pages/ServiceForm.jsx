import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import AuthService from "../../services/auth.service";
import VolunteerServices from "../../services/Volunteer.service";

export default function ServiceForm() {
    const history = useHistory();

    const currentUser = AuthService.getCurrentUser();

    const [serviceType, setServiceType] = useState('');

    const [serviceSubject, setServiceSubject] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [serviceOther, setServiceOther] = useState('');

    const handleServiceTypeChange = (e) => {
        setServiceType(e.target.value);
    }

    const handleServiceSubjectChange = (e) => {
        setServiceSubject(e.target.value);
    }

    const handleServiceDescriptionChange = (e) => {
        setServiceDescription(e.target.value);
    }

    const handleServiceOtherChange = (e) => {
        setServiceOther(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const service = {
            volunteerid: currentUser.accid,
            serviceType: serviceType,
            serviceSubject: serviceSubject,
            serviceDescription: serviceDescription,
            serviceOther: serviceOther
        }
        console.log(service);
        VolunteerServices.createService(service).then(response => {
                history.push('/volunteer');
            }
        ).catch(function (error) {
                alert('Please Wait an error has Occured');
            }
        );
    }

    let otherType;

    if (serviceType == 'Other') {
        otherType = (
            <div>
                <div className='form-group'>
                    <label>Other Type</label>
                    <input type='text' placeholder="Other Type" className='form-control' name='otherType'
                           value={serviceOther} onChange={handleServiceOtherChange}/>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Create a New Service</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>
                                Service Type:

                                <select value={serviceType} onChange={handleServiceTypeChange} className='mx-3'>
                                    <option value={null}> {"Choose the option"} </option>
                                    <option value={"Food"}> {"Food"} </option>
                                    <option value={"Cloth"}> {"Cloth"} </option>
                                    <option value={"Medicine"}> {"Medicine"} </option>
                                    <option value={"Shelter"}> {"Shelter"} </option>
                                    <option value={"Transport"}> {"Transport"} </option>
                                    <option value={"Repair"}> {"Repair"} </option>
                                    <option value={"Job"}> {"Job"} </option>
                                    <option value={"Other"}> {"Other"} </option>
                                </select>

                            </label>
                        </div>

                        {otherType}

                        <div className="form-group">
                            <label>Service Subject</label>
                            <input type='text' placeholder="Service Subject" value={serviceSubject}
                                   onChange={handleServiceSubjectChange} className='form-control'
                                   name='serviceSubject'/>
                        </div>

                        <div className="form-group">
                            <label>Service Description</label>
                            <textarea className="form-control" placeholder='Add Description here'
                                      value={serviceDescription} onChange={handleServiceDescriptionChange} rows="5"
                                      name='description'></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        </div>

    )
}
