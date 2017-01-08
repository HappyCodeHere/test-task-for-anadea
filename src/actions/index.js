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


export function fetchNotes() {
    return dispatch => {
        dispatch({ type: types.FETCH_NOTES_START});
        return firebase.database().ref('notes/').on('value', snapshot => {
            dispatch ({ type: types.FETCH_NOTES_SUCCESS, payload: snapshot.val() });
            /*console.log(snapshot.val());
            snapshot.then(data => {
                    console.log('promise', data);
                }).catch(error => {
                  */  
                  // console.log(error);
            // });
        })
    }
}

export function loadNote(id) {
    return dispatch => {
        dispatch({ type: types.LOAD_NOTE_START});
        return firebase.database().ref(`notes/${id}`).on('value', data => {
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
    return dispatch => {
        firebase.database().ref(`notes/${id}`).remove().then(data =>{
            console.log('delete', data);
        });
        return {
            type: types.DELETE_NOTE,
            payload: id
        }
    }
}