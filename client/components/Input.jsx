import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this._changeHandler = this._changeHandler.bind(this)
    }
    render() {
        const {label, type} = this.props;
        return (
            <div>
                <label>{label}</label>
                <input 
                    value={this.state.value}
                    type={type}
                    onChange={this._changeHandler.bind(this, label)}
                />
            </div>

        );
    }
    _changeHandler(label, e) {
        this.setState({
            value:e.target.value
        }, () => {
            this.props.changeHandler(this.props.property, this.state.value)
        })
    }
}