const dao = require("../dao/user");

const { 
    createSchema, 
    nameSchema, 
    emailSchema, 
    passSchema 
} = require("./schema");

const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

async function createAbl(req, res) {
    try {
        const dtoIn = req.body;
        const valid = ajv.validate(createSchema, dtoIn);
        if (!valid) {
            return res.status(400).json({
                code: 'invalidInput',
                message: 'vstupní hodnoty nejsou validní',
                validationError: ajv.errors
            });
        }

        const user = {
            name: dtoIn.name,
            email: dtoIn.email,
            password: dtoIn.password
        }

        const result = await dao.create(user);
        return res.json(result);

    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function getAbl(req, res) {
    try {
        const dtoIn = req.query._id;
        const user = await dao.get(dtoIn);
        if (!user) {
            return res.status(404).json({
                code: 'userNotFound',
                message: 'nebyl nalezen uživatel',
            })
        }

        return res.json(user);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function updateNameAbl(req, res) {
    try {
        const dtoIn = req.body;
        const valid = ajv.validate(nameSchema, {name: dtoIn.name});
        if (!valid) {
            return res.status(400).json({
                code: 'invalidInput',
                message: 'jméno je moc dlouhý',
                validationError: ajv.errors
            });
        }

        const result = await dao.uName(dtoIn);
        return res.json(result);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function updateEmailAbl(req, res) {
    try {
        const dtoIn = req.body;
        const valid = ajv.validate(emailSchema, {email: dtoIn.email});
        if (!valid) {
            return res.status(400).json({
                code: 'invalidInput',
                message: 'e-mail je moc dlouhý',
                validationError: ajv.errors
            });
        }

        const result = await dao.uEmail(dtoIn);
        return res.json(result);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function updatePassAbl(req, res) {
    try {
        const dtoIn = req.body;
        const valid = ajv.validate(passSchema, {password: dtoIn.password});
        if (!valid) {
            return res.status(400).json({
                code: 'invalidInput',
                message: 'heslo je moc krátké nebo dlouhé',
                validationError: ajv.errors
            });
        }

        const result = await dao.uPass(dtoIn);
        return res.json(result);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createAbl,
    getAbl,
    updateNameAbl,
    updateEmailAbl,
    updatePassAbl
}