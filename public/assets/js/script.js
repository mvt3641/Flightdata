$(document).ready(function(){



  $.ajax({
    method:'GET',
    url:'/api/flightdata'
  }).then(function(res){
    console.log(res)
    //BarChartgraph(res);
    test(res);
     graphChart(res);
  });




  $.ajax({
    method:'GET',
    url:'/api/flightdata/chart'
  }).then(function(res){
  //graphChart(res);
  BarChartgraph(res);
//  createdatetable(res);
//console.log(res);
  });
});




function graphChart(res){
  var tnArr  =[];
  var grdArr =[];
  var timeArr =[];
  var windArr =[];
 for (var i=0;i<48;i++){
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

// Moved chart out of scope
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for the dataset
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


// function createdatetable(res){
//   var datebegin= $("<select multiple id='datebegin'>");
//   // var datend= $("<select multiple id='datend'>");
//   for (var i=0;i<40;i++){
//     var timeselec= res[i].TIME+':00 '+res[i].Date;
//     var op =$('<option>').attr("value",timeselec);
//     // console.log(timeselec);
//     op.append(timeselec);
//     datebegin.append(op);
//     // datend.append(op);
//   }
//
//   $('#createdate').append(datebegin);
//   // $('#createdate').append(datend);
//   // console.log(timeselec);
// };
//
//
// $('#datesearch').on('click',function(){
//   var range = $('#datetb').find(':selected').val();
//   console.log(range);
//   alert('test');
// })
//



// function BarChartgraph(res){
//   var Aloftcnt =0;
//   var mooredcnt = 0;
//   var combArr =[];
//   for (var i=0;i<744;i++){
//     if(res[i].flight_ST < 1){
//     mooredcnt++;
//    }
//     if (res[i].flight_ST > 0){
//       Aloftcnt++;
//     }
//   }
//   console.log(mooredcnt);
//   console.log(Aloftcnt);
//   combArr.push(mooredcnt,Aloftcnt);
//   console.log(combArr);
// };

//Chart for graphing hours aloft
function test(res){
  var Aloftcnt =0;
  var mooredcnt = 0;
  var combArr =[];
  for (var i=0;i<res.length;i++){
    if(res[i].flight_ST < 1){
    mooredcnt++;
   }
    if (res[i].flight_ST > 0){
      Aloftcnt++;
    }
  };
    combArr.push(mooredcnt,Aloftcnt);

  new Chart(document.getElementById("barChart"), {
      type: 'pie',
      data: {
        labels: ["Moored", "Aloft"],
        datasets: [
          {
            label: "Hours per month",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: combArr
          }
        ]
      },
      options: {
        legend: { display: true },
        title: {
          display: true,
          text: "Flight time breakdown by month"
        }
      }
  });



};

function dtgraph(res){
  var wxCount =0;
  var smCount =0;
  var umCount =0;
  var bdCount =0;

};


// function timeSearch(){
//   var searchArr = [];
//   // var data = $('#datetb option[value='+objValue+']').attr('selected',true);
//   $("#datetb").change(function(){
//     console.log($(this).find(":selected").val());
//   })
//   // console.log(data);
// };

// var barC = document.getElementById('barChart');
// // // .getContext('2d');
// // var myBarChart = new Chart(ctx, {
// var myBarChart = new Chart(barC ,{
//    type: 'line',
//    data: {
//    labels: "days",
//    datasets: [
//      {
//    label: "Moored",
//    backgroundColor: 'rgb(47,160,110)',
//    borderColor: 'rgb(70,90,172)',
//    data: combArr,
//    }
//    // {
//    //   label: "Winds Aloft",
//    //   backgroundColor: "#999",
//    //   borderColor:"skyblue",
//    //   data: mooredcnt
//    // }
//  ]
//    },
//    options: {}
// });


  // timeSearch();
