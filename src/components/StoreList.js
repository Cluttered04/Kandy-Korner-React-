import React, {Component} from "react"

class StoreList extends Component {
    render() {
        return (
            <div>
                <h1>Stores</h1>
                {this.props.stores.map((store) => {
                    return <p key={store.id}>{store.name} {store.location}</p>
                })}
            </div>
        )
    }
}

export default StoreList;