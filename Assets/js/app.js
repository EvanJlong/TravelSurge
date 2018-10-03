const key = 'LBXLGGGLHCVTA6MUI2PB';

//WORKING CATEGORY ARRAY//
// categoryArray = [];
// $.ajax({
//     url: `https://www.eventbriteapi.com/v3/categories/?token=${key}` ,
//     // Input the method type here (Hint: 'GET', 'POST', 'PUT', 'DELETE')
//     method: 'GET'
//   }).then(function(response) {
      
//     console.log(response)
//     for (let i=0; i < response.categories.length; i++){
//         let categories = {
//             name: "",
//             id : "",
//         };
//         categories.name = response.categories[i].name;
//         categories.id = response.categories[i].id;
//         // console.log(categories);
//         categoryArray.push(categories);
//     }
//   });

//   console.log(categoryArray);


/////////////category search working

//   $.ajax({
//       url: `https://www.eventbriteapi.com/v3/categories/${catID}/?token=${key}` ,
//       // Input the method type here (Hint: 'GET', 'POST', 'PUT', 'DELETE')
//       method: 'GET'
//     }).then(function(response) {
        
//       console.log(response)

//       });

  


//CATEGORIES// //CATEGORIES// //CATEGORIES// //CATEGORIES// 
let city = prompt("type in city");
let catID = prompt("catID?");
// let dateinput = prompt("what date?");
// let date = ("start_date.range_start=2018-10-05")
let eventArray = [];
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
  });
 


