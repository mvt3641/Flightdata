
$(document).ready(function(){
  $('#other').hide()
$('#position').change(function(){
  var val = $('#position').val();
   if(val == "Other"){
    $('#other').show();
  }
})
});






$('#inputform').on('click',function(e){
e.preventDefault();

var firstN =$('#firstname').val();
var lastN = $('#lastname').val().trim();
var positionsel = $('#position').val();
var positionO = $('#Pother').val().trim();
var location = $('#location').val().trim();
var employer = $('#employer').val().trim();
document.getElementById("userinput").reset();


// console.log(firstN);
// console.log(lastN);
// if($('#position').val() === "Other"){
// console.log(positionO)
// }else{
//   console.log(positionsel)
// };
// console.log(location);
// console.log(employer);

$.ajax({
      type: 'POST',
      url: '/api/pax',
      data: JSON.stringify({ first: firstN, last: lastN, position: positionsel+':'+positionO, location: location, employer: employer}),
      contentType: 'application/json',
      dataType: 'json'
  }).then(function(res) {
    // for (var i=0;i<res.length;i++){
    //   console.log(res[i]);
      var Newwin = $('<div class="addednewpax">');
      var Newpax = res.pop();
     Newwin.text('Name: '+Newpax.first+'___'+Newpax.last+'********* Position: '+Newpax.position+'************Location: '+Newpax.location+'************ Employer: '+Newpax.employer);
     console.log(Newpax);
     // console.log(Newpax.first);

    $('#return').prepend(Newwin);

    // }

  });
});


$("#showRoster").on("click",function(){






  $.getJSON({url:'/api/pax'},function(res){
    for (var i=0;i<res.length;i++){
        var RostWin = $('<div>');
        var dividier = $('<hr>');
        var rosterlist = "Name: "+res[i].last+","+res[i].first+"  Position: "+res[i].position+" Location: "+res[i].location+"  Employer: "+res[i].employer;
        RostWin.text(rosterlist);
        $("#return").append(RostWin).append(dividier);

      console.log(res[i]);

 }
})

// .then(function(res){
//   // for (var i=0;i<res.length;i++){
//   //   console.log(res[i]);
//   }
// })
});
