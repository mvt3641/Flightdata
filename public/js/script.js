$(document).ready(function(){
  $.ajax({
    method:'GET',
    url:'api/flightdata'
  }).then(function(res){
console.log(res);
  });
});




















// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
// // The type of chart we want to create
// type: 'line',
//
// // The data for our dataset
// data: {
// labels: timeArr,
// datasets: [{
// label: "5 day Ground Wind Forecast",
// //backgroundColor: 'rgb(255, 99, 132)',
// borderColor: 'rgb(70,90,172)',
// data: WindArr,
// }]
// },
//
// // Configuration options go here
// options: {}
// });
