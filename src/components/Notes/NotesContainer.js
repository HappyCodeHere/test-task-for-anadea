import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NotesList from './NotesList';
import NotesForm from './common/NotesForm';

import { fetchNotes, sendNote } from '../../actions/index';

import './notes.scss';

const propTypes = {
	notes: PropTypes.object.isRequired,
	fetchNotes: PropTypes.func.isRequired,
	sendNote: PropTypes.func.isRequired
}

class NotesContainer extends Component {
	constructor() {
		super();

		this.state = {
			isFormActive: false
		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleNotesForm = this.handleNotesForm.bind(this);
	}

	componentWillMount() {
		this.props.fetchNotes();
	}

	handleButtonClick() {
		this.setState({isFormActive: !this.state.isFormActive});
	}

	handleNotesForm(title, description) {
		this.props.sendNote(title, description);
	}

	render() {
		const {...rest} = this.props;
		return (
			<div>
				<NotesList {...rest}/>
				<button className="btn btn-success" onClick={this.handleButtonClick}>Add new note</button>
				{this.state.isFormActive ? <NotesForm handleForm={this.handleNotesForm}/> : null}
			</div>
		)
	}
}

NotesContainer.propTypes = propTypes;

function mapStateToProps(state) {
	const { notes } = state;
	return {
		notes
	}
}

export default connect(mapStateToProps, { fetchNotes, sendNote })(NotesContainer);