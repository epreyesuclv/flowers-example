const { createUserFront } = require("./usersFront.js")

const apiDocumentation = {
    openapi: '3.0.1',
    info: {
        version: '1.3.0',
        title: 'Flower-exampleAPI',
        description: 'Description of my API here',
        termsOfService: 'https://mysite.com/terms',
        contact: {
            name: 'Developer name',
            email: 'dev@example.com',
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
            url: 'https://api.mysite.com',
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
        // front_login: {
        //     post: loginUserFront
        // },
        // back_register: {
        //     post: registerUserBack
        // },
        // back_login: {
        //     post: loginUserBack

        // },
        // flowers: {
        //     get: getAllFlowers
        // },
        // 'flowers:id': {
        //     get: getFlowerById
        // },
        // buy: {
        //     post: buyFlower
        // }

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