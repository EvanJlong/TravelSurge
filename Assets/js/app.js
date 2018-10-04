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
      
    console.log(response)
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
    for (let i = 0; i < categoryArray.length; i++){
        $(".dropdown-menu").append(`<a class="dropdown-item" id="${categoryArray[i].id}">${categoryArray[i].name}</a>`)
        $('#inputState').append(new Option(`${categoryArray[i].name}`,`${categoryArray[i].id}`));
      } 

    //   <a class="dropdown-item" href="#">${categoryArray[i].name}</a>
  });
//////////////category array has now been populated and appended to the dropdown//////////////
    // taking the value entered into the city field and storing it//


//   console.log(categoryArray);

//   for (let i = 0; i < categoryArray.length; i++){
//     $(".dropdown-menu").append(`<a class = "dropdown-item">${categoryArray[i].name}</a>`)
//   } 


/////////////category search working

//   $.ajax({
//       url: `https://www.eventbriteapi.com/v3/categories/${catID}/?token=${key}` ,
//       // Input the method type here (Hint: 'GET', 'POST', 'PUT', 'DELETE')
//       method: 'GET'
//     }).then(function(response) {
        
//       console.log(response)

//       });

  


//CATEGORIES// //CATEGORIES// //CATEGORIES// //CATEGORIES// 
let eventArray = [];
const city = $('#cityForm').val();
// taking the value entered into the city field and storing it//
const catID = $('#inputState').val();



// let dateinput = prompt("what date?");
// let date = ("start_date.range_start=2018-10-05")

const searchFunction = function(){
$.ajax({
    url: `https://www.eventbriteapi.com/v3/events/search/?location.address=${city}&expand=organizer,venue&token=${key}`,
    // Input the method type here (Hint: 'GET', 'POST', 'PUT', 'DELETE')
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
      $('#id').append(`<div class="class"></div>`)
      console.log(city);
    console.log(catID);
  });
}
 
//   table.setData("`https://www.eventbriteapi.com/v3/events/search/?location.address=Dallas&expand=organizer,venue&token=LBXLGGGLHCVTA6MUI2PB`,", {key1:"name"}, "GET");

function dropdownFunction() {
    var x = document.getElementById("mySelect").value;

}


$.ajax({
    // url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurants&keyword=cruise&key=AIzaSyC3dwU3xZnvNdj1ZCr4r98XszdB3uu3N1o`,

    // url: ` https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyC3dwU3xZnvNdj1ZCr4r98XszdB3uu3N1o`,

    // url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters`

    url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=hotel&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:4000@47.6918452,-122.2226413&key=AIzaSyCSYp0PROxz6148kSPkdUSJZj61kwy3Quo`,
    
    method: 'GET'
  }).then(function(res) {
    //   for(var i = 0; i < res.events.length; i++){
        // console.log(typeof(res.events[i].category_id));
        console.log(res);
    //    console.log(res.events[i].start.ti
  });




$('#searchBtn').on('click', searchFunction);


