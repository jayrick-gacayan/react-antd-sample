import React, { Component } from 'react';
import StudentContainer from './components/StudentContainer';
import { schoolData, studentData } from './data';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            schools: schoolData,
            students: studentData
        }
    }

    render(){
        return (
            <React.Fragment>
                <StudentContainer schools={ this.state.schools }
                                students={ this.state.students }/>
            </React.Fragment>
        );
    }
}

export default App;