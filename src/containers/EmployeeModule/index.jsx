import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ListOfEmployees from '../EmployeeModule/ListOfEmployees';
import AddEmployeeForm from '../EmployeeModule/AddEmployeeForm';

import Button from '../../component/Button';

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EmployeeList: [{
                Id: "1",
                FirstName: "Vikash",
                LastName: "Kumar",
                DOB: "17/11/1993",
                DesignationProfile: "https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
                Experience: 7,
            }],
            showAddForm: false
        }

    }

    addEmpHandler = () => {
        this.setState(prevState => ({
            showAddForm: !prevState.showAddForm
        }))
        // this.setState({
        //     showAddForm: true
        // })
    }
    
    addEmloyee = (emp) => {
        const { EmployeeList } = this.state;
        EmployeeList.push({
            Id: Math.random(),
            FirstName: emp.FirstName,
            LastName: emp.LastName,
            DOB: emp.DOB,
            DesignationProfile: emp.DesignationProfile,
            Experience: emp.Experience,
        })
        this.setState({
            EmployeeList: EmployeeList
        })
    }

    deleteEmloyee = (empId) => {
        console.log(empId)
        const { EmployeeList } = this.state;
        EmployeeList.forEach((index, element) => {
            if(element.id == empId) {
                EmployeeList.splice(index)
            }
        });
        this.setState({
            EmployeeList: EmployeeList
        })
    }

    render() {
        const { EmployeeList, showAddForm } = this.state;
        return (
            <div>
                <Button
                    buttonText={showAddForm ? "Go Back" : "Add Employee"}
                    onClick={this.addEmpHandler} />
                {showAddForm ? <AddEmployeeForm addEmloyee={this.addEmloyee}/> : <ListOfEmployees EmployeeList={EmployeeList}  deleteEmloyee={this.deleteEmloyee}/>}

            </div>
        )
    }
}
export default withRouter(Employees);