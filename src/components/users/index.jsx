import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GetUserInfo from './getUserInfo';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';

export default class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    loginAPI(){
        axios({
            method: 'get',
            url: 'http://neat-mvp-api.herokuapp.com/v1/users'
        }).then((response)=>{
            this.setState({users: response.data.data})
        })
    }

    componentDidMount(){
        this.loginAPI()
    }

    render(){
        const { users } = this.state
        return (
            <div>
                <h1>Users</h1>
                <Row>
                    <Col s={12}>
                        {users && <Collapsible accordion>
                            {Object.values(this.state.users).map((item, id)=>{
                                let name = item.first_name || item.last_name ? `${item.first_name ? item.first_name : ''} ${item.last_name ? item.last_name : '' }` : 'No Name'
                                return (<CollapsibleItem
                                    header={`User ${id}: ${name}`}
                                >
                                    <GetUserInfo 
                                            userId={item.id}
                                            key={item.id}
                                        />
                                </CollapsibleItem>)
                            })}
                        </Collapsible>}
                    </Col>
                </Row>
            </div>
        )
    }
}