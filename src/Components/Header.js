import React, { Component } from 'react';

class Header extends Component {

    constructor( props ) {
        super( props );
        this.state = {

        };
    }

    render() {
        return (
            <div id = "highlight" className = "header" >
                <div className = "" >
                    <div className = "" > Score: { this.props.score } </div>
                </div>
            </div>
        );
    }

}

export default Header;
