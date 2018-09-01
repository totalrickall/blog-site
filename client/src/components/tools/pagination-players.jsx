import React, { Component } from 'react';

export default class Pagination extends Component {

    listItem(link, description) {
        return (
            <li><a className="pagination-link" href={link} style={{
                margin: '22px'
            }}>{description}</a></li>
        )
    }

    paginationContent() {
        let link1 = `/players`;
        let link2 = `/players`;
        let link3 = `/players`;
        let link4 = `/players`;

        return (
            <div>
                <ul className="pagination" style={{
                    width: '27.5%',
                    textAlign: 'center',
                    position: 'relative',
                    margin: '0 auto'
                }}>
                    {this.listItem(link1, 1)}
                    {this.listItem(link2, 2)}
                    {this.listItem(link3, 3)}
                    {this.listItem(link4, 4)}
                </ul>
            </div>
        )
    };

    render() {
        return this.paginationContent()
    };
};