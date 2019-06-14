const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;
const Hotel = db.Hotel;

module.exports = {
    getAll,
    create,
    getHotelById,
    updateMenu,
    findHotelByMenu,
    delete: _delete
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

    await hotel.save();
}

async function getAll() {
    return await Hotel.find();
}

async function updateMenu(id, userParam) {
    const hotel = await Hotel.findById(id);

    // validate
    if (!hotel) throw 'Hotel not found';
    if (hotel.username !== userParam.username && await Hotel.findOne({ username: userParam.username })) {
        throw 'Username "' + hotel.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(hotel, userParam);

    await hotel.save();
}

async function findHotelByMenu(req) {
   
    // ToDo : Return only Hotel List without Menu parameter
    return await Hotel.find({menu: {$elemMatch: {mealType : req.mealType}}}, {"menu":0});
    
    // console.log(hotel);
}

async function getHotelById(id) {
    return await Hotel.findById(id, {"menu":1});
}

/*/ ToDO : 
* Create seperate API to return only Hotel Menu by Id : 
* Add Single menu in Hotel 
*/


async function _delete(id) {
    await User.findByIdAndRemove(id);
}

async function _delete(id) {
    await Hotel.findByIdAndRemove(id);
}

