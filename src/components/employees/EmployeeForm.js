import React, {Component} from "react"

export default class EmployeeForm extends Component {
    state = {
        name: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewEmployee = evt => {
        evt.preventDefault();
        const employees = {
            name: this.state.name
        }

        this.props.addEmployee(employees).then(() => this.props.history.push("/employees"))
    }

        render() {
            return(
                <React.Fragment>
                    <div>
                    <form>
                        <label htmlFor="employeeName">Employee Name</label>
                        <input type="text" id="name" placeholder="Employee Name" onChange={this.handleFieldChange}></input>
                    </form>
                    <button type="submit" onClick={this.constructNewEmployee}>Submit</button>
                    </div>


                </React.Fragment>



            )
        }


}