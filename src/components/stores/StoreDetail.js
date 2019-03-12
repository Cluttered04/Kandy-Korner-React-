import React, {Component} from "react"
import {Link} from "react-router-dom"

export default class StoreDetail extends Component {
    render(){
        const store = this.props.stores.find(s => s.id === parseInt(this.props.match.params.storeId)) || {}

    return (<section>
        <div key={store.id}>
        <h4>{store.name}</h4>
        <p>{store.location}</p>
        <button onClick={() => this.props.deleteStore(store.id).then(() => this.props.history.push("/stores"))}>Delete</button>
        </div>
    </section>
    )
    }
}

