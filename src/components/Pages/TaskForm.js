import { Form, Button } from "react-bootstrap"
import "../../css/form.css"
import React, { Component, useEffect, useState } from 'react';
import { useParams, useHistory, Prompt } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default function TaskForm() {
  
  const currentUser = AuthService.getCurrentUser();

  const [taskNature, setTaskNature] = useState('');
  const [taskSeverity, setTaskSeverity] = useState('');
  const [taskType, setTaskType] = useState('');

  const [taskSubject, setTaskSubject] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const [taskBoolDeadline, setTaskBoolDeadline] = useState(false);

  const [taskDeadline, setTaskDeadline] = useState(new Date());

  const [taskNumberOfPeople, setTaskNumberOfPeople] = useState('');

let deadlineBool;

if(taskBoolDeadline){
  deadlineBool = (
    <div>
    <Form.Label>Deadline </Form.Label>
    <Form.Control type="date" name="taskDeadline" value={taskDeadline} 
      onChange={e => setTaskDeadline(e.target.value)} />
    <br></br>
    </div>
  );
}


  return (
    <div className="postform-cont">
      <Form>
      <Form.Label>Nature</Form.Label>
        <Form.Select name="taskNature" value={taskNature} onChange={e => setTaskNature(e.target.value)}>
          <option value="null">Choose Nature</option>
          <option value="virtual">Virtual</option>
          <option value="in-person">In-Person</option>
        </Form.Select>
  
        <Form.Label>Severity</Form.Label>
        <Form.Select name="taskSeverity" value={taskSeverity} onChange={e => setTaskSeverity(e.target.value)}>
          <option value="null">Choose Severity</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
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
          onChange={e => setTaskSubject(e.target.value)} />
  
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={4} name="description" value={taskDescription} 
          onChange={e => setTaskDescription(e.target.value)} />
        <br></br>
        <Form.Check type="checkbox" label="Deadline Exists?" name="deadline" checked={taskBoolDeadline}
          onChange={e => setTaskBoolDeadline(e.target.checked)}/>
        
        <Form.Label>Number of People</Form.Label>
        <Form.Control name="numberOfPeople" value={taskNumberOfPeople}
          onChange={e => setTaskNumberOfPeople(e.target.value)} />

        <br></br>
        {deadlineBool}

        <Button variant="secondary" type="submit">Create Task</Button>
      </Form>
    </div>
  )
}

