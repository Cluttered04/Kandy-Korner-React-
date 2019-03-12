const CandyAPIManager = {
    get(id){
        return fetch(`http://localhost:5002/candies/${id}`)
    },

    getAll() {
        return fetch("http://localhost:5002/candies")
        .then(candies => candies.json())
    },

    postCandy(candyObject) {
        return fetch("http://localhost:5002/candies", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(candyObject)
        })

    }
}

export default CandyAPIManager;