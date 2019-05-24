const config = require('config.json');
const mongoose = require('mongoose');
//Atlas
// mongoose.connect(process.env.MONGODB_URI || config.connectionStringAtlas, { useCreateIndex: true, useNewUrlParser: true });

//Local Mongodb
mongoose.connect(process.env.MONGODB_URI || config.connectionStringLocal, { useCreateIndex: true, useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Hotel: require('../hotels/hotel.model')
};