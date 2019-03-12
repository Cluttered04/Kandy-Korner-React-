import React, {Component} from "react"
import {Link} from "react-router-dom"

class EmployeeList extends Component {
    render() {
        return (
            <div className = "EmployeeList">
            <button onClick={() => this.props.history.push("/employees/new")}>Add Employee</button>
            <h1>Employees</h1>
            {this.props.employees.map((employee) => {
                return <div key={employee.id}><Link to={`employees/${employee.id}`}>{employee.name}</Link></div>
            })}

            </div>
        )
    }
}

export default EmployeeList;

