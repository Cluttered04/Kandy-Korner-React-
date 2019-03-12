import React, {Component} from "react"
import {Link} from "react-router-dom"

class CandyList extends Component {
    render() {
        return (
            <div className = "CandyList">
            <h1>Candy</h1>
            <button onClick={() => this.props.history.push("/candy/new")}>Add New Candy!</button>
                {this.props.candies.map((candy) => {

                    return <div key={candy.id}><Link to={`candy/${candy.id}`}>{candy.name}</Link></div>
                })}
            </div>
        )
    }
}

export default CandyList;

