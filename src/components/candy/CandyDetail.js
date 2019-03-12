import React, {Component} from "react"

export default class CandyDetail extends Component {
    render() {
        const candy = this.props.candies.find(c => c.id === parseInt(this.props.match.params.candyId)) || {}
        return <section key={candy.id}>
            <h4>{candy.name}</h4>
            <h5>Type:</h5>
            {console.log(candy)}
            <p>{this.props.candyTypes.find((candyType) => {
                return candy.type === candyType.id
            }).type}</p><button onClick={() => this.props.deleteCandy(candy.id).then(() => this.props.history.push("/candy"))}>Delete</button>
        </section>
    }
}

