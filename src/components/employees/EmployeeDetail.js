import React, {Component} from "react"

export default class EmployeeDetail extends Component {
    render() {
        const employee = this.props.employees.find(e => e.id === parseInt(this.props.match.params.employeeId)) || {}
        return(
            <section key={employee.id}>
            <h4>{employee.name}</h4>
            <button onClick={() => this.props.deleteEmployee(employee.id).then(() => this.props.history.push("/employees"))}>Delete</button>
            </section>

        )
    }


}


// render() {
//     const candy = this.props.candies.find(c => c.id === parseInt(this.props.match.params.candyId)) || {}
//     return <section key={candy.id}>
//         <h4>{candy.name}</h4>
//         <h5>Type:</h5>
//         {console.log(candy)}
//         <p>{this.props.candyTypes.find((candyType) => {
//             return candy.type === candyType.id
//         }).type}</p><button onClick={() => this.props.deleteCandy}>Delete</button>
//     </section>
// }
// }