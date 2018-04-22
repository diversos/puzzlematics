import React, { Component } from 'react';
import $ from 'jquery';
import Cards, { Card } from 'react-swipe-card';

const answerPoints = 20;

class Board extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            score: 0,
            data: [
               { answer: true, src: '/images/verde.png' },
               { answer: false, src: '/images/arvore.png' },
               { answer: true, src: '/images/code.png' },
               { answer: false, src: '/images/code2.png' },
               { answer: false, src: '/images/code3.png' },
               { answer: true, src: '/images/code4.png' }
            ]
        };
    }

    componentWillReceiveProps(nextProps){
        if( nextProps.score !== this.state.score )
            this.setState({ data: this.state.data });
    }

    render() {
        return (
            <div id = "boardGame" className = "board invisible" >
                <Cards
                    onEnd={ () => { this.props.stopTimer() } }
                    className = "master-root"
                >
                    {
                        this.state.data.map( ( round, i ) =>
                            <Card
                                key = { i }
                                className = "card"
                                onSwipeLeft = { () => { this.isCorrect( !round.answer ) } }
                                onSwipeRight = { () => { this.isCorrect( round.answer ) } }
                            >
                                <img className = "board-piece" src = { round.src } alt = "" />
                            </Card>
                        )
                    }
                </Cards>

            </div>
        );
    }

    isCorrect = ( answer ) => {
        if ( answer ) {
            const newScore = this.state.score + answerPoints;
            this.setState({ score: newScore });
            this.props.updateScore( newScore );
        }
        let element = $('#highlight').addClass( "highlight-" + answer );
        setTimeout( () => {
            element.removeClass( "highlight-" + answer )
        }, 2000 );
    }



}

export default Board;
