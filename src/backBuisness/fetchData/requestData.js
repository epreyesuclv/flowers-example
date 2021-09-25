const { default: axios } = require("axios");

async function buyFlowerNode(name, amount, address) {

    const vendors = await getAllVendor(name)
    let sell_it = false
    let data
    let status

    axios.defaults.timeout = 3000

    for (vendor in vendors) {
        if (sell_it)
            break;
        //I supose that all vendors, have enough flower to sell,this features will change in the future
        const endPoint = vendor.endPoint

        const options = {
            method: 'POST',
            url: `${endPoint}/buy/`,
            headers: { 'Content-Type': 'application/json' },
            data: { name: name, amount: amount, address: address }
        };
        axios.defaults.timeout = 5000
        await axios.request(options).then(function (response) {
            status = response.status
            data = "It will delivers you the flowers soon"
            sell_it = true
            //console.log(response)
        }).catch(function (error) {
            data = err
            //console.log("token ",error.response)
        });
    }


    if (!sell_it)
        status = 409

    return {
        status: status,
        data: data
    }
}

module.exports = {
    buyFlowerNode
}