import React, { Component } from 'react';
import Form from './Form.jsx'
import Table from './Table.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      listUserInfo: []
    }
    this._addUserInfo = this._addUserInfo.bind(this)
  }

  render() {
    debugger
    let infoTable = null
    if (this.state.listUserInfo.length != 0) {
      infoTable = <Table listUserInfo={this.state.listUserInfo}/>
    }
    
    return (
      <div>
        <Form addUserInfo={this._addUserInfo}/>
        {infoTable}
      </div>
    );
  }
  _addUserInfo(userInfo) {
    debugger
    let newlistUserInfo = this.state.listUserInfo.map((user, index) => {
      return user
    });
    if (userInfo['maritalStatus'] == 'single') {
      userInfo['objectName'] = 'N/A';
      userInfo['datingDate'] = 'N/A';
      userInfo['breakingUpDate'] = 'N/A';
    };
    newlistUserInfo.push(userInfo)
    this.setState({
      listUserInfo: newlistUserInfo
    });
  }
}