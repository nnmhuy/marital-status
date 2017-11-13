import React from 'react';

 export default class SingleChoice extends React.Component{
     constructor(props) {
        super(props);
        this.state = {
            choice: ""
        };
     }
     handleOptionChange = (event) => {
         this.setState({
             choice: event.target.value
         },
            this.props.handleChange(this.props.variable, event.target.value) 
        )
     }
     render(){
         const {label, optionList} = this.props;
         return (
            <div>
                <p>{label} : </p>
                {
                    optionList.map((item, index) => {
                        return (
                            <div key={index}>
                                <input 
                                    type="radio" 
                                    name={label} 
                                    value={item.value} 
                                    id={item.key} 
                                    onChange={this.handleOptionChange}
                                    /*checked = {this.state.choice === item.value}*/
                                    checked = {this.props.value == item.value}
                                />
                                <label htmlFor={item.key}>{item.key}</label>
                            </div>
                        )
                    })
                }
            </div>
         )
     }
 }
