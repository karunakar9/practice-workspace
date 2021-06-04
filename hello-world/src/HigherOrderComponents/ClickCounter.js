import React, { Component } from 'react'
import EnhancingComponent from './withHOC'

class ClickCounter extends Component {
    
    render() {
        console.log('click render')
        return (
            <div>
                <button onClick={this.props.handler}>Clicked {this.props.count} times</button>
            </div>
        )
    }
}

export default EnhancingComponent(ClickCounter,console.log('Calling HOC function'))
