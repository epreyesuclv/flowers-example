
const { doCreate, doDelete, doGetAll, doGetById } = require("./elementTest")
let idToDelete
let data
//const element = { name: "rosa", region: "america", color: "rojo" }


test('operations with elements', async () => {

    //check insert
    data = await doCreate()
    expect(data.status).toBe(200)

    idToDelete = data.id
    //console.log(idToDelete)
    //check get By id
    data = await doGetById(idToDelete)
    expect(data.status).toBe(200)

    //check delete
    data = await doDelete(idToDelete)
    expect(data.status).toBe(200)


})


//check get all
test('get all elements', async () => {
    data = await doGetAll()
    expect(data.status).toBe(200)

})

