import React, { Component } from 'react';
import $ from 'jquery';

const execTime = 300;

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

    tickStart = () => {
        this.timer = setInterval(this.tick, 1000);
    }

    tickStop = () => {
        clearInterval(this.timer);
    }

    tick = () => {
        if( this.state.time > 0 )
            this.setState({ time: this.state.time - 1 });
        else
            this.tickStop();
    }

    render() {
        return (
            <div className = "footer" >
                <div className = "row" >
                    <div className = "col" >
                        Time: { this.formatTime() }
                    </div>
                    <div className = "col" >
                        { this.renderButtons() }
                    </div>
                </div>
            </div>
        );
    }

    formatTime = () => {
        let time = this.state.time;

        if(time < 60){
            return "00:" + this.smallTime( time );
        }
        else if(time < 3600){
            return "" + this.smallTime( Math.floor( time/60 ) ) + ":" + this.smallTime( Math.floor( time%60 ) );
        }
    }

    smallTime = (time) => {
        if( time < 10 ) time = "0" + time;
        return time;
    }

    renderButtons = () => {

        if ( this.state.time === execTime ) {
            return (
                <div >
                    <button className = "btn btn-start" onClick = { this.clickStart } > Start </button>
                </div>
            )
        }
        else {
            return (
                <div className = "row" >
                    <div className = "col" >
                        <button className = "btn btn-reset" onClick = { this.resetTime } > Reset </button>
                    </div>
                    <div className = "col" >
                        {   !this.props.shouldStopTimer ?
                                !this.state.isStoped ?
                                    <button className = "btn btn-stop" onClick = { this.clickTime } > Stop </button>
                                :
                                    <button className = "btn btn-start" onClick = { this.clickTime } > Continue </button>
                            :
                                null
                        }
                    </div>
                </div>
            )
        }
    }

    clickStart = () => {
        $('#boardGame').removeClass("invisible");
        this.clickTime();
    }

    clickTime = () => {
        this.state.isStoped ? this.tickStart() : this.tickStop();
        this.setState({ isStoped: !this.state.isStoped });
    }

    resetTime = () => {
        $('#boardGame').addClass("invisible");
        this.props.updateScore(0);
        this.tickStop();
        this.setState({ isStoped: true, time: execTime});
    }

}

export default Footer;
