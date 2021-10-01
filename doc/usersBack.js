
const createUserBack = {
    tags: ['Users'],
    description: 'Create a new use in the system',

    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        firstName: {
                            type: 'string',
                            example: 'alfonse',
                        },
                        lastName: {
                            type: 'string',
                            example: 'snow'
                        },
                        email: {
                            type: 'string',
                            example: 'alfonse.snow@email.com',
                        },
                        password: {
                            type: 'string',
                            description: "unencrypted user's password",
                            example: '!1234$#',
                        },
                        endPoint:{
                            type: 'string',
                            example: 'http://localhost:4000/'
                        }
                    },
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'User created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            firstName: {
                                type: 'string',
                                example: 'algfonse',
                            },
                            lastName: {
                                type: 'string',
                                example: 'Snow',
                            },
                            email: {
                                type: 'string',
                                example: 'algfonse.snow@email.com',
                            },
                            password: {
                                type: 'string',
                                example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
                            },

                            createdAt: {
                                type: 'string',
                                example: '2021-03-20T19:40:59.495Z',
                            },
                            updatedAt: {
                                type: 'string',
                                example: '2021-03-20T21:23:10.879Z',
                            },
                            token: {
                                type: 'string',
                                example: "asdhfuasdhfupoashfpuoahwfoh.wurfhuhz1234hfsp9dfy",
                                description: 'you dont need to use this, the main server will check your currents flowers for you'
                            },

                        },
                    },
                },
            },
        },
        '401': {
            description: 'it is caused when cast parameters, please use only string format in all fields required',

        },
        '403': {
            description:
                'you need to include all parameter in the body , as json format'

        }, '409': {
            description:
                'the user that you want to use aready exist in the server'
        }, '503': {
            description:
                'I simply include this for testing , but is probable that was an error in my code  I apologize'

        },

    },
};


module.exports = {
    createUserBack,
    
}