import React, { Component } from 'react';

export default class UserBtn extends Component {
    select() {
        let data = 'User Requested Action';
        alert(data)
    }
    btn() {
        return (
            <button className="nav-user-btn" onClick={() => {
                this.select();
            }}>Sign Out</button> 
        )
    }
    render() {
        return this.btn()
    }
}