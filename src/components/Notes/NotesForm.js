import React, { Component } from 'react';


class NotesForm extends Component {
	consrtuctor() {
		super();

		this.state = {
			title: '',
			description: ''
		}

		this.inputTitleChange = this.inputTitleChange.bind(this);
		this.inputDescriptionChange = this.inputDescriptionChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	render() {
		return (
			<div>
				<form>
					<input type="text" value={this.state.title} onChange={this.inputTitleChange} />
					<input type="text" value={this.state.description} onChange={this.inputDescriptionChange} />
					<button className="" onClick={this.handleButtonClick}>Отправить</button>
				</form>
			</div>
		)
	}
}