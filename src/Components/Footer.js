import React, { Component } from 'react';

class Footer extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            time : 0,
            isStoped : true
        };
    }

    componentDidMount() {
        //this.tickStart();
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
        this.setState({ time: this.state.time + 1 });
    }

    render() {
        return (
            <div className = "footer" >
                <div className = "row" >
                    <div className = "col" >
                        Time: { this.formatTime() }
                    </div>
                    <div className = "col buttons" >
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

        if ( !this.state.time ) {
            return (
                <div >
                    <button className = "btn btn-start" onClick = { this.clickTime } > Start </button>
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
                        { !this.state.isStoped ?
                                <button className = "btn btn-stop" onClick = { this.clickTime } > Stop </button>
                            :
                                <button className = "btn btn-start" onClick = { this.clickTime } > Continue </button>
                        }
                    </div>
                </div>
            )
        }
    }

    clickTime = () => {
        this.state.isStoped ? this.tickStart() : this.tickStop();
        this.setState({ isStoped: !this.state.isStoped });
    }

    resetTime = () => {
        this.tickStop();
        this.setState({ isStoped: true, time: 0});
    }

}

export default Footer;
