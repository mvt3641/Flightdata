$(document).ready(function() {


////////////click event to seach by year///////////
$("#search_all").on('click', function(e) {
  e.preventDefault();
  // var monthctns = $("#month_srch").val().trim();
  // // var EntireRec = $('#search_all');
  // // var day_srch =$('#day_srch').val().trim();
  // console.log("month: "+monthctns);
  // console.log(EntireRec);
  // console.log(day_srch);
  $.ajax({
    method: 'POST',
    url: '/flightdata',
    data: {
      // month: monthctns
    },
    // contentType: 'application/json',
    // dataType: 'json'
  })
  .then(function(res) {
    console.log(res);
    dtgraph(res);
    pieChartgraph(res);
    graphChart(res)
    Ao(res)
  }).then(function() {
    $('#monthctn').empty();

});
});

/////////////Seach by month//////////////
$('#monthsrch').on('click', function(e) {
    e.preventDefault();
    var monthctns = $("#month_srch").val().trim();
    console.log(monthctns);
    // console.log(EntireRec);
    // console.log(day_srch);
    $.ajax({
      method: 'POST',
      url: '/flightdata',
      data: {
        month: monthctns
      },
    }).then(function(res) {
      console.log(res)
      dtgraph(res);
      pieChartgraph(res);
      graphChart(res);
      Ao(res)
    }).then(function() {
      $('#monthctn').empty();
    })
})
});
/////Build route to search by day//////




//Graphing chart for winds speed
function graphChart(res) {
  var tnArr = [];
  var grdArr = [];
  var timeArr = [];
  var windArr = [];
  for (var i = 0; i < 48; i++) {
    //console.log(res[i].GROUND_);
    //console.log(res[i].TIME);
    var winds = res[i].winds_Aloft;
    var date = res[i].date;
    var grd = res[i].ground_Winds;
    var time = res[i].time + " " + date;
    var tension = res[i].tension;
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
    var ctx = document.getElementById('windChart').getContext('2d');
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
            borderColor: "skyblue",
            data: windArr,
          }
        ]
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
function pieChartgraph(res) {
  var Aloftcnt = 0;
  var mooredcnt = 0;
  var combArr = [];
  for (var i = 0; i < res.length; i++) {
    if (res[i].flight_ST < 1) {
      mooredcnt++;
    }
    if (res[i].flight_ST > 0) {
      Aloftcnt++;
    }
  };
  combArr.push(mooredcnt, Aloftcnt);

  new Chart(document.getElementById("barChart"), {
    type: 'pie',
    data: {
      labels: ["Moored", "Aloft"],
      datasets: [{
        label: "Hours per month",
        backgroundColor: ["#3e95cd", "#8e5ea2"],
        data: combArr
      }]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: "Flight time breakdown by month"
      }
    }
  });



};

function dtgraph(res) {
  var wxCount = 0;
  var smCount = 0;
  var umCount = 0;
  var bdCount = 0;
  var Aloft = 0;
  var combArr = [];
  for (var i = 0; i < res.length; i++) {
    switch (res[i].reason) {
      case 'WX':
        wxCount++;
        break;
      case 'SM':
        smCount++;
        break;
      case 'UM':
        umCount++;
        break;
      case 'BD':
        bdCount++;
      default:
        Aloft++;

    }
  }
  combArr.push(wxCount, smCount, umCount, bdCount, Aloft);
  console.log(combArr);

  new Chart(document.getElementById("RadarChart"), {
    type: 'radar',
    data: {
      labels: ["Weather", "Scheduled Maintence", "Unscheduled Maintence", "Battle Damage", 'Aloft'],
      datasets: [{
        label: "Recored flight Status or Reason Moored",
        fill: true,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: combArr
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Flight Status'
      }
    }
  });


};

function Ao(res){
  var fmc =0;
  var nmc =0;
  var pmc =0;
  var totalhr =0;
  for (var i= 0;i< res.length ;i++){
    totalhr++
    switch (res[i].system_ST) {
    case 'FMC':
        fmc++;
        break;
    case 'NMC':
        nmc++;
        break;
    case 'PMC':
          pmc++;
          break;
  }
}
console.log("FMC: "+fmc+" NMC: "+nmc+" PMC: "+pmc);
console.log("Total hours: "+totalhr);
 $("#stats").text("Total hours: "+totalhr "\n").text("FMC: "+fmc+" NMC: "+nmc+" PMC: "+pmc)
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
