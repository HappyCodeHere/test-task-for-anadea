import React, { Component } from 'react';
import { Link } from 'react-router';

import NotesItem from './NotesItem';
import NotesSearch from './NotesSearch';


class NotesList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSearch: ''
		}

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(search) {
		this.setState({currentSearch: search});
	}


	render() {
		const { notes } = this.props;
		const list = Object.keys(notes)

		.filter(item => {
			if(!notes[item]) {
				return;
			}
			let item2 = notes[item]['title'].toLowerCase();

			return item2.indexOf(this.state.currentSearch.toLowerCase()) !== -1;
			})


		.map((item, i) => {
			if(!notes[item]) {
				return;
			}

			const { title } = notes[item];

			return <Link to={item} key={i}><NotesItem title={title}/></Link>
		})
		return (
			<div className="notes-list">
				<h2>Your notes:</h2>
				<NotesSearch search={this.handleSearch}/>
				{list.length > 0 ? list : <h3>Loading...</h3>}
			</div>
		)
	}
}


export default NotesList;