import { combineReducers } from 'redux';
import   NotesReducer      from './notes-reducer.js';
import   CategoriesReducer from './categories-reducer.js';
import { reducer as form } from 'redux-form';


const rootReducer = combineReducers({
  form       : form,
  notes      : NotesReducer,
  categories : CategoriesReducer
});

export default rootReducer;
