import React, { Component } from 'react';
import $ from 'jquery';
import Cards, { Card } from 'react-swipe-card';

import shift from './../shift.png';
import shift1 from './../shift1.png';

const answerPoints = 20;

class Board extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            score: 0,
            data: [{answer:true},{answer:false},1,1,1,1,1,1,1,1,1,1,1,1,1]
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
                                <img className = "board-piece" src = { shift } alt = "" />
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
        let element = $('#highlight').addClass( "highlight-"+answer );
        setTimeout( () => {
            element.removeClass( "highlight-"+answer )
        }, 3000 );
    }



}

export default Board;
