import React from 'react'

const EnhancingComponent =(InputComp)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        handler=()=>{
            this.setState(
                (prevState)=>{
                    return({count:prevState.count+1})
                }
            )
        }
        render(){
            console.log(' HOC function render')
            return<InputComp count={this.state.count} handler={this.handler}/>
        }
    }
    return NewComponent
}

export default EnhancingComponent