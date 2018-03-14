$(document).ready(function(){
  $.ajax({
    method:'GET',
    url:'/api/flightdata/chart'
  }).then(function(res){
  graphChart(res);
//console.log(res);
  });
});



function graphChart(res){
  var tnArr  =[];
  var grdArr =[];
  var timeArr =[];
  var windArr =[];
 for (var i=72;i<100;i++){
   //console.log(res[i].GROUND_);
   //console.log(res[i].TIME);
   var winds =res[i].Winds_Aloft;
   var date =res[i].Date;
   var grd = res[i].GROUND_;
   var time = res[i].TIME+':00 '+date;
   var tension =res[i].TENSION;
   // var grdArr =[];
   // var timeArr =[];
   grdArr.push(grd);
   timeArr.push(time);
   windArr.push(winds);
   tnArr.push(tension);
  // console.log(grdArr);
  // console.log(timeArr);
  //console.log(date);


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
labels: timeArr,
datasets: [{
label: "Ground Wind Chart",
backgroundColor: 'rgb(255, 99, 132)',
borderColor: 'rgb(70,90,172)',
data: grdArr,
},
{
  label: "Winds Aloft",
  backgroundColor: "#999",
  borderColor:"skyblue",
  data: windArr,
}]
},

// Configuration options go here
options: {}
});

  }
};
