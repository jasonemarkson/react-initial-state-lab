// your Bomb code here!
import React, { Component } from 'react'; 

export default class Bomb extends Component {
    
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    initialCount = () => {
        if (this.state.secondsLeft === 0) {
            return "Boom!"
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    render() {
        // const seconds = this.state.secondsLeft === 0 ? "Boom" : `${this.state.secondsLeft} seconds left before I go boom!`

        return(
            <div>
                <h3>{this.initialCount()}</h3>
                <p>{this.props.type}</p>

            </div>
        )
    }
}