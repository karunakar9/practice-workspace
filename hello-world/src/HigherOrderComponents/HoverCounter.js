import React, { Component } from 'react'
import EnhancingComponent from './withHOC'

export class HoverCounter extends Component {

    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.handler}>Hovered {this.props.count} times</h3>
            </div>
        )
    }
}

export default EnhancingComponent(HoverCounter)
