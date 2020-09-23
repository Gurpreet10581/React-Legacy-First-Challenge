  
import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import AllTasks from "./AllTasks";

export default class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addedTask: "",
			taskList: []
		};
	}
	addTasks() {
		
		this.state.taskList({ name: this.state.addedTask}); 
    }
    displayResults(){
        console.log(this.state.taskList)
    }
	render() {
		return (
			<div>

				<Button onClick={() => this.addTasks()}>Add Task</Button>
			</div>
		);
	}
}