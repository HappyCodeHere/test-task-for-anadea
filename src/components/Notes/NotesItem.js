import React, { PropTypes } from 'react';

const propTypes = {
	title: PropTypes.string.isRequired
}

const NotesItem = (props) => {
	return (
		<div className="notes-item">
			<p>{props.title}</p>
		</div>
	)
}

NotesItem.propTypes = propTypes;

export default NotesItem;