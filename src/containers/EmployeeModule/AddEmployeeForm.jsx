import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Input from '../../component/Input';
import Button from '../../component/Button';
const EmployeeForm = (props) => {
    return (
        <div>
            <h1>ADD EMPLOYEE</h1>
            <div className="pt-10">
                {/* FirstName: "Vikash",
            LastName: "Kumar",
            DOB: "17/11/1993",
            DesignationProfile: "https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
            Experience: 7, */}
                <form action="submit">
                    <Input
                        // value="",
                        placeholder="FirstName"
                        // onChange={this.onChangeHandler()}
                    />
                    <Button
                        buttonText={"submit"}
                        onClick={props.addEmloyee} />
                </form>
            </div>
        </div>
    )
}
export default withRouter(EmployeeForm);