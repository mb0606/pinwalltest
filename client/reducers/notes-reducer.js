import { NOTES, CURRENT_NOTE, UPDATE_NOTE, NOTE_CAT } from '../actions/types'

const INITIAL_STATE = { all: [], note:null, categories:[], noteCat:[]};


export default function ( state = INITIAL_STATE, action) {
  switch(action.type) {
    case NOTES:
    console.log("line 9 ", action.payload)
      return {...state, all: action.payload.data }
    case CURRENT_NOTE:
      console.log("line 12 ", action.payload)
      return {...state, note: action.payload}

    case NOTE_CAT:
      console.log("line 18", action.payload)
      return {...state, noteCats: action.payload}
    default:
    return state;
  }

}
// create an action for get categories for form
// add a reducer for CREATE FORM
// send it back on state categories array
