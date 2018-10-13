var Nightmare = require("nightmare");

var nightmare = new Nightmare({ show: true,typeInterval: 200
 });

 function random(max) {
 return Math.floor(Math.random() * Math.floor(max));
}
var names = ['Woody','Leo','Gunner','Nick','Crawley','Sergi'];

function randomnames(array){
   let randName= Math.floor(Math.random() * array.length -1)
  return array[randName];
}

randomnames(names);


nightmare
  .goto("http://localhost:8080")
  .click("#rosterpage")
  .click("#sitepage")
  .type("#sitename","Site"+random(20))
  .type("#hubassign","RCSW")
  .evaluate(function(selector, value) {
   jQuery(selector).val(value);
}, '#system', '28M')
   .type("#unit", 'Canadian Army')
   .click("#inputform")
   .click('#testpage')
   .type('#month_srch', random(11))
   .wait(6000)
   .click('#monthsrch')
   .click('#rosterpage')
   .type('#firstname', randomnames(names))
   .type('#lastname' ,'Thompson')
   .evaluate(function(selector, value) {
    jQuery(selector).val(value);
 }, '#position', 'Hub Lead')
   .type('#employer', 'TaSM')
   .click('#inputform')
  .then(function(res) {
    console.log("Confirmed");
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
