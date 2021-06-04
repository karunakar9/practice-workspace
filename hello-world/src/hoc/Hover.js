import React, { Component } from 'react'
import Enhancing from './withCounter'

class Hover extends Component {

    render() {
        return (
            <div>
                <p onMouseOver={this.props.handler}> MouseOvered {this.props.counter} times</p>
            </div>
        )
    }
}

export default Enhancing(Hover)
