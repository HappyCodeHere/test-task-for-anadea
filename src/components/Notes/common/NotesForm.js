import React, { Component, PropTypes } from 'react';

const propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
}

class NotesForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.title || '',
			description: this.props.description || '',
			error: ''
		}

		this.inputTitleChange = this.inputTitleChange.bind(this);
		this.inputDescriptionChange = this.inputDescriptionChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	inputTitleChange(event) {
		this.setState({title: event.target.value, error: ''});
	}

	inputDescriptionChange(event) {
		this.setState({description: event.target.value, error: ''});
	}

	handleButtonClick(event) {
		const { title, description } = this.state;
		if(title.length === 0 || description.length === 0) {
			this.setState({error: 'You should type something'})
			return;
		}
		this.props.handleForm(title, description);
		this.setState({title: '', description: ''});
	}

	render() {
		return (
			<div className="notes-form">
				<div className="form-group">
					<label htmlFor="form-title">Title</label>
					<input type="text" value={this.state.title} onChange={this.inputTitleChange} className="form-control" id="form-title" placeholder="Your title..."/>
				</div>
				<div className="form-group">
					<label htmlFor="form-description">Description</label>
					<textarea value={this.state.description} onChange={this.inputDescriptionChange} cols="40" rows="8" className="form-control" id="form-description" placeholder="Some info..."></textarea>
				</div>
				{this.state.error ? 
					<div className="form-error">
						{this.state.error}
					</div> :
					null
				}
				<button className="btn btn-warning" onClick={this.handleButtonClick}>Save</button>
			</div>
		)
	}
}

NotesForm.propTypes = propTypes;

export default NotesForm;