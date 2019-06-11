const express = require('express');
const router = express.Router();
// const userService = require('./user.service');
const hotelService = require('./hotel.service');

// routes
// router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.post('/updateMenu', updateMenu);
router.post('/findHotelByMenu/:id', findHotelByMenu);
// router.get('/current', getCurrent);
// router.get('/:id', getById);
// router.put('/:id', update);
// router.delete('/:id', _delete);

module.exports = router;

// function authenticate(req, res, next) {
//     userService.authenticate(req.body)
//         .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
//         .catch(err => next(err));
// }

function register(req, res, next) {
    hotelService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    hotelService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function updateMenu(req, res, next) {
    hotelService.updateMenu(req.params.id, req.body)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function findHotelByMenu(req, res, next) {
    hotelService.findHotelByMenu(req.body)
        .then(hotel => {hotel ? res.json(hotel) : res.sendStatus(404)})
        .catch(err => next(err));
}

// function getById(req, res, next) {
//     userService.getById(req.params.id)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function update(req, res, next) {
//     userService.update(req.params.id, req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function _delete(req, res, next) {
//     userService.delete(req.params.id)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }