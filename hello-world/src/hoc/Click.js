import React, { Component } from 'react'
import Enhancing from './withCounter'

class Click extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handler}>Times {this.props.counter} clicked</button>
            </div>
        )
    }
}

export default Enhancing(Click)
