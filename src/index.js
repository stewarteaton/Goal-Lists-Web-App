import React from 'react';
import ReactDOM from 'react-dom';
//make multipage
//import { Router, Route, Link} from "react-router-dom";
import { Router, Route} from "react-router-dom";
import {createBrowserHistory} from 'history';
//firebase authentication
import { firebaseApp } from './firebase';
//Import redux logic
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { logUser } from './actions';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const browserHistory = createBrowserHistory();

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        //console.log('user has signed in or signed up',user);
        const { email } = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    }else{
       // console.log('user has signed out or still needs to sign in',user);
        browserHistory.replace('/signin'); 
    }
})
ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
        <div>
            <Route path="/signin" component={SignIn} />
            <Route path="/app" component={App} />
            <Route path="/signup" component={SignUp} />
        </div>
        </Router>
    </Provider>
    , document.getElementById('root')
)