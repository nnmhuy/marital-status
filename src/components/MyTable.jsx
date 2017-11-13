import React from 'react';


export default class MyTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        const list = this.props.list;
        return (
            <div>
                { list.length > 0 && 
                    <table className="tb">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Love date</th>
                                <th>Broke up date</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.maritalStatus}</td>
                                            <td>{item.loveDate}</td>
                                            <td>{item.divorcedDate}</td>
                                            <td>{item.nameOfLover}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}