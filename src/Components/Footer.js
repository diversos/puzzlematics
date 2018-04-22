import React, { Component } from 'react';
import $ from 'jquery';

const execTime = 300;

export const smallTime = (time) => {
    if( time < 10 ) time = '0' + time;

    return '' + time;
}

class Footer extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            time : execTime
        };
    }

    componentWillReceiveProps( nextProps ) {
        if( nextProps.shouldStopTimer ){
            this.tickStop();
        }
    }

    componentWillUnmount(){
        this.tickStop();
    }

    tickStop() {
        clearInterval(this.timer);
    }

    tick = () => {
        const stateTime = this.state.time;

        if( stateTime > 0 )
            this.setState({ time: stateTime - 1 });
        else
            this.tickStop();
    }

    render() {
        return (
            <div className = 'footer' >
                <div className = 'row' >
                    <div className = 'col' >
                        Tempo: { this.formatTime() }
                    </div>
                    <div className = 'col buttons' >
                        {   this.state.time === execTime &&
                        <button
                            className = 'btn btn-start'
                            onClick = { this.clickStart }
                        >
                            Começar
                        </button>
                        }
                    </div>
                </div>
            </div>
        );
    }

    formatTime = () => {
        let time = this.state.time;

        if( time < 60 ) {
            return '00:' + smallTime( time );
        }
        else if( time < 3600 ) {
            return '' + smallTime( Math.floor( time / 60 ) ) + ':' + smallTime( Math.floor( time % 60 ) );
        }
    }

    clickStart = () => {
        $( '#boardGame' ).removeClass( 'invisible' );
        this.timer = setInterval( this.tick, 1000 );
    }
}

export default Footer;