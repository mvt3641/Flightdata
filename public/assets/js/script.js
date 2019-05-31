$(document).ready(function() {



  $('#saveReport').on('click', function(e) {
    e.preventDefault();
    var Site1Status= $("#Site1Status").val().trim();
    var Site2Status= $("#Site2Status").val().trim();
    var Site3Status= $("#Site3Status").val().trim();
    var Site4Status= $("#Site4Status").val().trim();
    var Site5Status= $("#Site5Status").val().trim();
    var Site6Status= $("#Site6Status").val().trim();
    // Notes
    var S1Notes = $("#S1Notes").val().trim();
    var S2Notes = $("#S2Notes").val().trim();
    var S3Notes = $("#S3Notes").val().trim();
    var S4Notes = $("#S4Notes").val().trim();
    var S5Notes = $("#S5Notes").val().trim();
    var S6Notes = $("#S6Notes").val().trim();


    // Object
    var StatusReport ={
      Site1Status:Site1Status,
      Site1Notes:S1Notes,
      Site2Status:Site2Status,
      Site2Notes:S2Notes,
      Site3Status:Site3Status,
      Site3Notes:S3Notes,
      Site4Status:Site4Status,
      Site4Notes:S4Notes,
      Site5Status:Site5Status,
      Site5Notes:S5Notes,
      Site6Status:Site6Status,
      Site6Notes:S6Notes
    }
    console.log(StatusReport);


    $.ajax({
      method: 'POST',
      url: '/statusdata',
      data: JSON.stringify(StatusReport),
      contentType: 'application/json',
      dataType: 'json'

    }).then(function(res) {
      console.log(res);
      //  dtgraph(res);
      // pieChartgraph(res);
      // graphChart(res);
      //  Ao(res);
      // sortaloft(res)
    }).then(function() {
      $('#StatusForm').empty();
    });

  });

});
