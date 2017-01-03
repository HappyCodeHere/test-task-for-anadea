import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotesList from './NotesList';

import { fetchNotes } from '../../actions/index';


class NotesContainer extends Component {
	constructor() {
		super();
	}

	componentWillMount() {
		this.props.fetchNotes();
	}

	render() {
		const {...rest} = this.props;
		return (
			<div>
				<NotesList {...rest}/>
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

export default connect(mapStateToProps, { fetchNotes })(NotesContainer);