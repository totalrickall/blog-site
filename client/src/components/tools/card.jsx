import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{this.props.title}</h3>
                    <h6 className="card-email">{this.props.email}: {this.props.userid}</h6>
                    <p className="card-text">{this.props.content}</p>
                    <a href="" className="btn btn-primary">Click</a>
                </div>
            </div>
        )
    }
}