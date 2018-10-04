// api key
const key = 'LBXLGGGLHCVTA6MUI2PB';

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
    // for (let i = 0; i < categoryArray.length; i++){
        // $(".dropdown-menu").append(`<a class="dropdown-item" id="${categoryArray[i].id}">${categoryArray[i].name}</a>`)
        // $('#inputState').append(new Option(`${categoryArray[i].name}`,`${categoryArray[i].id}`));
    //   } 

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
const catID = $('#catForm').val();

console.log(city);

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
  });
}
 
//   table.setData("`https://www.eventbriteapi.com/v3/events/search/?location.address=Dallas&expand=organizer,venue&token=LBXLGGGLHCVTA6MUI2PB`,", {key1:"name"}, "GET");



function dropdownFunction() {
    var x = document.getElementById("mySelect").value;

}

$('#searchBtn').on('click', searchFunction);