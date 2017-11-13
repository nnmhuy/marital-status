import React, { Component } from 'react';

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {listUserInfo} = this.props;
    return (
      <div>
        <thead>
          <th> Marital status </th>
          <th> Dating Date </th>
          <th> Breaking Up Date</th>
          <th> Object Name </th>
        </thead>
        <tbody>
          {
            listUserInfo.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element['maritalStatus']}</td>
                  <td>{(element['datingDate']) ? element['datingDate'] : 'N/A'}</td>
                  <td>{(element['breakingUpDate']) ? element['breakingUpDate'] : 'N/A'}</td>
                  <td>{(element['objectName']) ? element['objectName'] : 'N/A'}</td>
                </tr>
              )
            })
          }
        </tbody>
      </div>
    );
  }
}