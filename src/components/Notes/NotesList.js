import React, { Component } from 'react';

import NotesItem from './NotesItem';


class NotesList extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		const { notes } = this.props;
		const list = Object.keys(notes).map((item, i) => {
			console.log(notes[item].title);
			// const { title, description } = notes[item];

			// return <NotesItem key={i} title={title} description={description}/>
		})
		return (
			<div>
				{list}
			</div>
		)
	}
}


export default NotesList;