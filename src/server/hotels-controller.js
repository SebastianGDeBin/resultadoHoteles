'use strict';
const HotelsServices = require('./hotels-services');


class HotelsController{

    static getHotels(req, res, next) {
        HotelsServices.get()
            .then(function(hotels){
                res.json(hotels);
            })
    }

}

module.exports = HotelsController;
