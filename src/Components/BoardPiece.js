import React, { Component } from 'react';

class BoardPiece extends Component {

    constructor( props ) {
        super( props );
        this.state = {

        };
    }

    render() {
        return (
            <div className = "col" >
                <img className = "board-piece" src = { this.props.imgRef } alt = "" />
            </div>
        );
    }

}

export default BoardPiece;
