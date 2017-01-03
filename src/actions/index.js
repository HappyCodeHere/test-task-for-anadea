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
    return dispatch => {
        dispatch({ type: types.FETCH_NOTES_START});
        return firebase.database().ref('notes/').on('value', data => {
            console.log('data from actions', data.val());
            dispatch ({ type: types.FETCH_NOTES_SUCCESS, payload: data.val() });
        })
    }
}

export function loadNote(id) {
    console.log(id);
    return dispatch => {
        dispatch({ type: types.LOAD_NOTE_START});
        return firebase.database().ref(`notes/${id}`).on('value', data => {
            console.log('data from load note', data.val());
            dispatch ({ type: types.LOAD_NOTE_SUCCESS, payload: data.val() });
        })
    }
}

export function sendNote(title, description) {
    return dispatch => {
        dispatch({ type: types.SEND_NOTE_START});
        firebase.database().ref('notes/').push({
            title,
            description
        });
        dispatch({ type: types.SEND_NOTE_SUCCESS, payload: {title, description} });
    }
}

export function editNote(id, title, description) {
    return dispatch => {
        dispatch({ type: types.EDIT_NOTE_START});
        firebase.database().ref(`notes/${id}`).set({
            title,
            description
        });
        dispatch({ type: types.EDIT_NOTE_SUCCESS, payload: {id, title, description} });
    }
}

export function deleteNote(id) {
    firebase.database().ref(`notes/${id}`).remove();
    return {
        type: types.DELETE_NOTE,
        payload: id
    }
}