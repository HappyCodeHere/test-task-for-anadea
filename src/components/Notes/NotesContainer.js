import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotesList from './NotesList';
import NotesForm from './NotesForm';

import { fetchNotes, sendNote } from '../../actions/index';


class NotesContainer extends Component {
	constructor() {
		super();

		this.state = {
			isFormActive: false
		}

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	componentWillMount() {
		this.props.fetchNotes();
	}

	handleButtonClick() {
		this.setState({isFormActive: !this.state.isFormActive});
	}

	render() {
		const {...rest} = this.props;
		return (
			<div>
				<NotesList {...rest}/>
				<button onClick={this.handleButtonClick}>Add new note</button>
				{this.state.isFormActive ? <NotesForm {...rest}/> : null}
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { notes } = state;
	return {
		notes
	}
}

export default connect(mapStateToProps, { fetchNotes, sendNote })(NotesContainer);