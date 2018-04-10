import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Row, Input, Button } from 'react-materialize';

export default class CreateUser extends React.Component {
    constructor(props){
        super(props)
        this.state={
            emailError: '',
            passwordError: ''
        }
        this.submitForm = this.submitForm.bind(this)
    }
    submitForm(event){
        let error = {},
            formData = {}
        event.preventDefault()
        if(!this.state.password){
            error.passwordError = 'Required'
        }
        if(!this.state.email){
            error.emailError = 'Required'
        }
        this.setState(error)
        if(this.state.password && this.state.email){
            formData = {
                email: this.state.email,
                password: this.state.password,
                telephone_number: this.state.telephone_number,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
            }
            debugger
            this.props.createAPI(formData)
        }
    }
    render(){
        const { emailError, passwordError } = this.state
        return(<form onSubmit={this.submitForm}>
            <Row>
                <Input name='email' type="email" label="* Email" s={12} error={emailError} onChange={(event)=>{
                    emailError != '' && this.setState({emailError: false})
                    this.setState({email: event.target.value})
                }}/>
                <Input name="password" type="password" label="* password" s={12} error={passwordError} onChange={(event)=>{
                    passwordError != '' && this.setState({passwordError: false})
                    this.setState({password: event.target.value})
                }}/>
                <Input name='telephone_number' type="tel" label="Tel No." s={12} onChange={(event)=>{
                    this.setState({telephone_number: event.target.value})
                }}/>
                <Input name='first_name' s={6} label="First Name" onChange={(event)=>{
                    this.setState({first_name: event.target.value})
                }}/>
                <Input name='last_name' s={6} label="Last Name" onChange={(event)=>{
                    this.setState({last_name: event.target.value})
                }}/>
                <Button type={'submit'}>Submit</Button>
            </Row>
        </form>)
    }
}