import React, {Component} from "react"
import {Link} from "react-router-dom"

class StoreList extends Component {
    render() {
        return (
            <div>
                <h1>Stores</h1>
                {this.props.stores.map((store) => {
                    return <div key={store.id}><Link to={`/stores/${store.id}`}>{store.name}</Link></div>

                })}
            </div>
        )
    }
}

export default StoreList;