import React, { Component } from 'react';


class NotesForm extends Component {
	constructor() {
		super();

		this.state = {
			title: '',
			description: ''
		}

		this.inputTitleChange = this.inputTitleChange.bind(this);
		this.inputDescriptionChange = this.inputDescriptionChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	inputTitleChange(event) {
		this.setState({title: event.target.value});
	}

	inputDescriptionChange(event) {
		this.setState({description: event.target.value});
	}

	handleButtonClick(event) {
		event.preventDefault();
		this.props.sendNote(this.state.title, this.state.description);
		this.setState({title: '', description: ''});
	}

	render() {
		return (
			<div>
				<form>
					<input type="text" value={this.state.title} onChange={this.inputTitleChange} />
					<input type="text" value={this.state.description} onChange={this.inputDescriptionChange} />
					<button className="" onClick={this.handleButtonClick}>Отправить</button>
				</form>
			</div>
		)
	}
}

export default NotesForm;