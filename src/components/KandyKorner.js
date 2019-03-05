import React, {Component} from "react"
import CandyList from "./CandyList.js"
import EmployeeList from "./EmployeeList.js"
import StoreList from "./StoreList.js"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./NavBar"

class KandyKorner extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default KandyKorner;