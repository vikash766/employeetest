import React from 'react';
import { Link, withRouter } from 'react-router-dom';
const EmployeeList = (props) => {
    const { EmployeeList } = props;
    return (
        <div>
            <table>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>ProfileImage</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {EmployeeList.map(emp => 
                    <tr>
                        <td>{emp.FirstName}</td>
                        <td>{emp.LastName}</td>
                        <td> <img height="50" width="50" src={emp.DesignationProfile} alt="" /> </td>
                        <td> <Link to={`/employeeedit/${emp.id}`}>Edit</Link> </td>
                        <td> <a onClick={() => {props.deleteEmloyee(emp.Id)}}>Delete</a> </td>
                    </tr>
                )}
            </table>
        </div>
    )
}
export default withRouter(EmployeeList);