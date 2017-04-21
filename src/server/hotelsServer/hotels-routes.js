const Router = require('co-router');
const router = Router();
const hotels = require('./hotels-controller');

router.get('/hotels', hotels.getHotels);

module.exports = router;
