const CandyTypeAPIManager = {
    get(id){

    },

    getAll() {
        return fetch("http://localhost:5002/candyTypes")
        .then(candyTypes => candyTypes.json())
    }
}

export default CandyTypeAPIManager