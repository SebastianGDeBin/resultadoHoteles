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
                    "https://d.otcdn.com/imglib/hotelfotos/8/192/hotel-petit-palace-san-bernardo-madrid-062.jpg",
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
                    "http://www.hotelnuevoboston.com/uploads/cms_apps/imagenes/habitacion-dbs-king-hotel-nuevo-boston.jpg",
                    "http://www.hotelnuevoboston.com/cache/e3/68/e3680b132bca9c585d897a7d89abc765.jpg",
                    "https://c.otcdn.com/imglib/hotelfotos/8/218/hotel-husa-nuevo-boston-madrid-025.jpg"
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
                    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Aquarius_Casino_entrance.jpg",
                    "https://exp.cdn-hotels.com/hotels/1000000/10000/5100/5073/0d160e20_z.jpg",
                    "https://media-cdn.tripadvisor.com/media/photo-s/05/6e/77/cf/aquarius-casino-resort.jpg"
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
                    "http://static.boydgaming.net/orleanscasino10/assets/shell/orleans-casino-bam-background.jpg",
                    "https://a1.r9cdn.net/rimg/kimg/ce/c8/259d3caa-154ca44cd81.jpg?crop=true&height=357&width=650",
                    "http://www.tnetnoc.com/hotelphotos/294/327294/2631759-The-Orleans-Hotel-and-Casino-Recreation-1-DEF.jpg"
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
                    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Aquarius_Casino_entrance.jpg",
                    "https://exp.cdn-hotels.com/hotels/1000000/10000/5100/5073/0d160e20_z.jpg",
                    "https://media-cdn.tripadvisor.com/media/photo-s/05/6e/77/cf/aquarius-casino-resort.jpg"
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
                    "http://eb5d278cc9c6fd715f58-c38ebb118e22ffeddd12a7b4594f793f.r7.cf1.rackcdn.com/XLGallery/pool.jpg",
                    "http://www.starwoodhotels.com/pub/media/1991/she1991ex.123043_md.jpg",
                    "https://httpsak-a.akamaihd.net/1479192018001/1479192018001_5256870508001_5256869637001-vs.jpg?pubId=1479192018001"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "tel": "telefono",
                    "sp": "Spa"}
            }
        ];
        _self.filters = {
            "nameDefault": "",
            "nameSearched" : "",
            "price":{
                "priceMin" : 0,
                "priceMax": 3500,
            },
            "stars":[],
            "numberStars": ["1","2","3","4","5"],
            "numberHotels": ["7","1","1","2","2","1"]
        };

        return new Promise(function(resolve, reject){
            resolve({"listHotel":_self.listHotel,
                "filters":_self.filters})
        })

    }
}

module.exports = HotelsServices;