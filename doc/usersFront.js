const createUserFront = {
    tags: ['Users'],
    description: 'Create a new use in the system',
    operationId: 'createUser',

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
                            token: {
                                type: 'string',
                                example: "asdhfuasdhfupoashfpuoahwfoh.wurfhuhz1234hfsp9dfy",
                            },

                            createdAt: {
                                type: 'string',
                                example: '2021-03-20T19:40:59.495Z',
                            },
                            updatedAt: {
                                type: 'string',
                                example: '2021-03-20T21:23:10.879Z',
                            },
                        },
                    },
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal Server Error',
                            },
                        },
                    },
                },
            },
        },
    },
};

module.exports = { createUserFront };