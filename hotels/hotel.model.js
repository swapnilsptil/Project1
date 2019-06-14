const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const menuItemSchema = new Schema({
//     itemType : {type: String, required : true},
//     price : {type: Number, required : true},
//     name : {type : String, required : true},
//     discount : {type : Number}
// })

// const mealType = new Schema({
//     mealType : {type: String, required : true},
//     menuItem : [{type: menuItemSchema, required : true}]
// })

// const rating = new Schema({
//     ratingValue : {type : Number}
// })

// const schema = new Schema({
//     hotelName: { type: String, required: true },
//     type: { type: String, required: true },
//     addressLine1 : { type: String, required: true },
//     addressLine2 : { type: String, required: true },
//     nearLocation : { type: String },
//     PinCode : {type: Number, required : true},
//     city : {type: String, required : true},
//     state: {type: String, required : true},
//     mobile : {type: Number, required: true},
//     email : {type: String, required : true},
//     hash: { type: String, required: true },
//     username: { type: String, unique: true, required: true },
//     createdDate: { type: Date, default: Date.now },
//     discount : {type : Number},
//     rating : {type: Number},
//     deliveryTime : {type : Number},
//     menu : [{type: mealType, required : true}]
// });

const menuItemSchema = new Schema({
    itemType : {type: String, required : true},
    price : {type: Number, required : true},
    name : {type : String, required : true},
    discount : {type : Number},
    imageUrl : {type : String},
    description : {type: String}
})

const mealType = new Schema({
    mealType : {type: String, required : true},
    menuItem : [{type: menuItemSchema, required : true}]
})
// const Rating = new Schema({
// 	value : {type : Number},
// 	count : {type : Number}
// })

const Address = new Schema({
    addressLine1 : { type: String, required: true },
    addressLine2 : { type: String, required: true },
    nearLocation : { type: String },
    PinCode : {type: Number, required : true},
    city : {type: String, required : true},
    state: {type: String, required : true}
})

const GeoLocation = new Schema({
	latitute : {type : String},
	longitude : {type : String}
})

const hotelRating = new Schema({
	value : {type : String},
	count : {type : String}
})

const schema = new Schema({
    hotelName: { type: String, required: true },
    type: { type: String, required: true },
    address : [{type : Address}],
	ratings : {type : hotelRating},
	priceRange : {type : String},
	geoLocation : {type : GeoLocation},
    mobile : {type: Number, required: true},
    email : {type: String, required : true},
    hash: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now },
    discount : {type : Number},
    rating : {type: Number},
    deliveryTime : {type : Number},
    menu : [{type: mealType, required : true}]
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Hotel', schema);
