const playListsController = require('../DL/controllers/platListsController')
const jwtFn = require('../middlewere/jwt')


// async function login(loginData){
//   const password = loginData.password;
//   const email = loginData.email;
//   const user = await playListsController.readOne({email: email}, "+password")
// if (!user) throw({code:401, message:"not exist"})
// if (user.password !== password) throw({code:401, message:"unauthorized"})
// const token = jwtFn.createToken(user._id)
// return {token:token, name:user.firstName}
// }
//TODO: hash password 
// 
// module.exports = {login}

exports.getPlayListsNames = async() => {
    const playListsNames = await playListsController.read({});
    if(!playListsNames) throw ({code:400, message:"there is no playLists"})

      playListsController.read({})
}
exports.getPlayList = async(name) => {
    const playList = await playListsController.readOne({name: name});
    if(!playList) throw ({code:400, message:"we didnt find this playList"})

      playListsController.readOne({})
}
// exports.getUserDetailsById = (id) => {
//       playListsController.read({_id:id})
// }

exports.createPlayList = (playListFields) => {
    if(playListFields.length===0) throw ({code:400, message:"there is no details"})
      playListsController.create(playListFields)
}

// exports.updatePlayList = async(name,newData) => {
//     if(!newData)    throw ({code:400, message:"there is no new data"})
    
//     const playList = await playListsController.update({name},newData);
//     return playList
//   }
exports.removeSong = async(filter, song)=> {
    if(!song)    throw ({code:400, message:"there is no new data"})
    const newPlayList = await playListsController.update({filter},{$pull:{songs:song}});
    console.log("newPlayList:" , newPlayList);
    return newPlayList
}
exports.addSong = async(filter, song)=> {
    if(!song)    throw ({code:400, message:"there is no new data"})
    const newPlayList = await playListsController.update({filter},{$push:{songs:song}});
    console.log("newPlayList:" , newPlayList);
    return newPlayList
}
// function updateSongs(filter, song) {
//   return playListModel.updateOne(filter, { $push: { songs: song } }, )
// }





















// }

// async function register() {
    //     // many many many validations
    
    // }
    
    // async function getUserDetailsById(id) {
        
        //     await playListsController.create({ email: "Yon@walla.com" })
        
        // find
        // check if null or exist
        //   error / user {}
// let user1 = {
//     firstName: "Yonatan",
//     lastName: "Ramon",
//     email: "Yokon@walla.com",
//     password: "987865",
//     address: {
//         street: 12,
//         homeNum: 34,
//         city: "jerusalem",
//     },
//     gender: 'male'
// }

// create(user1)
