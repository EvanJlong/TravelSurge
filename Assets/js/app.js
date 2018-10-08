// api key
const key = 'LBXLGGGLHCVTA6MUI2PB';
// const placesKey = 'AIzaSyDW1KtYBTG9atRt_8QhxWi2GhO6uSBrzs0';
// const placesKey2 = 'AIzaSyCWWEVzZHQvwp5dhHJMTaDRVnATsYWKGXY';
// const placesKey3 = 'AIzaSyDliDoQC8OLbasGSdT_p5C55583bJ4q1eo';
const placesKeypaid = 'AIzaSyCSYp0PROxz6148kSPkdUSJZj61kwy3Quo'

//////////////this populates the category array//////////////
categoryArray = [];
$.ajax({
    url: `https://www.eventbriteapi.com/v3/categories/?token=${key}`,
    // Input the method type here (Hint: 'GET', 'POST', 'PUT', 'DELETE')
    method: 'GET'
}).then(function (response) {


    for (let i = 0; i < response.categories.length; i++) {
        let categories = {
            name: "",
            id: "",
        };
        categories.name = response.categories[i].name;
        categories.id = response.categories[i].id;
        // console.log(categories);
        categoryArray.push(categories);
    }

});
//CATEGORIES// //CATEGORIES// //CATEGORIES// //CATEGORIES// 
let eventArray = [];


const searchFunction = function (e) {
    e.preventDefault();
    const city = $('#cityForm').val().trim();
    // let city = prompt("asdf");
    eventArray = [];
    // taking the value entered into the city field and storing it//
    const catID = $('#inputState').val();
    $.ajax({
        url: `https://www.eventbriteapi.com/v3/events/search/?location.address=${city}&expand=organizer,venue&token=${key}`,
        method: 'GET'
    }).then(function (res) {
        for (var i = 0; i < res.events.length; i++) {
            // console.log(typeof(res.events[i].category_id));
            // console.log(res);
            //    console.log(res.events[i].start.timezone);
            if (`${catID}` === res.events[i].category_id) {
                eventArray.push(res.events[i])
            }
        }
        console.log(eventArray);
        //   $('#id').append(`<div class="class"></div>`)
        console.log(city);
        console.log(catID);

        $('#cityForm').empty();
        $("#inputState").val();
        // $("select#inputState").change(resetFieldToDefault);
        GoogleFunc();
        render();
    });
}

/////RENDER FUNCTION/////
const render = function () {
    let content = '';
    $('#results').empty();
    if (eventArray.length === 0) {
        content = `<div class="row">
        <div class="card-body col-12"><h5>No Results Found</h5></div></div>`;
    }
    else {
        for (let i = 0; i < eventArray.length; i++) {
            content += `<div class="row">
            <div class="card col-6">
            <a href="${eventArray[i].url}" target="_blank"> <img class="card-img-top" src="${eventArray[i].logo.url}" alt="Card image"></a>
            </div>
            <div class="card-body col-6" id="results-body">
                <h5 class="card-title">${eventArray[i].name.text}</h5>`;
            if (eventArray[i].description.text !== null) {
                content += `<p class="card-text">${eventArray[i].description.text}</p>
                    <a href="${eventArray[i].url}" target="_blank" class="btn btn-primary">Buy Tickets!</a>`
            }
            else {
                content += `<p class="card-text">Please join us for this amazing event!</p>
                    <a href="${eventArray[i].url}" target="_blank" class="btn btn-primary">Buy Tickets!</a>`
            }
            content += `</div>
        </div>`
        }
    }
    $('#results').append(content);
        getFoursquare();
}

<<<<<<< HEAD
$.ajax({
    url:`https://www.eventbriteapi.com/v3/events/search/?start_date.range_start=${startDate.local}&start_date.range_end=2018-10-11T19:00:00&expand=organizer,venue&token=${key}`,
    method: 'GET'
}).then(function(response){
    console.log(response);
})





 
//   table.setData("`https://www.eventbriteapi.com/v3/events/search/?location.address=Dallas&expand=organizer,venue&token=LBXLGGGLHCVTA6MUI2PB`,", {key1:"name"}, "GET");

// function dropdownFunction() {
//     var x = document.getElementById("mySelect").value;
=======
//START DATE TESTING FOR NICK////START DATE TESTING FOR NICK//
>>>>>>> db9fbbcc2a147a649c190a28fc9a5c319c044279

// let startDate = {
//     "timezone": "America/Los_Angelas",
//     "utc": "2018-05-12T02:00:00Z",
//     "local": "2018-05-11T19:00:00"
// }

// $.ajax({
//     url:`https://www.eventbriteapi.com/v3/events/search/?start_date.range_start=${startDate.timezone}&expand=organizer,venue&token=${key}`,
//     method: 'GET'
// }).then(function(response){
//     console.log(response.startDate.timezone);
// })
//START DATE TESTING FOR NICK////START DATE TESTING FOR NICK//

const GoogleFunc = function () {
    let hotelArray = [];
    for (let i = 0; i < eventArray.length; i++) {
        let coords = eventArray[i].venue.address.latitude + ',' + eventArray[i].venue.address.longitude;
        // console.log(coords);
        // let logo = eventArray[i].logo.url;
        // console.log(logo);
        // let eventName = eventArray[i].name.text;
        // console.log(eventName);
        // let dt = eventArray[i].start.local;
        // console.log(dt);
        // let map = '';
        // let link = eventArray[i].url;
        // console.log(link);

        ////////ATTEMPTED HTTP REQUEST
        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', `https://people.googleapis.com/maps/api/place/findplacefromtext/json?input=hotel&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:10000@${coords}&key=AIzaSyCSYp0PROxz6148kSPkdUSJZj61kwy3Quo`);    

        $.ajax({
            //general GOOGLE Places URL//
            // url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters`
            //proximity GOOGLE PlacesURL
            url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords}&radius=1500&type=restaurant&key=AIzaSyCSYp0PROxz6148kSPkdUSJZj61kwy3Quo`,
            method: 'GET'
        }).then(function (res) {
            //   for(var i = 0; i < res.events.length; i++){
            // console.log(typeof(res.events[i].category_id));
            // console.log(res);
            hotelArray.push(res);
            //    console.log(res.events[i].start.ti
        });
    }
    console.log(hotelArray);
    let restArray = [];
    for (let i = 0; i < eventArray.length; i++) {
        let coords = eventArray[i].venue.address.latitude + ',' + eventArray[i].venue.address.longitude;
        // console.log(coords);
        // let logo = eventArray[i].logo.url;
        // console.log(logo);
        // let eventName = eventArray[i].name.text;
        // console.log(eventName);
        // let dt = eventArray[i].start.local;
        // console.log(dt);
        // let map = '';
        // let link = eventArray[i].url;
        // console.log(link);

        ////////ATTEMPTED HTTP REQUEST
        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', `https://people.googleapis.com/maps/api/place/findplacefromtext/json?input=hotel&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:10000@${coords}&key=AIzaSyCSYp0PROxz6148kSPkdUSJZj61kwy3Quo`);    

        $.ajax({
            //general GOOGLE Places URL//
            // url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters`
            //proximity GOOGLE PlacesURL
            url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=restaurant&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:10000@${coords}&key=AIzaSyCSYp0PROxz6148kSPkdUSJZj61kwy3Quo`,
            method: 'GET'
        }).then(function (res) {
            //   for(var i = 0; i < res.events.length; i++){
            // console.log(typeof(res.events[i].category_id));
            // console.log(res);
            restArray.push(res);
            //    console.log(res.events[i].start.ti
        });
    }
    console.log(restArray);
}

///////FOURSQUARE
function getFoursquare() {
    const hotel = "4bf58dd8d48988d1fa931735";
    const food = "4d4b7105d754a06374d81259";
    const nightlife = "4d4b7105d754a06376d81259"
    for (let i = 0; i < eventArray.length; i++) {
        let coords = `${eventArray[i].venue.address.latitude},${eventArray[i].venue.address.longitude}`
        var url = `https://api.foursquare.com/v2/venues/search?v=20161016&ll=${coords}&query=park&intent=browse&radius=16000&categoryId=${hotel}&limit=10&client_id=0ODJZDHLKB0H32NCNULADKFHVKHCVACX3DZJVYLPZYQYF4XO&client_secret=DKA4ZIWNG5QGLKGJ0LYJQKRIEZLRFEWOHERYXQGKF2FHFC0X`;
        $.ajax({
            url: url,
            dataType: 'json',
            success: function (data) {
                var venues = data.response.venues;
                console.log(data);
                $.each(venues, function (i, venue) {
                    //   $('p').append(venue.name + '<br />');
                });
            }
        });
    };
}

$('#searchBtn').on('click', searchFunction);