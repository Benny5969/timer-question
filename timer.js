let seconds =0;                 //initialising vars for displaying time
let minutes =0;
let hours =0;

let dissec =0;                  //initialising vars for displaying time, also to make it appear with 0 on left when it's one digit(for uniformity)
let dismin =0;
let dishr =0;

let interval = null;            //var for counting time

let status = "stopped";         //initial condition for start button
let status2 = "resumed";        //initial condition for pause button

function timer(){               //timer function
    seconds++;

    if(seconds/60 == 1){        //secs change to 0, mins by 1 on reaching 60 secs
        seconds=0;
        minutes++;
        if(minutes/60 == 1){    //mins change to 0, hrs by 1 on reaching 60 mins   
            minutes=0;
            hours++;
        }
    }

    if(seconds<10){
        dissec= "0" + seconds.toString();             //making sure 2 digits (eg 09) when sec<10, tostring func to stitch diff variables
    }
    else dissec =  seconds;

    if(minutes<10){
        dismin= "0" + minutes.toString();           //making sure 2 digits (eg 09) when min<10, tostring func to stitch diff variables            
    }
    else dismin =  minutes;

    if(hours<10){
        dishr= "0" + hours.toString();              //making sure 2 digits (eg 09) when hrs<10, tostring func to stitch diff variables
    }
    else dishr =  hours;
 
    document.getElementById("display").innerHTML = dishr + ":" + dismin + ":" + dissec;         //changing the value of id display (showing time)
}


function startstop(){                               //fn called when we click start button

    if(status === "stopped"){                       //if it is at stopped state initially, on click;
        seconds =0;                                 //make it start from 00:00:00 since we r starting after a stop
        minutes =0;
        hours =0;
        interval = window.setInterval(timer,1000);                   //each time sets 1000 micro seconds, timer fn is called, leading to display of time change
        document.getElementById("startstop").innerHTML = "Stop";     //change text from start to stop, since the time is running now
        status = "started";                                          //changing status for smooth running of the code
    }
    else{                                                            //if status is started, (timer running)on click:
        window.clearInterval(interval);                              //stops timer
        document.getElementById("startstop").innerHTML="Start";      //change button text from stop to start for next click
        status = "stopped";                                          //changing status for smooth running of the code                   
        status2 = "resumed";                                         //one shouldnot be able to resume once the timer is stopped,changing status for smooth running of the code
        document.getElementById("pauseresume").innerHTML = "Pause";  //one shouldnot be able to resume once the timer is stopped
    }
}


function pauseresume(){                                             //resume button will respond only if it is stopped using pause button + ;
    if(status === "started"){                                       //pause button will respond only if the timer is in running state
        if(status2 === "paused"){
            interval = window.setInterval(timer,1000);                    //timer is restored once we press resume
            document.getElementById("pauseresume").innerHTML = "Pause";   // changing button text to pause
            status2 = "resumed";                                          //changing status for smooth running of the code
        }
        else{
            window.clearInterval(interval);                               //stopping timer when paused
            document.getElementById("pauseresume").innerHTML="Resume";    //changing button text to resume
            status2 = "paused";                                           //changing status for smooth running of the code
        }
    }
}


