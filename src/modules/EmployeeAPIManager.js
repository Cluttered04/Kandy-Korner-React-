const EmployeeAPIManager = {
    get(id){
        return fetch(`http://localhost:5002/employees/${id}`)
    },

    getAll() {
        return fetch("http://localhost:5002/employees")
            .then(employees => employees.json())
    },

    postEmployee(employeeObject) {
        return fetch("http://localhost:5002/employees", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(employeeObject)
        })
    }
}

export default EmployeeAPIManager;