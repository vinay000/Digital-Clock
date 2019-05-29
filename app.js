console.log(new Date());


function clock()
{
    var fulldate=new Date();

    var hours=fulldate.getHours();
    var minutes=fulldate.getMinutes();
    var seconds=fulldate.getSeconds();

    if (hours<10) 
    {
        hours="0"+ hours;   
    }
    else if (minutes<10) 
    {

        minutes="0" + minutes;
        
    }
    else if (seconds<10)
    {
        seconds="0"+seconds;    
    }
     if (hours>12) 
    {
        hours=hours-12;
        hours="0"+ hours;  
        
    }

    document.getElementById("hour").innerHTML=hours+":";

    document.getElementById("minute").innerHTML=minutes+":";

    document.getElementById("second").innerHTML=seconds;

}
 


setInterval(clock,1000);
