const { createUserFront, loginUserFront } = require("./usersFront.js")
const { createUserBack } = require("./usersBack")
const { getAllFlowers, getFlowerById, buyFlower } = require("./flowers")
const apiDocumentation = {
    openapi: '3.0.1',
    info: {
        version: '1.3.0',
        title: 'Flower-exampleAPI',
        description: 'This api is just for testing microservice purpose, nothing really happens if you use /buy enpoint, it just fetch the existent data in all other nodes',
        contact: {
            name: 'Starcout',
            email: 'epreyesuclv@gmail.com',
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
    },
    servers: [
        {
            url: 'http://localhost:4000/',
            description: 'Local Server',
        },
        {
            url: 'https://flowres-example.herokuapp.com',
            description: 'Production Server',
        },
    ],
    tags: [
        {
            name: 'Flowers',
        },
        {
            name: 'Users',
        },
    ],
    paths: {
        '/front_register': {
            post: createUserFront

        },
        '/front_login': {
            post: loginUserFront
        },
        '/back_register': {
            post: createUserBack
        },

        '/flowers': {
            get: getAllFlowers
        },
        '/flowers:id': {
            get: getFlowerById
        },
        '/buy': {
            post: buyFlower
        }

    },

    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
};

module.exports = { apiDocumentation };