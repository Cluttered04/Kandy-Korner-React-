import {Route} from "react-router-dom"
import React, {Component} from "react"
import CandyList from "./CandyList"
import EmployeeList from "./EmployeeList"
import StoreList from "./StoreList"


class ApplicationViews extends Component {


    componentDidMount(){
        const newState = {}
        fetch("http://localhost:5002/stores")
        .then(stores => stores.json())
        .then(parsedStores => {
            newState.stores = parsedStores
            return fetch("http://localhost:5002/employees")
            .then(employees => employees.json())
            .then(parsedEmployees => {
                newState.employees = parsedEmployees
                return fetch("http://localhost:5002/candyTypes")
                .then(candyTypes => candyTypes.json())
                .then(parsedTypes => {
                    newState.candyTypes = parsedTypes
                    return fetch("http://localhost:5002/candies")
                    .then(candies => candies.json())
                    .then(parsedCandies => {
                        newState.candies = parsedCandies
                        this.setState(newState);
                    })
                })
            })
        })
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
            <Route exact path="/" render={(props) => {
                return <StoreList stores={this.state.stores} />
            }} />
            <Route path="/stores" render={(props) => {
                return <StoreList stores={this.state.stores} />
            }} />
            <Route path="/employees" render={(props) => {
                return <EmployeeList employees={this.state.employees} />
            }} />
            <Route path="/candy" render={(props) => {
                return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes} />
            }} />
            </div>
        )
    }
    // render() {
    //     return  (
    //         <div className="KandyKorner">
    //             <CandyList candies={this.state.candies} />
    //             <StoreList stores={this.state.stores} />
    //             <EmployeeList employees={this.state.employees} />
    //         </div>
    //     )
    // }


}

export default ApplicationViews;