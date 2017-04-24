class HotelsServices{

    //Get All Hotels
    static get(){

        var _self = this;
        _self.listHotel = [
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67533"},
                "name":"Hotel Emperador",
                "stars":"3",
                "price":1596.0,
                "images": [
                    "http://www.emperadorhotel.com/d/emperadormadrid/media/__thumbs_1600_714_crop/Piscina_Hotel_Emperador_Madrid.jpg?1457524338",
                    "http://www.emperadorhotel.com/d/emperadormadrid/media/__thumbs_1600_714_crop/Fachada_Hotel_Emperador_Madrid.jpg?1457523163",
                    "http://www.buenosaires.travel/wp-content/buenosaires_uploads/emperador-006-801x563.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa",
                    "pl":"pool"
                }
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67534"}
                ,"name":"Petit Palace San Bernardo",
                "stars":"4",
                "price":2145.0,
                "images": [
                    "http://www.petitpalace.com/cache/bc/8c/bc8c95bc1e825d1da55da2c5b5e3e3b7.jpg",
                    "https://d.otcdn.com/imglib/hotelfotos/8/192/hotel-petit-palace-san-bernardo-madrid-062.jpg",
                    "https://photo1.hotelsclick.com/madrid/26711/grande/petit-palace-san-bernardo-habitacion.1.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67535"},
                "name":"Hotel Nuevo Boston",
                "stars":"2",
                "price":861.0,
                "images": [
                    "https://images.clarin.com/2016/12/13/HkH8GlycVl_720x0.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67536"},
                "name":"Aquarius Casino Resort",
                "stars":"1",
                "price":450.0,
                "images": [
                    "https://images.clarin.com/2016/12/13/HkH8GlycVl_720x0.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67537"},
                "name":"The Orleans Hotel and Casino",
                "stars":"5",
                "price":3250.0,
                "images": [
                    "https://images.clarin.com/2016/12/13/HkH8GlycVl_720x0.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67538"},
                "name":"Aquarius Casino Resort",
                "stars":"3",
                "price":1350.0,
                "images": [
                    "https://images.clarin.com/2016/12/13/HkH8GlycVl_720x0.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            },
            {
                "_id":{"$oid":"58cb47efe3dcd6c694f67539"},
                "name":"Sheraton Dallas Hotel",
                "stars":"4",
                "price":3000.0,
                "images": [
                    "https://images.clarin.com/2016/12/13/HkH8GlycVl_720x0.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            }
        ];

        return new Promise(function(resolve, reject){
            resolve(_self.listHotel)
        })

    }
}

module.exports = HotelsServices;