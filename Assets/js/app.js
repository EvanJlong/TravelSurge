// api key
const key = 'LBXLGGGLHCVTA6MUI2PB';
// const placesKey = 'AIzaSyDW1KtYBTG9atRt_8QhxWi2GhO6uSBrzs0';
// const placesKey2 = 'AIzaSyCWWEVzZHQvwp5dhHJMTaDRVnATsYWKGXY';
// const placesKey3 = 'AIzaSyDliDoQC8OLbasGSdT_p5C55583bJ4q1eo';
const placesKeypaid = 'AIzaSyCSYp0PROxz6148kSPkdUSJZj61kwy3Quo'


//////////////this populates the category array//////////////
categoryArray = [];
$.ajax({
    url: `https://www.eventbriteapi.com/v3/categories/?token=${key}` ,
    // Input the method type here (Hint: 'GET', 'POST', 'PUT', 'DELETE')
    method: 'GET'
  }).then(function(response) {
      
    
    for (let i=0; i < response.categories.length; i++){
        let categories = {
            name: "",
            id : "",
        };
        categories.name = response.categories[i].name;
        categories.id = response.categories[i].id;
        // console.log(categories);
        categoryArray.push(categories);
    }

  });
//CATEGORIES// //CATEGORIES// //CATEGORIES// //CATEGORIES// 
let eventArray = [];


const searchFunction = function(e){
    e.preventDefault();
    const city = $('#cityForm').val().trim();
    // let city = prompt("asdf");
    eventArray = [];
// taking the value entered into the city field and storing it//
    const catID = $('#inputState').val();
$.ajax({
    url: `https://www.eventbriteapi.com/v3/events/search/?location.address=${city}&expand=organizer,venue&token=${key}`,
    method: 'GET'
  }).then(function(res) {
      for(var i = 0; i < res.events.length; i++){
        // console.log(typeof(res.events[i].category_id));
        // console.log(res);
    //    console.log(res.events[i].start.timezone);
    if (`${catID}` === res.events[i].category_id){
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
  });
}

//START DATE TESTING FOR NICK////START DATE TESTING FOR NICK//

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
    for (let i = 0; i < eventArray.length; i++) {
        let coords = eventArray[i].venue.address.latitude + ',' + eventArray[i].venue.address.longitude;
        console.log(coords);
        let logo = eventArray[i].logo.url;
        console.log(logo);
        let eventName = eventArray[i].name.text;
        console.log(eventName);
        let dt = eventArray[i].start.local;
        console.log(dt);
        let map = '';
        let link = eventArray[i].url;
        console.log(link);
    }
//     $.ajax({
//     //general GOOGLE Places URL//
//     // url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters`

//     //proximity GOOGLE PlacesURL
//     url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=hotel&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:4000@47.6918452,-122.2226413&key=AIzaSyCSYp0PROxz6148kSPkdUSJZj61kwy3Quo`,
    
//     method: 'GET'
//   }).then(function(res) {
//     //   for(var i = 0; i < res.events.length; i++){
//         // console.log(typeof(res.events[i].category_id));
//         console.log(res);
//     //    console.log(res.events[i].start.ti
//   });

}

$('#searchBtn').on('click', searchFunction);
