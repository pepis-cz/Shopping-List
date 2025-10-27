const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const sLFolderPath = path.join(__dirname, 'storage', 'shopLists');

function createSL(shopList) {
    try {
        shopList.id = crypto.randomBytes(16).toString('hex');
        const filePath = path.join(sLFolderPath, `${shopList.id}.json`);
        const fileData = JSON.stringify(shopList);

        fs.writeFileSync(filePath, fileData, 'utf-8');
        return shopList;

    } catch (e) {
        throw { code: "failedToCreateShopList", shopList: e.shopList }
    }
}

function getSL(shopListId) {
    try {
        const filePath = path.join(sLFolderPath, `${shopListId}.json`);
        const fileData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileData);
        
    } catch (e) {
        throw { code: "failedToGetShopList", shopListId: e.shopListId }
    }
}

function updateSL(shopList) {
    try {
        const currentShopList = getSL(shopList.id);
        const update = { ...currentShopList, ...shopList};

        const filePath = path.join(sLFolderPath, `${shopList.id}.json`);
        const fileData = JSON.stringify(update);
        fs.writeFileSync(filePath, fileData, 'utf-8');
        return shopList;

    } catch (e) {
        throw { code: "failedToUpdateShopList", shopList: e.shopList }
    }
}

function deleteSL(shopListId) {
    try{
        pathData = path.join(sLFolderPath, `${shopListId}.json`);
        fs.unlinkSync(pathData);
        return ;

    } catch {
        throw { code: "failedToDeleteShopList", shopListId: e.shopListId }
    }
}

function listUnarchived(userId) {
    try {
        const shopList = list();
        return shopList.filter((shopList) => shopList.members.includes(userId) === true && shopList.archived === false);

    } catch (e) {
        throw { code: "failedToListShopListsByUserId", userId: e.userId }
    }
}

function listArchived(userId) {
    try {
        const shopList = list();
        return shopList.filter((shopList) => shopList.members.includes(userId) === true && shopList.archived === true);

    } catch (e) {
        throw { code: 'failedToListArchivedShopLists', shopList: e.shopList}
    }
}

module.exports = {
    createSL,
    getSL,
    updateSL,
    deleteSL,

    listUnarchived,
    listArchived
};