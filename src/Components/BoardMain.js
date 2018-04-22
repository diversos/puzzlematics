import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Board from './Board';

class BoardMain extends Component {

    render() {
        return (
            <div className = "" >
                <Header />
                <Board />
                <Footer />
            </div>
        );
    }
}

export default BoardMain;
