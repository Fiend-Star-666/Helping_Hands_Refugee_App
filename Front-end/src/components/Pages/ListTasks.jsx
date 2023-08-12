import GridTable from '@nadavshaar/react-grid-table';
import React, {Component, useEffect, useState} from 'react';
import RefugeeService from '../../services/RefugeeServices';
import Moment from 'moment';


const EDIT_SVG = (
    <svg
        height="16"
        viewBox="0 0 20 20"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="#fff" stroke="#1856bf" transform="translate(2 2)">
            <path
                d="m8.24920737-.79402796c1.17157287 0 2.12132033.94974747 2.12132033 2.12132034v13.43502882l-2.12132033 3.5355339-2.08147546-3.495689-.03442539-13.47488064c-.00298547-1.16857977.94191541-2.11832105 2.11049518-2.12130651.00180188-.00000461.00360378-.00000691.00540567-.00000691z"
                transform="matrix(.70710678 .70710678 -.70710678 .70710678 8.605553 -3.271644)"
            />
            <path d="m13.5 4.5 1 1"/>
        </g>
    </svg>
);
const CANCEL_SVG = (
    <svg
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" stroke="#dc1e1e" transform="translate(5 5)">
            <path d="m.5 10.5 10-10"/>
            <path d="m10.5 10.5-10-10z"/>
        </g>
    </svg>
);
const SAVE_SVG = (
    <svg
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m.5 5.5 3 3 8.028-8"
            fill="none"
            stroke="#4caf50"
            transform="translate(5 6)"
        />
    </svg>
);

const styles = {
    select: {margin: "0 20px"},
    buttonsCellContainer: {
        padding: "0 20px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    editButton: {
        background: "#f3f3f3",
        outline: "none",
        cursor: "pointer",
        padding: 4,
        display: "inline-flex",
        border: "none",
        borderRadius: "50%",
        boxShadow: "1px 1px 2px 0px rgb(0 0 0 / .3)"
    },
    buttonsCellEditorContainer: {
        height: "100%",
        width: "100%",
        display: "inline-flex",
        padding: "0 20px",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    cancelButton: {
        background: "#f3f3f3",
        outline: "none",
        cursor: "pointer",
        marginRight: 10,
        padding: 2,
        display: "inline-flex",
        border: "none",
        borderRadius: "50%",
        boxShadow: "1px 1px 2px 0px rgb(0 0 0 / .3)"
    },
    saveButton: {
        background: "#f3f3f3",
        outline: "none",
        cursor: "pointer",
        padding: 2,
        display: "inline-flex",
        border: "none",
        borderRadius: "50%",
        boxShadow: "1px 1px 2px 0px rgb(0 0 0 / .3)"
    }
};


export default function ListTasks() {


    const date = ({value}) => {
        return (
            <>{Moment(value).format('DD-MM-yyyy')}</>
        )
    }


    const columns = [
        {
            id: 1,
            field: 'id',
            label: 'ID',

        },
        {
            id: 2,
            field: 'taskNature',
            label: 'Task Nature',

        },
        {
            id: 3,
            field: 'taskSeverity',
            label: 'Task Severity',
        },
        {
            id: 4,
            field: 'taskStatus',
            label: 'Task Status',
        },
        {
            id: 5,
            field: 'taskType',
            label: 'Task Type',
        },
        {
            id: 6,
            field: 'isDeadline',
            label: 'Deadline Exists?',
        },
        {
            id: 7,
            field: 'taskDeadline',
            label: 'Task Deadline',
            cellRenderer: date,

        },
        {
            id: 8,
            field: 'subject',
            label: 'Subject',
        },
        {
            id: 9,
            field: 'description',
            label: 'Task Description',
        },
        {
            id: 10,
            field: 'taskPeopleNumber',
            label: 'Task People Number',
        },
        {
            //id: 11,
            id: "buttons",
            label: 'Actions',
            width: "max-content",
            sortable: false,
            resizable: false,
            cellRenderer: ({}) => (
                <div style={styles.buttonsCellContainer}>
                    <button
                        title="Take the Task"
                        className='btn btn-primary btn-bg'
                        placeholder='Take the Task'
                        onClick={(e) => {

                        }}
                    >
                        Take this task
                    </button>
                </div>
            )
        }
    ];

    const [tasks, getTasks] = useState([]);

    useEffect(() => {
        getAllTasks();
    }, []);

    const getAllTasks = () => {
        RefugeeService.viewAllTasks()
            .then((res) => {
                const task = res.data;
                getTasks(task);
            })
    }
    console.log(tasks);

    return (
        <GridTable
            columns={columns}
            rows={tasks}
        />
    )
}