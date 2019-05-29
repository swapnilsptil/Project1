const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Address = new Schema({
    addressLine1 : { type: String, required: true },
    addressLine2 : { type: String, required: true },
    nearLocation : { type: String },
    PinCode : {type: Number, required : true},
    city : {type: String, required : true},
    state: {type: String, required : true}
})

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address : [{type : Address}],
    mobile : {type: Number, required: true},
    email : {type: String, required : true},
    hash: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
