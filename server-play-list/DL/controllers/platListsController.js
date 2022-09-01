const { playListsModel } = require('../models/platlists')
// 



async function create(data) {
    return await playListsModel.create(data);
}
async function readOne(filter) {
    return await playListsModel.findOne(filter);
}
async function read(filter) {
    return await playListsModel.find(filter);
}
async function update(filter, newData) {
    console.log("filter: ", filter, "new data: ", newData);
    const ud = await playListsModel.updateOne(filter, newData);
    console.log("ud:", ud);
    return ud

}
async function del(filter) {
    return await update(filter, { isActive: false });
}

module.exports = { create, readOne, read, update, del }







