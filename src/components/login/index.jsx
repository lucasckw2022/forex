import React from 'react';
import axios from 'axios';
import { Row, Input, Button } from 'react-materialize';

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            emailError: '',
            passwordError: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        let error = {},
            formData = {}
        event.preventDefault()
        if(!this.state.password){
            error.passwordError = 'Required'
        }
        if(!this.state.email){
            error.emailError = 'Required'
        }
        formData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginAPI(formData)
    }

    render(){
        const { emailError, passwordError } = this.state
        return (<form onSubmit={this.handleSubmit}>
            <Row>
                <Input name='email' type="email" label="* Email" s={12} error={emailError} onChange={(event)=>{
                    emailError != '' && this.setState({emailError: false})
                    this.setState({email: event.target.value})
                }}/>
                <Input name="password" type="password" label="* password" s={12} error={passwordError} onChange={(event)=>{
                    passwordError != '' && this.setState({passwordError: false})
                    this.setState({password: event.target.value})
                }}/>
                <Button type={'submit'}>Submit</Button>
            </Row>
        </form>)
    }
}