import React from 'react';
import { Route, IndexRoute } from 'react-router';



import App from './components/App';
import NotesContainer from './components/Notes/NotesContainer';
import NoteInfo from './components/Notes/NoteInfo';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={NotesContainer}/>
		<Route path="/:id" component={NoteInfo}/>
	</Route>
);