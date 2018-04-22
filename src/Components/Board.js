import React, { Component } from 'react';

import Cards, { Card } from 'react-swipe-card';

import BoardPiece from './BoardPiece';

import shift from './../shift.png';
import shift1 from './../shift1.png';

const data = ['Alexandre', 'Thomas', 'Lucien'];

class Board extends Component {

    constructor( props ) {
        super( props );
        this.state = {

        };
    }

    render() {
        return (
            <div className = "board" >
                <Cards
                    onEnd={ ()=>{ console.log("end") } }
                    className = "master-root"
                >
                    {
                        data.map ( ( item, i ) =>
                            <Card
                                key = { i }
                                className = "card"
                                onSwipeLeft = { ()=>{console.log('left')} }
                                onSwipeRight = { ()=>{console.log('right')} }
                            >
                                <BoardPiece imgRef = { shift } />
                                <BoardPiece imgRef = { shift1 } />
                            </Card>
                        )
                    }
                </Cards>

            </div>
        );
    }
}

export default Board;
