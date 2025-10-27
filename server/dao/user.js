const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const uFolderPath = path.join(__dirname, 'storage', 'users');

function createUser(user) {
    try {
        user.id = crypto.randomBytes(16).toString('hex');
        const filePath = path.join(uFolderPath, `${user.id}.json`);
        const fileData = JSON.stringify(user);

        fs.writeFileSync(filePath, fileData, 'utf-8');
        return user;

    } catch (e) {
        throw { code: "failedToCreateUser", user: e.user }
    }
}

//listMembers?

module.exports = {
    createUser
};