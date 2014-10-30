
Template.stats.rendered = function(evt,template) {
    if(!this._rendered) {
      this._rendered = true;
      var data = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      data : [65,59,90,81,56,55,40]
    },
    {
      fillColor : "rgba(151,187,205,0.5)",
      strokeColor : "rgba(151,187,205,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      data : [28,48,40,19,96,27,100]
    }
  ]
}

 
$( document ).ready(function() {
    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(data,null);
  });
     
      
    }
}