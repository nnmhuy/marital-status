import React from 'react'
import MyTable from './MyTable.jsx'
import InputForm from './InputForm.jsx'
import CSS from '../style.scss'

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        this.SubmitFunc = this.SubmitFunc.bind(this)
    }
    SubmitFunc(item){
        this.setState(function (prevState, props) {
            return {
                list: prevState.list.concat(item)
            };
        });
    }
    render(){
        return(
            <div>
                <MyTable list={this.state.list}/>
                <InputForm submit={this.SubmitFunc} />
            </div>
        );
    }
}