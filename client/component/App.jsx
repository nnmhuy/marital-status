import React from 'react';

function CreateTable(props) {
  if (!props.hadTable) return null;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Marital Status</th>
          <th scope="col">First Day Together</th>
          <th scope="col">Last Day Together</th>
          <th scope="col">His/Her Name</th>
        </tr>
      </thead>
    </table>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marritalStatus: "single",
      hadTable: false,
      name: "none",
      firstDay: "none",
      lastDay: "none",
      lists: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    if (!this.state.hadTable) {
      this.setState({hadTable: true})
    }
    this.state.lists.push({id: this.state.lists.length + 1, marritalStatus: this.state.marritalStatus, firstDay: this.state.firstDay, lastDay: this.state.lastDay, name: this.state.name})
  }

  render() {
    const content = this.state.lists.map((list) => 
      <table key={this.state.list.id}>
        <tbody>
          <tr>
            <td>{this.state.list.marritalStatus}</td>
            <td>{this.state.list.firstDay}</td>
            <td>{this.state.list.lastDay}</td>
            <td>{this.state.list.name}</td>
          </tr>
        </tbody>
      </table>
    )
    return (
      <div>
        <h1>Hello World</h1>
        <div>
          <span> Name: </span>
          <input type="text" id="type-name" />
        </div>
        <div>
          <span> Age: </span>
          <input type="text" id="type-age" />
        </div>
        <div>
          <span> Gender: </span>
          <input type="radio" name="gender" id="male" />
          <label> Male </label>
          <input type="radio" name="gender" id="female" /> 
          <label> Female </label>
        </div>
        <div>
          <span> Marital Status </span>
          <select value={this.state.marritalStatus} onChange={e => this.setState({marritalStatus: e.target.value})}>
            <option value="single">Single</option>
            <option value="not single">Married/In a relationship</option>
            <option value="just broke up">Just broke up</option>
          </select>
        </div>
        <div>
          {this.state.marritalStatus == "just broke up" ? (
            <div>
              <div>
                <span> His/Her Name: </span>
                <input type="text" onChange={e => this.setState({name: e.target.value})} />
              </div>
              <div>
                <span> First Day Together: </span>
                <input type="date" onChange={e => this.setState({firstDay: e.target.value})} />
              </div>
              <div>
                <span> Last Day Together: </span>
                <input type="date" onChange={e => this.setState({lastDay: e.target.value})} />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {this.state.marritalStatus == "not single" ? (
            <div>
              <div>
                <span> His/Her Name: </span>
                <input type="text" onChange={e => this.setState({name: e.target.value})} />
              </div>
              <div>
                <span> First Day Together: </span>
                <input type="date" onChange={e => this.setState({firstDay: e.target.value})} />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <button onClick={this.handleSubmit}>
          Submit 
        </button>
        <CreateTable hadTable={this.state.hadTable} />
        <div>
          {content}
        </div>
      </div>
    );
  }
}