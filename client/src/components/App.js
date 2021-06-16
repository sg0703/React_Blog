import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import AllPosts from './AllPosts';
import UserPosts from './UserPosts';
import Create from './Create';

import history from '../history';

const App = () => {
    return (
        <div className="ui header">
            <Router history={history}>
                <Header />
                <div>
                    <Route path="/" exact component={ AllPosts } />
                    <Route path="/posts" exact component={ UserPosts } />
                    <Route path="/create" exact component={ Create } />
                </div>
            </Router>
        </div>
    );
}

export default App;

