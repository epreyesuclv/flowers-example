
const {defaultElemet, doCreate, doDelete, doGetAll, doGetById } = require("./elementTest")


let data
//const element = { name: "rosa", region: "america", color: "rojo" }


test('operations with elements', async () => {

    //check insert
    data = await doCreate()
    expect(data.status).toBe(200)
    expect(data.element.toString()).toBe(defaultElemet.toString())

    //console.log(idToDelete)
    //check get By id
    data = await doGetById(defaultElemet.name)
    expect(data.status).toBe(200)
    expect(data.element.toString()).toBe(defaultElemet.toString())

    //check delete
    data = await doDelete(defaultElemet.name)
    expect(data.status).toBe(200)


})


//check get all
test('get all elements', async () => {
    data = await doGetAll()
    expect(data.status).toBe(200)

})



