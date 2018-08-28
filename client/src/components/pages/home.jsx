import React, { Component } from 'react';
import { render } from 'react-dom';

class Home extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="home-container">
                <h1>Home Page</h1>
                <div className="home-section-1" style={{ border: '1px solid black' }}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis distinctio iusto minima corrupti adipisci cum ipsum eos magnam laboriosam iste, quis delectus eveniet a debitis fugit ipsam deserunt aliquam!</p>
                </div>
                <div className="home-section-2" style={{ border: '1px solid black' }}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis distinctio iusto minima corrupti adipisci cum ipsum eos magnam laboriosam iste, quis delectus eveniet a debitis fugit ipsam deserunt aliquam!</p>
                </div>
                <div className="home-section-3" style={{ border: '1px solid black' }}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis distinctio iusto minima corrupti adipisci cum ipsum eos magnam laboriosam iste, quis delectus eveniet a debitis fugit ipsam deserunt aliquam!</p>
                </div>
                <div className="home-section-4" style={{ border: '1px solid black' }}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis distinctio iusto minima corrupti adipisci cum ipsum eos magnam laboriosam iste, quis delectus eveniet a debitis fugit ipsam deserunt aliquam!</p>
                </div>
                <div className="home-section-5" style={{ border: '1px solid black' }}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis distinctio iusto minima corrupti adipisci cum ipsum eos magnam laboriosam iste, quis delectus eveniet a debitis fugit ipsam deserunt aliquam!</p>
                </div>
                <div className="home-section-6" style={{ border: '1px solid black' }}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis distinctio iusto minima corrupti adipisci cum ipsum eos magnam laboriosam iste, quis delectus eveniet a debitis fugit ipsam deserunt aliquam!</p>
                </div>
            </div>
        )
    }
}

export default Home;