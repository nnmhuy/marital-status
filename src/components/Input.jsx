import React from 'react'

export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }
    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        },
            this.props.handleChange(this.props.variable, event.target.value)
        )
    }
    render(){
        return (
            <div>
                <label>{this.props.label} : </label>
                <input 
                    type={this.props.type} 
                    onChange={this.handleInputChange}
                    value={this.props.value}
                />
            </div>
        )
    }
}