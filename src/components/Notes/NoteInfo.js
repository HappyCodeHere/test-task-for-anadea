import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { loadNote, editNote, deleteNote } from '../../actions/index';

class NoteInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
			newTitle: this.props.note.title,
			newDescription: this.props.note.description
		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.textareaChange = this.textareaChange.bind(this);
		this.inputChange = this.inputChange.bind(this);
		this.buttonSaveClick = this.buttonSaveClick.bind(this);
		this.buttonEditClick = this.buttonEditClick.bind(this);
	}

	componentWillMount() {
		this.props.loadNote(this.props.params.id);
	}

	componentWillReceiveProps(nextProps) {
        this.setState({
        	newTitle: nextProps.note.title,
        	newDescription: nextProps.note.description
        });
    }

	inputChange(event) {
		this.setState({newTitle: event.target.value});
	}

	textareaChange(event) {
		this.setState({newDescription: event.target.value});
	}

	handleButtonClick() {
		this.props.deleteNote(this.props.params.id);
	}

	buttonEditClick() {
		this.setState({isEditing: !this.state.isEditing});
	}

	buttonSaveClick() {
		this.props.editNote(this.props.params.id, this.state.newTitle, this.state.newDescription);
		this.setState({isEditing: false});
	}

	render() {
		const { title, description } = this.props.note;
		return (
			<div className="note-info">
				<h2>{title}</h2>
				<p>{description}</p>
				<div className="buttons-group">
					<Link to={'/'} className="btn btn-warning">Back</Link>
					<button onClick={this.buttonEditClick} className="btn btn-info">Edit</button>
					<Link onClick={this.handleButtonClick} to={'/'} className="btn btn-danger">Delete</Link>
				</div>
				{this.state.isEditing ?
					<div className="form-edit form-notes">
						<div className="form-group">
							<label htmlFor="form-new-title">New title</label>
							<input type="text" value={this.state.newTitle} onChange={this.inputChange} className="form-control" id="form-new-title"/>
						</div>
						<div className="form-group">
							<label htmlFor="form-new-description">New description</label>
							<textarea value={this.state.newDescription} onChange={this.textareaChange} cols="40" rows="8" className="form-control" id="form-new-description"></textarea>
						</div>
						<button className="btn btn-success" onClick={this.buttonSaveClick}>Save</button>
					</div>
					: null
				}
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