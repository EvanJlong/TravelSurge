const key = 'LBXLGGGLHCVTA6MUI2PB';
//COUNTRIES// //COUNTRIES// //COUNTRIES// //COUNTRIES// //COUNTRIES// //COUNTRIES// //COUNTRIES//
// $.ajax({
//     url: `https://www.eventbriteapi.com/v3/system/countries/?token=LBXLGGGLHCVTA6MUI2PB` ,
//     // Input the method type here (Hint: 'GET', 'POST', 'PUT', 'DELETE')
//     method: 'GET'
//   }).then(function(response) {
//       console.log(response)
//     console.log(response.countries[232]);
//     // console.log(response.countries[0]);

//     // $("#stock-view").text(JSON.stringify(response));
    
//   });

//CATEGORIES//  //CATEGORIES// //CATEGORIES// //CATEGORIES// //CATEGORIES// //CATEGORIES//
let city = prompt("type in city punk");
$.ajax({
    url: `https://www.eventbriteapi.com/v3/events/search/?location.address=${city}&expand=organizer,venue&token=${key}`,
    // Input the method type here (Hint: 'GET', 'POST', 'PUT', 'DELETE')
    method: 'GET'
  }).then(function(res) {
      for(var i = 0; i < 10; i++){
          console.log(res);
    //    console.log(res.events[i].start.timezone);
      }
     
    
  });
