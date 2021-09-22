import { Component } from "react";
import '../css/todo.css'

export class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id || null,
            userId: this.props.data.userId || null,
            title: this.props.data.title || null,
            completed: this.props.data.completed || null
        }
    };

    render(){
        return(
            <tr className='task'>
                <td className='taskName'>{this.state.title}</td>
                <td className='status'>{(this.state.completed)?'Yes':'No'}</td>
            </tr>
        )
    }
}