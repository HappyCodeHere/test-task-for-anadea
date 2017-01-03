import * as types from './types';

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDxo76C4WTWCatEdkDlsQ0a5eav6c2nvsQ",
    authDomain: "notes-3bca1.firebaseapp.com",
    databaseURL: "https://notes-3bca1.firebaseio.com",
    storageBucket: "notes-3bca1.appspot.com",
    messagingSenderId: "79664696998"
  };

  firebase.initializeApp(config);

/*import axios from 'axios';*/

/*export function func() {
  return dispatch => {
  	dispatch({ type: types. });
  	return axios.get().then((data) => {
  		dispatch({ type: types., payload: data });
  	}).catch(error => {
  		dispatch({ type: types., payload: error });
  	});
  };
}*/




export function fetchNotes() {
	console.log('hey');
	return dispatch => {
		dispatch({ type: types.FETCH_NOTES_START});
    	return firebase.database().ref('notes/').on('value', data => {
    		console.log(data.val());
			dispatch ({ type: types.FETCH_NOTES_SUCCESS, payload: data.val() });
 		})
	}
}

/*.catch(error => {
  			dispatch({ type: types.FETCH_NOTES_ERROR, payload: error });
  		});*/