import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import NotesForm from './common/NotesForm';

import { loadNote, editNote, deleteNote } from '../../actions/index';

const propTypes = {
	note: PropTypes.object.isRequired,
	loadNote: PropTypes.func.isRequired,
	editNote: PropTypes.func.isRequired,
	deleteNote: PropTypes.func.isRequired
}

class NoteInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
		}

		this.buttonDeleteClick = this.buttonDeleteClick.bind(this);
		this.buttonEditClick = this.buttonEditClick.bind(this);
		this.handleNotesForm = this.handleNotesForm.bind(this);
	}

	componentWillMount() {
		this.props.loadNote(this.props.params.id);
	}

	buttonDeleteClick() {
		this.props.deleteNote(this.props.params.id);
	}

	buttonEditClick() {
		this.setState({isEditing: !this.state.isEditing});
	}

	handleNotesForm(title, description) {
		this.props.editNote(this.props.params.id, title, description);
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
					<Link onClick={this.buttonDeleteClick} to={'/'} className="btn btn-danger">Delete</Link>
				</div>
				{this.state.isEditing ?
					<NotesForm handleForm={this.handleNotesForm} title={title} description={description}/>
					: null
				}
			</div>
		)
	}
}

NoteInfo.propTypes = propTypes;

function mapStateToProps(state) {
	const { note } = state;
	return {
		note,
	}
} 

export default connect(mapStateToProps, { loadNote, editNote, deleteNote })(NoteInfo);