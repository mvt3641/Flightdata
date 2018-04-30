$(document).ready(function() {

  $('#other').hide()
  $('#position').change(function() {
    var val = $('#position').val();
    if (val == "Other") {
      $('#other').show();
    }
  })
  populatesite();

});


////Grab locations from db to populate dropdown/////
function populatesite() {
  $.getJSON({
    url: '/api/site'
  }, function(res) {
    for (var i = 0; i < res.length; i++) {
      var s = $('<option>').text(res[i].sitename);
      // var site = res[i].sitename;
      s.attr("site-name", res[i].sitename);
      s.attr("Hub-Assignment", res[i].hub);

      $('#location').append(s);
    }
  })

};







$('#inputform').on('click', function(e) {
  e.preventDefault();

  var firstN = $('#firstname').val();
  var lastN = $('#lastname').val().trim();
  var positionsel = $('#position').val();
  var positionO = $('#Pother').val().trim();
  // var location = $('#location').val().trim();
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
    data: JSON.stringify({
      firstname: firstN,
      lastname: lastN,
      position: positionsel + positionO,
      employer: employer
    }),
    contentType: 'application/json',
    dataType: 'json'
    }).then(function(res){
      console.log(res);
    })
  //  })
  // .then(function(res) {
  //   // for (var i=0;i<res.length;i++){
  //   //   console.log(res[i]);
  //   var Newwin = $('<div class="addednewpax">');
  //   var Newpax = res.pop();
  //   Newwin.text('Name: ' + Newpax.first + '___' + Newpax.last + '********* Position: ' + Newpax.position + '************Location: ' + Newpax.location + '************ Employer: ' + Newpax.employer);
  //   console.log(Newpax);
  //   // console.log(Newpax.first);
  //
  //   $('#return').prepend(Newwin);
  //
  //   // }
  //
  // });
});


$("#showRoster").on("click", function() {






  $.getJSON({
    url: '/api/pax'
  }, function(res) {
    for (var i = 0; i < res.length; i++) {
      var RostWin = $('<div>');
      var dividier = $('<hr>');
      var rosterlist = "Name: " + res[i].last + "," + res[i].first + "  Position: " + res[i].position + " Location: " + res[i].location + "  Employer: " + res[i].employer;
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
