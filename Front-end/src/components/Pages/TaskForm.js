import {Button, Form} from "react-bootstrap"
import "../../css/form.css"
import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import AuthService from "../../services/auth.service";
import RefugeeServices from "../../services/RefugeeServices";

export default function TaskForm() {
    const history = useHistory();
    const currentUser = AuthService.getCurrentUser();

    const [taskNature, setTaskNature] = useState('');
    const [taskSeverity, setTaskSeverity] = useState('');
    const [taskType, setTaskType] = useState('');

    const [taskSubject, setTaskSubject] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const [taskBoolDeadline, setTaskBoolDeadline] = useState(false);

    const [taskDeadline, setTaskDeadline] = useState(new Date());

    const [taskNumberOfPeople, setTaskNumberOfPeople] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            refugeeId: currentUser.accid,
            taskNature: taskNature,
            taskSeverity: taskSeverity,
            taskType: taskType,
            taskSubject: taskSubject,
            taskDescription: taskDescription,
            taskBoolDeadline: taskBoolDeadline,
            taskDeadline: taskDeadline,
            taskNumberOfPeople: taskNumberOfPeople,
        }
        console.log("task: " + JSON.stringify(task));
        RefugeeServices.createTask(task)
            .then(() => {
                console.log("Task created");
                history.push("/refugee");
            })
            .catch(err => {
                console.log(err);
            });
    }


    let deadlineBool;

    if (taskBoolDeadline) {
        deadlineBool = (
            <div>
                <Form.Label>Deadline </Form.Label>
                <Form.Control type="date" name="taskDeadline" value={taskDeadline}
                              onChange={e => setTaskDeadline(e.target.value)}/>
                <br></br>
            </div>
        );
    }


    return (
        <div className="postform-cont">
            <Form className="postform" onSubmit={handleSubmit}>
                <Form.Label>Nature</Form.Label>
                <Form.Select name="taskNature" value={taskNature} onChange={e => setTaskNature(e.target.value)}>
                    <option value="null">Choose Nature</option>
                    <option value="Virtual">Virtual</option>
                    <option value="InPerson">In-Person</option>
                </Form.Select>

                <Form.Label>Severity</Form.Label>
                <Form.Select name="taskSeverity" value={taskSeverity} onChange={e => setTaskSeverity(e.target.value)}>
                    <option value="null">Choose Severity</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </Form.Select>

                <Form.Label>Type</Form.Label>
                <Form.Select name="taskType" value={taskType} onChange={e => setTaskType(e.target.value)}>
                    <option value="null">Choose Type</option>
                    <option value="Skill">Skill</option>
                    <option value="Food">Food</option>
                    <option value="Relocation">Relocation</option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Other">Other</option>
                </Form.Select>

                <Form.Label>Subject</Form.Label>
                <Form.Control name="subject" value={taskSubject}
                              onChange={e => setTaskSubject(e.target.value)}/>

                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} name="description" value={taskDescription}
                              onChange={e => setTaskDescription(e.target.value)}/>
                <br></br>
                <Form.Check type="checkbox" label="Deadline Exists?" name="deadline" checked={taskBoolDeadline}
                            onChange={e => setTaskBoolDeadline(e.target.checked)}/>

                <Form.Label>Number of People</Form.Label>
                <Form.Control name="numberOfPeople" value={taskNumberOfPeople}
                              onChange={e => setTaskNumberOfPeople(e.target.value)}/>

                <br></br>
                {deadlineBool}

                <Button variant="secondary" type="submit" onClick={handleSubmit}> Create Task</Button>
            </Form>
        </div>
    )
}