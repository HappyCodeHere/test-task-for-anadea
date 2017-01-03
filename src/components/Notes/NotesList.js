import React, { Component } from 'react';
import { Link } from 'react-router';

import NotesItem from './NotesItem';


class NotesList extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		const { notes } = this.props;
		const list = Object.keys(notes).map((item, i) => {
			if(!notes[item]) {
				return;
			}
			console.log(notes[item]);
			console.log(notes[item].title);
			const { title, description } = notes[item];

			return <Link to={item} key={i}><NotesItem title={title}/></Link>
		})
		return (
			<div>
				<h1>Hey!</h1>
				{list.length > 2 ? list : <h3>Loading...</h3>};
			</div>
		)
	}
}


export default NotesList;