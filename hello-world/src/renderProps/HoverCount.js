import React, { Component } from 'react'

class HoverCount extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // handler=()=>{
    //     this.setState((prevState)=>{
    //         return({count:prevState.count+1})
    //     })
    // }
    
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.handler}>Hovered {this.props.count} times</h1>
            </div>
        )
    }
}

export default HoverCount
