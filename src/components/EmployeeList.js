import React, {Component} from "react"

class EmployeeList extends Component {
    render() {
        return (
            <div className = "EmployeeList">
            <h1>Employees</h1>
            {this.props.employees.map((employee) => {
                return <p key={employee.id}>{employee.name}</p>
            })}

            </div>
        )
    }
}

export default EmployeeList;