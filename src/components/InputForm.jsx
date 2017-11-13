import React from 'react'
import SingleChoice from './SingleChoice.jsx'
import Input from './Input.jsx'


export default class InputForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            age: "",
            gender: "",
            maritalStatus: "",
            nameOfLover: "",
            loveDate: "",
            divorcedDate: ""
        }
    }
    resetMaritalStatus = () => {
        this.setState({
            nameOfLover: "",
            loveDate: "",
            divorcedDate: ""
        })
    }
    handleChange = (label, value) => {
        this.setState({
            [label]: value
        }, () => {
            if (label === "maritalStatus") this.resetMaritalStatus();
        })
    }
    submitForm = () => {
        this.props.submit(this.state);
        this.setState({
            name: "",
            age: "",
            gender: "",
            maritalStatus: "",
            nameOfLover: "",
            loveDate: "",
            divorcedDate: ""
        })
    }
    render (){
        const user = this.state
        return (
            <div>
                <h1>Form</h1>
                <Input
                    label="Name"
                    type="text"
                    handleChange={this.handleChange}
                    value={user.name}
                    variable = "name"
                ></Input>
                <Input
                    label="Age"
                    type="number"
                    handleChange={this.handleChange}
                    value={user.age}
                    variable="age"
                ></Input>
                <SingleChoice 
                    label = "Gender" 
                    optionList = {[
                        {key: 'Male', value: 'male'},
                        {key: 'Female', value: 'female'}
                    ]}
                    handleChange = {this.handleChange}
                    value = {user.gender}
                    variable = "gender"
                ></SingleChoice>
                <SingleChoice
                    label="Marital Status"
                    optionList={[
                        { key: 'Single', value: 'single' },
                        { key: 'Married', value: 'married' },
                        { key: 'Divorced', value: 'divorced'}
                    ]}
                    handleChange={this.handleChange}
                    value={user.maritalStatus}
                    variable="maritalStatus"
                ></SingleChoice>
                {
                    (user.maritalStatus === "married" || user.maritalStatus ==="divorced") ? (
                        <div>
                            <Input
                                label="Name of lover"
                                type="text"
                                handleChange={this.handleChange}
                                value={user.nameOfLover}
                                variable="nameOfLover"
                            ></Input>
                            <Input
                                label="Love date"
                                type="date"
                                handleChange={this.handleChange}
                                value={user.loveDate}
                                variable="loveDate"
                            ></Input>
                        </div>
                    ) : (null)
                }
                {
                    (user.maritalStatus === "divorced") && 
                    <Input
                        label="Divorced date"
                        type="date"
                        handleChange={this.handleChange}
                        value={user.divorcedDate}
                        variable="divorcedDate"
                    ></Input>
                }
                <button onClick={this.submitForm}>Submit</button>
            </div>
        )
    }
}