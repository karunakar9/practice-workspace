import React, { Component } from 'react'

export class Candidate extends Component {
    render() {
        return (
            <div>
                {this.props.render()}
            </div>
        )
    }
}

export default Candidate
