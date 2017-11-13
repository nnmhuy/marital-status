import React, { Component } from 'react';
import Input from './Input.jsx'
import SingleChoice from './SingleChoice.jsx'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        age: '',
        gender: '',
        objectName: '',
        datingDate: '',
        maritalStatus: '',
        breakingUpDate: '',
    }
    this._changeHandler = this._changeHandler.bind(this)
    this._addUserInfo = this._addUserInfo.bind(this)
  }
  render() {
    let moreDetail = null;
    // wtf!?
    if (this.state['maritalStatus'] == "married") {
      moreDetail = (
        <div>
          <Input type="text" property='objectName' label="Object Name" changeHandler={this._changeHandler}/>
          <Input type="date" property='datingDate' label="Dating Date" changeHandler={this._changeHandler}/>
        </div>
      )
    } else if (this.state['maritalStatus'] == "divorced") {
      moreDetail = (
        <div>
          <Input type="text" property='objectName' label="Object Name" changeHandler={this._changeHandler}/>
          <Input type="date" property='datingDate' label="Dating Date" changeHandler={this._changeHandler}/>
          <Input type="date" property='breakingUpDate' label="Breaking Up Date" changeHandler={this._changeHandler}/>
        </div>
      )
    } else if (this.state['maritalStatus'] == "single") {
    }
    return (
      <div>
        Form
        <Input type="text" property='userName' label = "Username" changeHandler={this._changeHandler}/>
        <Input type="number" property='age' label = "Age" changeHandler={this._changeHandler}/>
        <SingleChoice 
          property='gender'
          label = "Gender"
          optionList = {[
            {key: 'Male', value: 'male'},
            {key: 'Female', value: 'female'}
          ]}
          changeHandler={this._changeHandler}
        />
        <SingleChoice
          property = 'maritalStatus'
          label = 'Marital Status'  
          optionList = {[
            {key: 'Single'  , value: 'single'},
            {key: 'Married' , value: 'married'},
            {key: 'Divorced', value: 'divorced'}
          ]}
          changeHandler={this._changeHandler}
        />
        {moreDetail}
        <button onClick={this._addUserInfo}>Add</button>
      </div>
    );
  }
  _changeHandler(property, value) { // ko dc set kieu nay =]]] mutate me roi...
    // let newInfo = Object.keys(this.state).map(key => {
    //   return this.state[key]
    // })
    // newInfo[property] = value
    if (value == 'single') {
      this.setState({
        ['objectName']: 'N/A', 
        ['datingDate']: 'N/A',
        ['breakingUpDate']: 'N/A',
        [property]: value
      })
    }
    else if (value == 'married') {
      this.setState({
        ['breakingUpDate']: 'N/A',
        [property]: value
      })
    }
    else {
      this.setState({
        [property]: value
      })
    }
  }
  _addUserInfo() {
    debugger
    this.props.addUserInfo(this.state)
  }
}