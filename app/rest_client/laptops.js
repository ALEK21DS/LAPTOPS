const IP = "192.168.0.106"
const PORT = 3002
const URL = "http://"+IP+":"+PORT+"/"

export const getAllLaptops = (fnRefreshList) => {
    console.log("getAllLaptops ..")
    fetch(
        URL+"laptops"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{
            fnRefreshList(body);
        }
    )
}