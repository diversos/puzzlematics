import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Board from './Board';

class BoardMain extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            shouldStopTimer: false,
            score: 0
        };
    }

    render() {
        return (
            <div className = '' >
                <Header score = { this.state.score } />
                <Board stopTimer = { this.stopTimer } updateScore = { this.updateScore } />
                <Footer shouldStopTimer = { this.state.shouldStopTimer } />
            </div>
        );
    }

    stopTimer = () => {
        if ( !this.state.shouldStopTimer )
            this.setState( { shouldStopTimer: true } );
    }

    updateScore = ( score ) => {
        this.setState( { score: score } );
    }
}

export default BoardMain;
