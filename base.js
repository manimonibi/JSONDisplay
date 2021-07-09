//initialise list for json
var userArray = []

var options = {
  method: 'GET',
  data: {
    page: 1, 
    pagelimit: 2
  },
  success: function(res) {
    // var totalrecord = data.success.totalrecord;
    //add parsed json to list
    console.log(JSON.parse(res.response))
    userArray = JSON.parse(res.response)
    createTable(userArray)
  },
  error: function(res) {
  }
}
// To paginate, add page=x
// https://reqres.in/api/users?page=2
ajax("https://reqres.in/api/users", options)



//function to add the required data to a table to then pass to the page
function createTable(json){
  var table = document.getElementById('user-results')

  for (var i = 0; i < json.data.length; i++){
    var row = `<tr>
            <td>${json.data[i].first_name}</td>
            <td>${json.data[i].last_name}</td>
            <td>${json.data[i].email}</td>
          </tr>`
    table.innerHTML += row


  }
}

var page = 1;

$(".prev-btn").on("click", function(){
  if(page > 1){
    page--;
    var table = document.getElementById('user-results')
    table.innerHTML = null
    ajax("https://reqres.in/api/users?page="+ page, options)
  }
  console.log("Prev Page: " + page)
});

$(".next-btn").on("click", function(){
if(page < 2){
  page++;
  var table = document.getElementById('user-results')
  table.innerHTML = null
  ajax("https://reqres.in/api/users?page="+ page, options)
}
console.log("Next Page: " + page)
});
