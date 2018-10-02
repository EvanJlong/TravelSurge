

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
$.ajax({
    url: `https://www.eventbriteapi.com/v3/categories/?token=LBXLGGGLHCVTA6MUI2PB` ,
    // Input the method type here (Hint: 'GET', 'POST', 'PUT', 'DELETE')
    method: 'GET'
  }).then(function(response) {
      console.log(response.categories[0])
    
  });