const IP = "192.168.0.106"
const PORT = 3002
const URL = "http://" + IP + ":" + PORT + "/"

export const getAllLaptops = (fnRefreshList) => {
    console.log("getAllLaptops ..")
    fetch(
        URL + "laptops"
    ).then(
        (response) => { return response.json() }
    ).then(
        (body) => {
            fnRefreshList(body);
        }
    )
}
export const saveLaptopsRest = (laptop, fnShowMessage) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        })
    }
    fetch(
        URL + "laptops", config
    ).then(
        response => response.json()
    ).then(
        (body) => {
            fnShowMessage();
            console.log(body);
        }
    )
}
export const updateLaptopsRest = (laptop, fnShowMessage) => {
    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: laptop.id,
            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        })
    }
    fetch(
        URL + "laptops/" + laptop.id, config
    ).then(
        response => response.json()
    ).then(
        (body) => {
            fnShowMessage();
            console.log(body);
        }
    )
}