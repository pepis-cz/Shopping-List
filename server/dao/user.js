const { ObjectId } = require("mongodb");

async function dbStart() {
    return global.db;
}

async function filePath() {
    const db = await dbStart();
    return db.collection('user');
}

async function create(object) {
    try {
        const collection = await filePath();

        const id = await collection.insertOne(object);
        const result = await collection.findOne({"_id": id.insertedId});

        return result;
    }
    catch (error) {
        throw error;
    }
}

async function get(id) {
    try {
        const collection = await filePath();

        const result = await collection.findOne({"_id": new ObjectId(id)});

        return result;
    }
    catch (error) {
        throw error;
    }
}

async function uName(values) {
    try {
        const collection = await filePath();

        await collection.updateOne({"_id": new ObjectId(values._id)}, {$set : {"name": values.name}});
        const result = await collection.findOne({"_id": new ObjectId(values._id)});

        return result;
    }
    catch (error) {
        throw error
    }
}

async function uPass(values) {
    try {
        const collection = await filePath();

        await collection.updateOne({"_id": new ObjectId(values._id)}, {$set : {"password": values.password}});
        const result = await collection.findOne({"_id": new ObjectId(values._id)});

        return result;
    }
    catch (error) {
        throw error
    }
}

async function uEmail(values) {
    try {
        const collection = await filePath();

        await collection.updateOne({"_id": new ObjectId(values._id)}, {$set : {"email": values.email}});
        const result = await collection.findOne({"_id": new ObjectId(values._id)});

        return result;
    }
    catch (error) {
        throw error
    }
}

module.exports = {
    create,
    get,
    uName,
    uPass,
    uEmail
}