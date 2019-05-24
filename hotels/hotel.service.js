const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;
const Hotel = db.Hotel;

module.exports = {
    getAll,
    create
}

async function create(userParam) {
    // validate
    if (await Hotel.findOne({ hotelName: userParam.hotelName })) {
        throw 'Username "' + userParam.hotelName + '" is already taken';
    }

    const hotel = new Hotel(userParam);
    if (userParam.hotelName) {
        hotel.hash = bcrypt.hashSync(userParam.hotelName, 10);
    }

    // // hash password
    // if (userParam.password) {
    //     user.hash = bcrypt.hashSync(userParam.password, 10);
    // }

    // save user
    await hotel.save();
}

// async function authenticate({ username, password }) {
//     const user = await User.findOne({ username });
//     if (user && bcrypt.compareSync(password, user.hash)) {
//         const { hash, ...userWithoutHash } = user.toObject();
//         const token = jwt.sign({ sub: user.id }, config.secret);
//         // console.log('user Details', ...userWithoutHash);
//         return {
//             ...userWithoutHash,
//             token
//         };
//     }
// }

async function getAll() {
    return await Hotel.find();
}

// async function getById(id) {
//     return await User.findById(id);
// }


// async function update(id, userParam) {
//     const user = await User.findById(id);

//     // validate
//     if (!user) throw 'User not found';
//     if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
//         throw 'Username "' + userParam.username + '" is already taken';
//     }

//     // hash password if it was entered
//     if (userParam.password) {
//         userParam.hash = bcrypt.hashSync(userParam.password, 10);
//     }

//     // copy userParam properties to user
//     Object.assign(user, userParam);

//     await user.save();
// }

// async function _delete(id) {
//     await User.findByIdAndRemove(id);
// }