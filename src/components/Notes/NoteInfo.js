import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { loadNote, editNote, deleteNote } from '../../actions/index';

class NoteInfo extends Component {
	constructor() {
		super();

		this.state = {
			isEditing: false,
			newTitle: 'kklkl',
			newDescription: ''
		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.textareaChange = this.textareaChange.bind(this);
		this.buttonSaveClick = this.buttonSaveClick.bind(this);
	}

	componentWillMount() {
		console.log(this.props.params.id);
		this.props.loadNote(this.props.params.id);
	}

	handleButtonClick() {
		this.props.deleteNote(this.props.params.id);
	}

	textareaChange(event) {
		this.setState({newDescription: event.target.value});
	}

	buttonSaveClick() {
		this.props.editNote(this.props.params.id, this.state.newTitle, this.state.newDescription);
	}
 
	render() {
		const { title, description } = this.props.note;
		return (
			<div>
				Info here:
				<h2>{title}</h2>
				<p>{description}</p>
				<Link onClick={this.handleButtonClick} to={'/'} className="btn btn-warning">Delete</Link>
				<Link to={'/'} className="btn btn-danger">Back</Link>
				<button onClick={null} className="btn btn-info">Edit</button>
				<div>
					<textarea defaultValue={description} value={this.state.newDescription} onChange={this.textareaChange}></textarea>
					<button onClick={this.buttonSaveClick}>Save</button>
				</div>
				
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { note } = state;
	return {
		note,
	}
} 

export default connect(mapStateToProps, { loadNote, editNote, deleteNote })(NoteInfo);