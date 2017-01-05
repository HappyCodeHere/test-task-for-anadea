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
		const { title, description } = this.state;
		if(title.length === 0 || description.length === 0) {
			return;
		}
		this.props.sendNote(title, description);
		this.setState({title: '', description: ''});
	}

	render() {
		return (
			<div className="notes-form form-notes">
				<form>
					<div className="form-group">
						<label htmlFor="form-title">Title</label>
						<input type="text" value={this.state.title} onChange={this.inputTitleChange} className="form-control" id="form-title" placeholder="Your title..."/>
					</div>
					<div className="form-group">
						<label htmlFor="form-description">Description</label>
						<textarea value={this.state.description} onChange={this.inputDescriptionChange} cols="40" rows="8" className="form-control" id="form-description" placeholder="Some info..."></textarea>
					</div>
					<button className="btn btn-warning" onClick={this.handleButtonClick}>Send</button>
				</form>
			</div>
		)
	}
}

export default NotesForm;