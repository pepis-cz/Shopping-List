const { ObjectId } = require("mongodb");

async function dbStart() {
    return global.db;
}

async function filePath() {
    const db = await dbStart();
    return db.collection('sList');
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

async function update(object) {
    try {
        const collection = await filePath();

        const {_id, ...updatedFields} = object
        await collection.updateOne({"_id": new ObjectId(_id)}, {$set: updatedFields});
        const result = await collection.findOne({"_id": new ObjectId(_id)});

        return result;
    }
    catch (error) {
        throw error
    }
}

async function del(id) {
    try{
        const collection = await filePath();

        const result = await collection.deleteOne({"_id": new ObjectId(id)});

        return result;
    }
    catch (error) {
        throw error;
    }
}

async function list(id) {
    try {
        const collection = await filePath();

        const result =  await collection.find(
            {"members": id},
            {projection: {"title": 1, "archived": 1, "items": 1, "_id": 0 }}
        );

        return result.toArray();
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    get,
    update,
    del,
    list
}