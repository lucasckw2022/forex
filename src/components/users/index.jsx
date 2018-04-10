import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GetUserInfo from './getUserInfo';
import CreateUser from './createUser'
import { Row, Col, Collapsible, CollapsibleItem, Modal, Button } from 'react-materialize';

export default class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }
        this.createAPI = this.createAPI.bind(this)
    }
    loginAPI(){
        axios({
            method: 'get',
            url: 'http://neat-mvp-api.herokuapp.com/v1/users'
        }).then((response)=>{
            this.setState({users: response.data.data})
        })
    }
    createAPI(formData){
        axios({
            method: 'post',
            url: 'http://neat-mvp-api.herokuapp.com/v1/users',
            params: formData
        }).then((response)=>{
            this.setState({showModal: false})
        })
    }
    componentDidMount(){
        this.loginAPI()
    }

    render(){
        const { users, showModal } = this.state
        return (
            <div>
                <h1>Users</h1>
                <Modal
                    header='Add New User'
                    trigger={<Button>Add</Button>}
                    id='create-user'
                    open={showModal}
                >
                    <CreateUser createAPI={this.createAPI}/>
                </Modal>
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