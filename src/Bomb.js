// your Bomb code here!
import React, { Component } from 'react'; 

export default class Bomb extends Component {
    
    constructor() {
        super()
        this.state = {
            secondsLeft: `${this.props.initialCount}`
        }
    }
    
    // initialCount = () => {
    //     if (this.state.secondsLeft === 0) {
    //         <h3>Boom!</h3>
    //     } else {
    //         <h3>{this.props.initialCount} seconds left before I go boom!</h3>
    //     }
    // }

    render() {
        console.log(this.props.initialCount)
        return(
            <div>

            </div>
        )
    }
}