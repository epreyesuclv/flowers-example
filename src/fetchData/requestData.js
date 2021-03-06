const { default: axios } = require("axios");
const { getAllVendor, getVendors } = require("./floweQuerys")
const { cleanInsertAll } = require("./cleanOperations")
async function buyFlowerNode(name, amount, address) {
    fetchFromAllNodes()
    const vendors = await getVendors(name)
    let sell_it = false
    let data
    let status
    let  err

    axios.defaults.timeout = 3000
    //console.log("requestData-buyFlower ", vendors)
    for (let v of vendors) {
        if (sell_it)
            break;
        //I supose that all vendors, have enough flower to sell,this features will change in the future
        //console.log("requestData - inside for", v.endPoint)
        const options = {
            method: 'POST',
            url: `${v.endPoint}buy`,
            headers: { 'Content-Type': 'application/json' },

            data: { name: name, amount: amount, address: address }
        };
        axios.defaults.timeout = 3000
        await axios.request(options).then(function (response) {
            status = response.status
            data = "It will delivers you the flowers soon"
            sell_it = true
            //console.log(response)
        }).catch(function (error) {
            err = error
            //console.log("token ",error.response)
        });
    }


    if (!sell_it) {
        status = 409
        data = "sorry your flower does exist"
    }    //console.log("requestData - buyFlower ",data)
    return {
        status: status,
        data: data,
        err: err
    }
}

async function fetchFromAllNodes() {

    const vendors = await getAllVendor()
    //console.log("requestData - fetchFromAllNodes",vendors)
    for (let v of vendors) {


        //console.log("requestData - fetchFromAllNodes",v)
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

            //console.log("requestData - fetchFromAllNodes - axios request response",data)
            await cleanInsertAll(data, v.email)

        }).catch(function (error) {
            data = error
            //console.log("token ",error.response)
        });

        //console.log("requestData-fetchFromAllNodes", data)
    }
}


module.exports = {
    buyFlowerNode,
    fetchFromAllNodes
}