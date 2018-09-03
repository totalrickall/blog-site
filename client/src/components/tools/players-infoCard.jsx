import React, { Component } from 'react';

export default class InfoCard extends Component {
    render() {
        return (
            <div className="info-card-container">
                {this.props.firstName} {this.props.lastName}: {this.props.personId}
            </div>
        )
    }
}