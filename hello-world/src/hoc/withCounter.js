import React from 'react'

const Enhancing = Orginal=>{
    class NewComponet extends React.Component{
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
        
        render(){
            return <Orginal counter={this.state.count} handler={this.handler}/>
        }
    }
    return NewComponet
}

export default  Enhancing