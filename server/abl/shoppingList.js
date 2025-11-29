const dao = require("../dao/shoppingList");

const { listSchema } = require("./schema");

const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

async function createAbl (req, res) {
    try {
        const dtoIn = req.body;
        const shoppingList = {
            title: "",
            owner: dtoIn,

            items: [],
            members: [dtoIn],

            archived: false
        }

        const result = await dao.create(shoppingList);
        return res.json(result);

    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function getAbl (req, res) {
    try {
        const dtoIn = req.query._id;
        const list = await dao.get(dtoIn);

        if (!list) {
            return res.status(404).json({
                code: 'listNotFound',
                message: 'nebyl nalezen seznam'
            });
        }

        return res.json(list);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function updateAbl (req, res) {
    try {
        const dtoIn = req.body;
        const valid = ajv.validate(listSchema, dtoIn);

        if (!valid) {
            return res.status(400).json({
                code: 'invalidInput',
                message: 'vstupní hodnoty jsou neplatné',
                validationError: ajv.errors
            });
        }

        const result = await dao.update(dtoIn);
        return res.json(result);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function deleteAbl (req, res) {
    try {
        const dtoIn = req.body;
        const list = await dao.get(dtoIn.list_Id);
        if (!list) {
            return res.status(404).json({
                code: 'listNotFound',
                message: 'nebyl nalezenen seznam'
            });
        }

        const listOwner = list.owner;
        if (listOwner !== dtoIn.user_Id) {
            return res.status(403).json({
                code: 'userPermissionRestricted', 
                message: 'nedostatečné oprávnění pro smazání tohoto seznamu'
            });
        }

        const result = await dao.del(dtoIn.list_Id);
        return res.json(result);

    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function listAbl (req, res) {
    try {
        const dtoIn = req.query._id;
        const result = await dao.list(dtoIn);
        return res.json(result);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createAbl,
    getAbl,
    updateAbl,
    deleteAbl,
    listAbl
}