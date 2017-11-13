import React, { Component } from 'react';

export default class SingleChoice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this._changeHandler = this._changeHandler.bind(this)
  }
  render() {
    const {label, optionList} = this.props;
    return (
      <div>
        <label>{label}</label>
        <div>
          {
            optionList.map((element, index) => {
              return (
                <div key={index}>
                  <input 
                    type="radio" 
                    name={label} 
                    value={element.value} 
                    onClick={() => {this._changeHandler(label, element.value)}}/>
                  <label>{element.key}</label>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
  _changeHandler(label, value) {
    this.setState({
      value: value
    },() => {
      this.props.changeHandler(this.props.property, this.state.value)
    })
  } 
}