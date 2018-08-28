import React, { Component } from 'react';

export default class Sidenav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSidenav: false
        }
    }

    showSidenav() {
        this.setState({
            isSidenav: !this.state.isSidenav
        })
    }

    isSidenav() {
        if (this.state.isSidenav) {
            return (
                <div id="list-example" className="list-group" style={{ height: '100%', width: '200px', position: 'fixed', zIndex: '1', top: '0px', left: '0', overflowX: 'hidden', padding: '20px 20px', background: '#1d2b34' }}>
                    <a className="list-group-item list-group-item-action" href="#carouselExampleControls">Top</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                    <a className="list-group-item list-group-item-action" href="#list-item-5">Contact</a>
                    <br />
                    <a className="list-group-item list-group-item-action" onClick={() => {
                        this.showSidenav();
                    }}>HIDE</a>
                </div>
            )
        } else {
            return (
                <button
                    className="btn-show-sidenav d-flex m-3"
                    style={{ position: 'fixed', zIndex: '1', top: '56px', left: '0', overflowX: 'hidden', padding: '10px' }}
                    onClick={() => {
                        this.showSidenav();
                    }}
                >Expand
                </button>
            )
        }
    }
    render() {
        return (
            this.isSidenav()
        )
    }
};

// <a className="scrolldown js-scroll-to" href="#list-item-2">O</a>