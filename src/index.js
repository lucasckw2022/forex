import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from './components/users/index'
import Login from './components/login/index'
import Navigation from './components/navigation/index'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    loginAPI(formData){
        axios({
            method: 'post',
            url: 'http://neat-mvp-api.herokuapp.com/v1/auth',
            params: formData
        }).then((response)=>{
            sessionStorage.setItem('user', response.data.id)
            window.location.href = "/users"
        })
    }

    render(){
        const { userData } = this.state
        return (<Router>
            <div>
                <Navigation />
                <Route exact path="/" render={()=><Login loginAPI={this.loginAPI}/>} />
                <Route path="/users" render={(props)=><Users userData={userData} {...props} />} />
            </div>
        </Router>)
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);