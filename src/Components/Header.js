import React, { Component } from 'react';

class Header extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            score : 0
        };
    }

    render() {
        return (
            <div className = "header" >
                <div className = "" >
                    <div className = "" > Score: { this.state.score } </div>
                </div>
            </div>
        );
    }

}

export default Header;
