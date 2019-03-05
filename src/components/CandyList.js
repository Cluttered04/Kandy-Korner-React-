import React, {Component} from "react"

class CandyList extends Component {
    render() {
        return (
            <div className = "CandyList">
            <h1>Candy</h1>
                {this.props.candies.map((candy) => {

                    return <p key={candy.id}>{candy.name} "Candy-type"
                    {this.props.candyTypes.find((candyType) => {
                        return candy.type === candyType.id


                    }).type}</p>
                })}
            </div>
        )
    }
}

export default CandyList;