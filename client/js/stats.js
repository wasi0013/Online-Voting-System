
Template.stats.rendered = function(evt,template) {
    if(!this._rendered) {
      this._rendered = true;
      var data = {
  labels : ["Demo User 1","Demo User 2","Demo User 3","Demo User 4","Demo User 5","Demo User 6","Demo User 7"],
  datasets : [
    {
      fillColor : "rgba(151,187,205,1",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      data : [65,59,90,81,56,55,40]
    },
    
  ]
}



 
$( document ).ready(function() {
    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx).Bar(data,null);
  });
     
      
    }
}

Template.quickstats.rendered = function(evt,template) {
    if(!this._rendered) {
      this._rendered = true;
      quickvoterid=[]
      votecounter=[]

      quickvote.find({},{username:true,_id:false,}).forEach(function(data){
        quickvoterid.push(data.username)
        votecounter.push(data.votecount)
      })
      var data = {
  labels : quickvoterid,
  datasets : [
    { 
            label:"Vote Count",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data : votecounter
    },
  
  ]

}
$( document ).ready(function() {
    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(data,{responsive:true,scaleShowGridLines : true,});
  });
     
}}      



Template.nationalstats.rendered = function(evt,template) {
    if(!this._rendered) {
      this._rendered = true;
      partynames=[]
      votecounter=[]

      party.find({},{partyname:true,_id:false,}).forEach(function(data){
        partynames.push(data.partyname)
        votecounter.push(data.votecount)
      })
      var data = {
  labels : partynames,
  datasets : [
    { 
            label:"Vote Count",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data : votecounter
    },
  
  ]

}
$( document ).ready(function() {
    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("party-chart").getContext("2d");
    var myNewChart = new Chart(ctx).Line(data,{responsive:true,scaleShowGridLines : true,});
  });
     
}}      