import { Component } from 'react';
import '../css/employee.css'
import { ToDoList } from './todo';

export class Employee extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id || null,
            name: this.props.data.name || null,
            email: this.props.data.email || null,
            city: this.props.data.address.city || null,
            website: this.props.data.website || null,
            todoList: [],
            errorMessage: ''
        }
        this.getTasks = this.getTasks.bind(this);
        this.setTasks = this.setTasks.bind(this);
    }

    getTasks = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}/todos`)
            .then(response => response.json())
            .then(json => {this.setTasks(json)})
            .catch(err => console.log('Eror' + err));
    };

    setTasks = (taskList) => {
        if(taskList.length === 0)
            this.setState({errorMessage:'Data is currently unavailable!'});
        else
            this.setState({todoList : taskList});
    };

    closeOverlay = () => {
        this.setState({todoList : []});
    };

    render(){
        return(
            <div>
                <div className='employeeInfo'>
                    <div className='employeeDetails'>
                        <div className='name'>Name: {this.state.name || 'Unavailable'}</div>
                        <div className='email'>Email: {this.state.email || 'Unavailable'}</div>
                        <div className='city'>City: {this.state.city || 'Unavailable'}</div>
                        <div className='website'>Website: {this.state.website || 'Unavailable'}</div>
                    </div>
                    <button className='todoSubmit' onClick={this.getTasks}>Task Details</button>
                </div>
                <div className='todooverlay'
                    style={{'display': (this.state.todoList.length) ? 'block' : 'none'}}
                >
                    <div className='closeOverlay' onClick={this.closeOverlay}>x</div>
                    <div className='searchError'
                        style={{'display': (this.state.errorMessage) ? 'block' : 'none'}}
                    >{this.state.errorMessage}</div>
                    <table className='taskContainer'>
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todoList.map(task => {
                                    return <ToDoList key={task.id} data={task}></ToDoList>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
}