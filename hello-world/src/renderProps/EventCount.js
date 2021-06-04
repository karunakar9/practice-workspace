import React, { Component } from 'react'

class EventCount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    handler=()=>{
        this.setState((prevState)=>{
            return({count:prevState.count+1})
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.handler)}
            </div>
        )
    }
}

export default EventCount
