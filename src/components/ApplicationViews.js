import {Route} from "react-router-dom"
import React, {Component} from "react"
import CandyList from "./candy/CandyList"
import EmployeeList from "./employees/EmployeeList"
import StoreList from "./stores/StoreList"
import CandyAPIManager from "../modules/CandyAPIManager"
import EmployeeAPIManager from "../modules/EmployeeAPIManager"
import StoreAPIManager from "../modules/StoreAPIManager"
import CandyTypeAPIManager from "../modules/CandyTypeAPIManager"
import StoreDetail from "./stores/StoreDetail"
import CandyDetail from "./candy/CandyDetail"
import EmployeeDetail from "./employees/EmployeeDetail"
import EmployeeForm from "./employees/EmployeeForm"
import CandyForm from "./candy/CandyForm"



class ApplicationViews extends Component {


    componentDidMount(){
        const newState = {}
        StoreAPIManager.getAll()
        .then(parsedStores => {
            newState.stores = parsedStores
            EmployeeAPIManager.getAll()
            .then(parsedEmployees => {
                newState.employees = parsedEmployees
                CandyTypeAPIManager.getAll()
                .then(parsedTypes => {
                    newState.candyTypes = parsedTypes
                    CandyAPIManager.getAll()
                    .then(parsedCandies => {
                        newState.candies = parsedCandies
                        this.setState(newState);
                    })
                })
            })
        })
    }

    deleteCandy = id => {
        return fetch(`http://localhost:5002/candies/${id}`, {
            method: "DELETE"
        }).then(r => r.json())
        .then(() => {
            CandyAPIManager.getAll()
            .then(parsedCandy => this.setState({
                candies: parsedCandy
            }))
        })
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        }).then(r => r.json())
        .then(() => {
            EmployeeAPIManager.getAll()
            .then(parsedEmployees => this.setState({
            employees: parsedEmployees
        }))
        })

    }

    deleteStore = id => {
        return fetch(`http://localhost:5002/stores/${id}`, {
            method: "DELETE"
        }).then(r => r.json())
        .then(() => {
            StoreAPIManager.getAll()
            .then(parsedStores => this.setState({
            stores: parsedStores
        }))
        })

    }

    addEmployee = employee => {
        return EmployeeAPIManager.postEmployee(employee)
        .then(() => EmployeeAPIManager.getAll())
        .then(employees => this.setState({employees: employees})
        )}

    addCandy = candy => {
        return CandyAPIManager.postCandy(candy)
        .then(() => CandyAPIManager.getAll())
        .then(candy => this.setState({candies: candy}))
    }

    state = {
        stores : [],
        employees : [],
        candyTypes : [],
        candies : [],
    }

    render() {
        return (
            <div className="container-div">
            <Route exact path="/" render={() => {
                return <StoreList deleteStore = {this.deleteStore} stores={this.state.stores} />
            }} />
            <Route path="/stores/:storeId(\d+)"
                render={props => {
                    return(
                        <StoreDetail {...props} deleteStore={this.deleteStore} stores={this.state.stores}/>
                    )
                }}/>
            <Route exact path="/stores" render={(props) => {
                return <StoreList stores={this.state.stores} />
            }} />
            <Route path="/employees/:employeeId(\d+)" render={props => {
                return <EmployeeDetail {...props} deleteEmployee = {this.deleteEmployee} employees = {this.state.employees} />
            }} />
            <Route path="/employees/new" render={(props => {
                return <EmployeeForm {...props} addEmployee={this.addEmployee} employees={this.state.employees} />
            })}/>
            <Route exact path="/employees" render={props => {
                return <EmployeeList {...props} employees={this.state.employees} />
            }} />
            <Route path="/candy/:candyId(\d+)" render={(props) => {
                return <CandyDetail {...props} deleteCandy={this.deleteCandy} candies={this.state.candies} candyTypes={this.state.candyTypes} />
            }} />
            <Route exact path="/candy" render={(props) => {
                return <CandyList {...props} candies={this.state.candies} candyTypes={this.state.candyTypes} />
            }} />
            <Route path="/candy/new" render={props => {
                return <CandyForm {...props} candies={this.state.candies} candyTypes={this.state.candyTypes} addCandy={this.addCandy}/>
            }}/>
            </div>
        )
    }
}

export default ApplicationViews;

{/* <Route
path="/animals/:animalId(\d+)"
render={props => {
  return (
    <AnimalDetail
      {...props}
      deleteAnimal={this.deleteAnimal}
      animals={this.state.animals}
    />
  );
}}
/> */}