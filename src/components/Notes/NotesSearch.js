import React, { Component } from 'react';


class NotesSearch extends Component {
	constructor() {
		super();

		this.state = {
			search: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({search: event.target.value}, () => {
			this.props.search(this.state.search);
		});
	}

	render() {
		return (
			<div className="notes-search form-group">
				<span className="glyphicon glyphicon-search"></span>
				<input type="text" value={this.state.search} onChange={this.handleInputChange} className="form-control" placeholder="Search..."/>
			</div>
		)
	}
}

export default NotesSearch;