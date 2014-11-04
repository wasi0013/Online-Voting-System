
var current="The vote is over";        //—>enter what you want the script to display when the target date and time are reached, limit to 20 characters
var year=2015;        //—>Enter the count down target date YEAR
var month=10;          //—>Enter the count down target date MONTH
var day=12;           //—>Enter the count down target date DAY
var hour=21;          //—>Enter the count down target date HOUR (24 hour clock)
var minute=30;        //—>Enter the count down target date MINUTE
var tz=+6;            //—>Offset for your timezone in hours from UTC (see http://wwp.greenwichmeantime.com/index.htm to find the timezone offset for your location)
var timer=0;

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

function countdown(yr,m,d,hr,min){
    theyear=yr;themonth=m;theday=d;thehour=hr;theminute=min;
    var today=new Date();
    var todayy=today.getYear();
    if (todayy < 1000) {
    todayy+=1900; }

    var todaym=today.getMonth();
    var todayd=today.getDate();
    var todayh=today.getHours();
    var todaymin=today.getMinutes();
    var todaysec=today.getSeconds();
    var todaystring1=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec;
    var todaystring=Date.parse(todaystring1)+(tz*1000*60*60);
    var futurestring1=(montharray[m-1]+" "+d+", "+yr+" "+hr+":"+min);
    var futurestring=Date.parse(futurestring1)-(today.getTimezoneOffset()*(1000*60));
    var dd=futurestring-todaystring;
    var dday=Math.floor(dd/(60*60*1000*24)*1);
    var dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1);
    var dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
    var dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
    
    if(dday<=0&&dhour<=0&&dmin<=0&&dsec<=0){
        
        document.getElementById('count2').innerHTML=current;
        document.getElementById('count2').style.display="inline";
        document.getElementById('count2').style.width="390px";
        document.getElementById('dday').style.display="none";
        document.getElementById('dhour').style.display="none";
        document.getElementById('dmin').style.display="none";
        document.getElementById('dsec').style.display="none";
        document.getElementById('days').style.display="none";
        document.getElementById('hours').style.display="none";
        document.getElementById('minutes').style.display="none";
        document.getElementById('seconds').style.display="none";
        
        
        Meteor.clearInterval(timer)
        return;
    }
    else {
        try{
        document.getElementById('count2').style.display="none";
        console.log("executing")
        document.getElementById('dday').innerHTML=dday;
        document.getElementById('dhour').innerHTML=dhour;
        document.getElementById('dmin').innerHTML=dmin;
        document.getElementById('dsec').innerHTML=dsec;
        clearInterval(timer)
        }
        catch(err){
            console.log("timer clear"+err)
            clearInterval(timer)
            return;
        }
        timer=setInterval(function(){countdown(theyear,themonth,theday,thehour,theminute)},1000);
        return;

        
    }
}

Template.quickVote.rendered = function(evt,template) {
    if(!this._rendered) {
      this._rendered = true;
      //todo get data from database and render the timer
      
      

      console.log("rendering ")
      countdown(year,month,day,hour,minute)
      
    }
}


Template.nationalVote.rendered = function(evt,template) {
    if(!this._rendered) {
      this._rendered = true;
      //todo get data from database and render the timer
      
      


      countdown(year,month,day,hour,minute)
      
    }
}
