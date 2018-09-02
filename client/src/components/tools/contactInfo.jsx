import React, { Component } from 'react';

export default class ContactInfo extends Component {
    contactLink(description, link) {
        return <a href={link} target="_blank" style={{
            margin: '0 15px',
            color: 'white'
        }}>{description}</a>
    };

    contactInfo() {
        let homeLink = '/';
        let twitterLink = 'https://www.twitter.com/';
        let facebookLink = 'https://www.facebook.com/';
        let githubLink = 'https://github.com/totalrickall/';

        return (
            <div className="home-section-4" id="list-item-4" style={{
                height: '150px',
                background: 'black'
            }}>
                <div style={{
                    width: '50%',
                    textAlign: 'center',
                    position: 'relative',
                    margin: '0 auto',
                    top: '2rem'
                }}>
                    {this.contactLink('(205) 555-5555', null)}
                    {this.contactLink('Test@email.com', null)}
                    {this.contactLink('Twitter', twitterLink)}
                    {this.contactLink('Facebook', facebookLink)}
                    {this.contactLink('Github', githubLink)}
                </div>
            </div>
        )
    };

    render() {
        return this.contactInfo()
    };
}