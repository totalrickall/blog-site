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
        let link1 = `/players/page1/0-100`;
        let link2 = `/players/page2/101-201`;
        let link3 = `/players/page3/202-302`;
        let link4 = `/players/page4/303-403`;
        let link5 = `/players/page5/404-504`;
        let link6 = `/players/page6/505-573`;

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
                    {this.listItem(link5, 5)}
                    {this.listItem(link6, 6)}
                </ul>
            </div>
        )
    };

    render() {
        return this.paginationContent()
    };
};