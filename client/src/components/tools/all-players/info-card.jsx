import React, { Component } from 'react';

//let link = `http://localhost:3000/players-2018/${this.props.link}`;

export default class InfoCard extends Component {
    render() {
        return (
            <div className="info-card-container" style={{
                margin: '10px'
            }}>
                <a href={`http://localhost:3000/players/${this.props.link}`}>{this.props.lastName}, {this.props.firstName}: {this.props.personId}</a>
            </div>
        )
    }
}


// MAKE A TABLE