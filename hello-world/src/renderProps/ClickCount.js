import React, { Component } from 'react'

class ClickCount extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }
    // handler = () => {
    //     this.setState((prevState)=>{
    //         return({count:prevState.count+1})
    //     })
    // }

    render() {
        return (
            <div>
                <button onClick={this.props.handler}>Clicked {this.props.count} times</button>
            </div>
        )
    }
}

export default ClickCount
