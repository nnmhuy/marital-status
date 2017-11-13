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
        <input type="text"/>
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "single"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <div>
          <span> Name: </span>
          <input type="text" id="type-name"/>
        </div>
        <div>
          <span> Age: </span>
          <input type="text" id="type-age"/>
        </div>
        <div>
          <span> Gender: </span>
          <input type="radio" name="gender" id="male"/>
          <label> Male </label>
          <input type="radio" name="gender" id="female"/> 
          <label> Female </label>
        </div>
        <div>
          <span> Marital Status </span>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="single">Single</option>
            <option value="not single">Married/In a relationship</option>
            <option value="just broke up">Just broke up</option>
          </select>
        </div>
        <AdditionalForm value={this.state.value} />
        <button>
          Submit 
        </button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Marital Status</th>
              <th scope="col">First Day Together</th>
              <th scope="col">Last Day Together</th>
              <th scope="col">His/Her Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>fsd</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
      </table>
      </div>
    );
  }
}