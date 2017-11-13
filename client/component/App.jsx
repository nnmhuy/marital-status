import React from 'react';

function JustBrokeUp() {
  return (
    <div>
      <div>
        <span> His/Her Name: </span>
        <input type="text"/>
      </div>
      <div>
        <span> First Day Together: </span>
        <input type="date"/>
      </div>
      <div>
        <span> Last Day Together: </span>
        <input type="date"/>
      </div>
    </div>
  )
}

function NotSingle() {
  return (
    <div>
      <div>
        <span> His/Her Name: </span>
        <input type="text" />
      </div>
      <div>
        <span> First Day Together: </span>
        <input type="date"/>
      </div>
    </div>
  )
}

function AdditionalForm(props) {
  const value = props.value;
  if (value == "just broke up") {
    return <JustBrokeUp />
  }
  if (value == "not single") {
    return <NotSingle />
  }
  return null
}

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

let lists = [];



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "single",
      hadTable: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({selectValue: event.target.value})
  }

  handleSubmit() {
    if (!this.state.hadTable) {
      this.setState({hadTable: true})
    }
  }

  render() {
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
          <select value={this.state.selectValue} onChange={this.handleChange}>
            <option value="single">Single</option>
            <option value="not single">Married/In a relationship</option>
            <option value="just broke up">Just broke up</option>
          </select>
        </div>
        <AdditionalForm value={this.state.selectValue} />
        <button onClick={this.handleSubmit}>
          Submit 
        </button>
        <CreateTable hadTable={this.state.hadTable} />

      </div>
    );
  }
}