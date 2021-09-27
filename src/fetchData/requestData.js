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
    for (let v of vendors) {
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
=======
            data: { name: name, amount: amount, address: address, token:"sjadfhjkqshf" }

>>>>>>> conficlt resolves
        };
        axios.defaults.timeout = 3000
        await axios.request(options).then(function (response) {
            status = response.status
            data = "It will delivers you the flowers soon"
            sell_it = true
            //console.log(response)
        }).catch(function (error) {
            data = error
                        //console.log("token ",error.response)
<<<<<<< HEAD
=======

>>>>>>> conficlt resolves
        });
    }


    if (!sell_it)
        status = 408
    console.log("requestData - buyFlower ",data)
<<<<<<< HEAD
=======

>>>>>>> conficlt resolves
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


        console.log("requestData - fetchFromAllNodes",v)
=======
        //console.log("requestData - fetchFromAllNodes",v)
>>>>>>> conficlt resolves
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

            console.log("requestData - fetchFromAllNodes - axios request response",data)
            await cleanInsertAll(data, v.email)
<<<<<<< HEAD
              
=======
>>>>>>> conficlt resolves
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