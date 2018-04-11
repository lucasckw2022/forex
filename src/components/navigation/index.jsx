import React from 'react';
import { Navbar, NavItem, Icon, Dropdown, Button } from 'react-materialize';
import { Link } from "react-router-dom";

export default class Navigation extends React.Component{
    render(){
        return(<Navbar brand='Forex' right>
            <Dropdown trigger={
                <a><Icon>more_vert</Icon></a>
            }>
                <Link to="/users">Users</Link>
                <Link to="/forex">Forex</Link>
            </Dropdown>
          </Navbar>
        )
    }
}