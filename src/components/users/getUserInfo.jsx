import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Collection, CollectionItem, Badge}  from 'react-materialize';

export default class GetUserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state= {}
    }
    getUserAccount(userId){
        axios({
            method: 'get',
            url: `http://neat-mvp-api.herokuapp.com/v1/users/${userId}/accounts`
        }).then((response)=>{
            this.setState({userInfo: response.data.data})
        })
    }
    userAccountInfo(){
        return this.state.userInfo.map((item,id)=>{
            return (<CollectionItem key={`user-account-${id}`}>
                <span>Account: {item.card_number}</span>
                <Badge>Balance: {item.balance}</Badge>
            </CollectionItem>)
        })
    }
    componentDidMount(){
        this.getUserAccount(this.props.userId)
    }
    render(){
        const { content, title, userId } = this.props
        const { userInfo } = this.state
        return(<div>
            {userInfo && <Collection>{this.userAccountInfo()}</Collection>}
        </div>)
    }
}

GetUserInfo.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    userId: PropTypes.string
}