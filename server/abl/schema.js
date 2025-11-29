//user
const createSchema = {
    type: 'object',
    properties: {
        name: {type: "string", maxLength: 20},
        email: {type: "string", format: "email", minLength: 6, maxLength: 30},
        password: {type: "string", minLength: 6, maxLength: 12}
    },

    required: ['name', 'email', 'password'],
    additionalProperties: false
}

const emailSchema = {
    type: 'object',
    properties: {
        email: {type: "string", format: "email", minLength: 6, maxLength: 30},
    },

    required: ['email'],
    additionalProperties: false
}

const nameSchema = {
    type: 'object',
    properties: {
        name: {type: "string", maxLength: 30}
    },

    required: ['name'],
    additionalProperties: false
}

const passSchema = {
    type: 'object',
    properties: {
        password: {type: "string", minLength: 6, maxLength: 12}
    },

    required: ['password'],
    additionalProperties: false
}

//shoppingList
const listSchema = {
    type: 'object',
    properties: {
        _id: {type: 'string', minLength: 24, maxLength: 24},
        title: {type: 'string', maxLength: 75},
        owner: {type: 'string', minLength: 24, maxLength: 24},

        items: {
            type: 'array',
            maxItems: 200,
            items: {
                type: 'object', 
                properties: {
                    _id: {type: 'string', minLength: 24, maxLength: 24},
                    name: {type: 'string', maxLength: 75},
                    status: {type: 'boolean'}
                },
                additionalProperties: false
            }
        },

        members: {type: 'array', maxItems: 50, items: {type: 'string', minLength: 24, maxLength: 24}},
        archived: {type: 'boolean'}
    },
    additionalProperties: false
}

module.exports = {
    createSchema,
    emailSchema,
    nameSchema,
    passSchema,
    listSchema
}