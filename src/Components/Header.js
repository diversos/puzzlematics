import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div id = 'highlight' className = 'header' >
                Pontuação: { this.props.score }
            </div>
        );
    }
}

export default Header;
