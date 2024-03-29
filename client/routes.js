import React          from 'react';
import ReactDOM       from 'react-dom';
import { Provider }   from 'react-redux';
import reduxThunk     from 'redux-thunk';
import { AUTH_USER }  from './actions/types';

import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components and reducers from our app
import App          from './components/app';
import Welcome      from './components/welcome';
import RequireAuth  from './components/auth/require_auth';
import Signin       from './components/auth/signin';
import Signup       from './components/auth/signup';
import Wall         from './components/wall';
import Note         from './components/notes/show-note';
import NoteForm     from './components/notes/note-form';
import NoteFormEdit from './components/notes/note-form-edit';
import reducers     from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token');

if(token) {
  store.dispatch({type: AUTH_USER})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="signin"  component={Signin} />
        <Route path="signup"  component={Signup} />
        <Route path="organizations/:orgId" component={RequireAuth(Wall)} />
        <Route path="organizations/:orgId/notes/:noteId" component={RequireAuth(Note)} />
        <Route path="organizations/:orgId/users/:userId/notes" component={RequireAuth(NoteForm)} />
        <Route path="organizations/:orgId/users/:userId/notes/:noteId" component={RequireAuth(NoteFormEdit)} />
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.app'));
