import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/users/index'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/login/index'
import Navigation from './components/navigation/index'

export default class App extends React.Component {
    render(){
        return (<Router>
            <div>
                <Navigation />
                <Route exact path="/" component={Login} />
                <Route path="/users" component={Users} />
            </div>
        </Router>)
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);