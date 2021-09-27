const { default: axios } = require("axios");
const { getAllVendor, getVendors } = require("./floweQuerys")
const { cleanInsertAll } = require("./cleanOperations")
async function buyFlowerNode(name, amount, address) {

    const vendors = await getVendors(name)
    let sell_it = false
    let data
    let status

    axios.defaults.timeout = 3000
    console.log("requestData-buyFlower ", vendors)
<<<<<<< HEAD
<<<<<<< HEAD
    for (let v of vendors) {
        if (sell_it)
            break;
        //I supose that all vendors, have enough flower to sell,this features will change in the future
        console.log("requestData - inside for", v.endPoint)
        const options = {
            method: 'POST',
            url: `${v.endPoint}buy`,
            headers: { 'Content-Type': 'application/json' },
            data: { name: name, amount: amount, address: address, token:"sjadfhjkqshf" }
=======
    for (vendor in vendors) {
=======
    for (let v of vendors) {
>>>>>>> the next todo is the auth betwen main and node
        if (sell_it)
            break;
        //I supose that all vendors, have enough flower to sell,this features will change in the future
        console.log("requestData - inside for", v.endPoint)
        const options = {
            method: 'POST',
            url: `${v.endPoint}buy`,
            headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
            data: { name: name, amount: amount, address: address }
>>>>>>> almost finished
=======
            data: { name: name, amount: amount, address: address, token:"sjadfhjkqshf" }
>>>>>>> the next todo is the auth betwen main and node
        };
        axios.defaults.timeout = 3000
        await axios.request(options).then(function (response) {
            status = response.status
            data = "It will delivers you the flowers soon"
            sell_it = true
            //console.log(response)
        }).catch(function (error) {
<<<<<<< HEAD
<<<<<<< HEAD
            data = error
                        //console.log("token ",error.response)
=======
            data = err
            //console.log("token ",error.response)
>>>>>>> almost finished
=======
            data = error
                        //console.log("token ",error.response)
>>>>>>> the next todo is the auth betwen main and node
        });
    }


    if (!sell_it)
<<<<<<< HEAD
<<<<<<< HEAD
        status = 408
    console.log("requestData - buyFlower ",data)
=======
        status = 409

>>>>>>> almost finished
=======
        status = 408
    console.log("requestData - buyFlower ",data)
>>>>>>> the next todo is the auth betwen main and node
    return {
        status: status,
        data: data
    }
}

async function fetchFromAllNodes() {

    const vendors = await getAllVendor()
    console.log("requestData - fetchFromAllNodes",vendors)
    for (let v of vendors) {
<<<<<<< HEAD
<<<<<<< HEAD
        //console.log("requestData - fetchFromAllNodes",v)
=======
        console.log("requestData - fetchFromAllNodes",v)
>>>>>>> almost finished
=======
        //console.log("requestData - fetchFromAllNodes",v)
>>>>>>> the next todo is the auth betwen main and node
        const endPoint = v.endPoint

        const options = {
            method: 'GET',
            url: `${endPoint}flowers`,
            headers: { 'Content-Type': 'application/json' },
        };

        axios.defaults.timeout = 10000
        await axios.request(options).then(async function (response) {
            status = response.status
            data = response.data
<<<<<<< HEAD
<<<<<<< HEAD
            console.log("requestData - fetchFromAllNodes - axios request response",data)
            await cleanInsertAll(data, v.email)
          
=======
            await cleanInsertAll(data, v.email)
            //console.log(response)
>>>>>>> almost finished
=======
            console.log("requestData - fetchFromAllNodes - axios request response",data)
            await cleanInsertAll(data, v.email)
          
>>>>>>> the next todo is the auth betwen main and node
        }).catch(function (error) {
            data = error
            //console.log("token ",error.response)
        });

        console.log("requestData-fetchFromAllNodes", data)
    }


}


module.exports = {
    buyFlowerNode,
    fetchFromAllNodes
}