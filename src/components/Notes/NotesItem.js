import React from 'react';


const NotesItem = (props) => {
	return (
		<div className="notes-item">
			<p>{props.title}</p>
		</div>
	)
}


export default NotesItem;