import React, {Component} from "react"
import CandyList from "./CandyList.js"
import EmployeeList from "./EmployeeList.js"
import StoreList from "./StoreList.js"

class KandyKorner extends Component {
    storeArray = [
        {id: 1, name: "Super Candy Store", location: "Nashville"}, {id: 2, name: "Extra Special Candy Store", location: "Huntington"}
    ]

    employeeArray = [
        {id: 1, name: "Sandy"}, {id:2, name: "Kandy"}, {id: 3, name: "Mandy"}

    ]

    candyTypeArray = [
        {id:1, type: "hard"}, {id: 2, type: "chocolate"}, {id:3, type: "Brittle"}

    ]

    candyArray = [
        {id: 1, name: "Werther's", type: 1}, {id:2, name: "Truffles", type: 2}, {id: 3, name: "Peanut", type: 3}

    ]

    state = {
        stores : this.storeArray,
        employees : this.employeeArray,
        candyTypes : this.candyTypeArray,
        candies : this.candyArray,
    }

    render() {
        return  (
            <div className="KandyKorner">
                <CandyList candies={this.state.candies} />
                <StoreList stores={this.state.stores} />
                <EmployeeList employees={this.state.employees} />
            </div>
        )
    }


}

export default KandyKorner;