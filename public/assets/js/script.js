$(document).ready(function(){

  $.ajax({
    method:'GET',
    url:'/api/flightdata'
  }).then(function(res){
    console.log(res)
    graphChart(res);
  });




  $.ajax({
    method:'GET',
    url:'/api/flightdata/chart'
  }).then(function(res){
  graphChart(res);
  createdatetable(res);
//console.log(res);
  });
});




function graphChart(res){
  var tnArr  =[];
  var grdArr =[];
  var timeArr =[];
  var windArr =[];
 for (var i=50;i<100;i++){
   //console.log(res[i].GROUND_);
   //console.log(res[i].TIME);
   var winds =res[i].winds_Aloft;
   var date =res[i].date;
   var grd = res[i].ground_Winds;
   var time = res[i].time+" "+date;
   var tension =res[i].tension;
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
backgroundColor: 'rgb(47,160,110)',
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


function createdatetable(res){
  var datebegin= $("<select multiple id='datebegin'>");
  // var datend= $("<select multiple id='datend'>");
  for (var i=0;i<40;i++){
    var timeselec= res[i].TIME+':00 '+res[i].Date;
    var op =$('<option>').attr("value",timeselec);
    // console.log(timeselec);
    op.append(timeselec);
    datebegin.append(op);
    // datend.append(op);
  }

  $('#createdate').append(datebegin);
  // $('#createdate').append(datend);
  // console.log(timeselec);
};


$('#datesearch').on('click',function(){
  var range = $('#datetb').find(':selected').val();
  console.log(range);
  alert('test');
})

// function timeSearch(){
//   var searchArr = [];
//   // var data = $('#datetb option[value='+objValue+']').attr('selected',true);
//   $("#datetb").change(function(){
//     console.log($(this).find(":selected").val());
//   })
//   // console.log(data);
// };



  // timeSearch();
