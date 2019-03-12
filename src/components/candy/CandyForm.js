import React, {Component} from "react"

export default class CandyForm extends Component {
    state = {
        name: "",
        candyTypeId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    constructNewCandy = evt => {
        evt.preventDefault();
        const candy = {
            name: this.state.name,
            candyTypeId: parseInt(this.state.candyTypeId)
        }
        this.props.addCandy(candy).then(() =>
        this.props.history.push("/candy"))

    }

render() {
    return (
        <React.Fragment>
            <form>
            <div className = "form-group">
                <label htmlFor="candyName">Candy Name</label>
                <input type="text" required id="name" placeholder="Candy Name" onChange={this.handleFieldChange}
                ></input>
            </div>
            <div className = "form-group">
            <label htmlFor="type">Candy Type</label>
            <select defaultValue="" name="candyType" id="candyTypeId" onChange={this.handleFieldChange}>
            <option value="">Select a Candy Type</option>
            {this.props.candyTypes.map(type => (
                <option key={type.id} id={type.id} value={type.id}>{type.type}</option>
            ))}
            </select>
            <button type="submit" onClick={this.constructNewCandy}>Submit</button>
            </div>
            </form>

        </React.Fragment>



    )
}




}

