$(document).ready(function(){
  $('#other').hide()
$('#system').change(function(){
  var val = $('#system').val();
   if(val == "Other"){
    $('#other').show();
  }
})
});



// function submitform() {
//   var f = document.getElementsByTagName('siteinput')[0];
//   if(f.checkValidity()) {
//     f.submit();
//   } else {
//     alert(document.getElementById('example').validationMessage);
//   }
// };

 $('#inputform').on('click',function(e){

  e.preventDefault();
  var siteName = $('#sitename').val().trim();
  var hubName = $('#hubassign').val().trim();
  var sysTem = $('#system').val().trim();
  var systemO = $('#Sother').val().trim();
  var supportUnit = $('#unit').val().trim();
  document.getElementById("siteinput").reset();




  $.ajax({
        type: 'POST',
        url: '/api/site',
        data: JSON.stringify({ sitename: siteName, hub: hubName, system: sysTem+':'+systemO, supportingunit: supportUnit}),
        contentType: 'application/json',
        dataType: 'json'
    }).then(function(res){
      console.log(res);
    })
});
