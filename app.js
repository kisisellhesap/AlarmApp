

let alarmBtn = document.querySelector(".alarmBtn");
let alarm = document.querySelector(".alarm");
let nowTime = document.querySelector(".nowTime");
let alarmAudio = document.querySelector(".alarmAudio");

let cancelBtn = document.querySelector(".cancelBtn");
let muteBtn = document.querySelector(".muteBtn");
let alarmInfo = document.querySelector(".alarmInfo");

alarmBtn.classList.add("passive");
muteBtn.classList.add("passive");
cancelBtn.classList.add("passive");

alarm.addEventListener("change",function(){

    alarmBtn.classList.add("active");
    alarmBtn.classList.remove("passive");

    
});


alarmBtn.addEventListener("click",function(){

    cancelBtn.classList.add("active");
    cancelBtn.classList.remove("passive");
    alarmBtn.classList.add("passive");
    alarmBtn.classList.remove("active");
    alarm.classList.add("passive");


    alarmInfo.innerHTML="<h2>Alarm Set </h2>";




            let otherclock = new Date();
            let timeclock = new Date(alarm.value);

            if(timeclock > otherclock){
                let timeOut= timeclock.getTime()- otherclock.getTime();

                let timeSet = setTimeout(() => {

                    alarmAudio.innerHTML=`
                    <audio autoplay loop>
                    <source src="videoplayback.mp4" type="audio/mp4">
                </audio>
                    `;
    
                    muteBtn.classList.add("active");
                    muteBtn.classList.remove("passive");
                    cancelBtn.classList.remove("active");
                    cancelBtn.classList.add("passive");
    
                    alarmInfo.innerHTML="<h2>Your Alarm İs Ringing </h2>";




                },timeOut);


                muteBtn.addEventListener("click",function(){
                    alarmAudio.innerHTML="";
                    muteBtn.classList.add("passive");
                    muteBtn.classList.remove("active");
                    alarm.classList.add("active");
                    alarm.classList.remove("passive");
                    alarm.value="";
                    alarmInfo.innerHTML="<h2> Alarm Muted </h2>";
                    
setTimeout(() => {
    alarmInfo.innerHTML="";
}, 2500);

  
                });
    
                cancelBtn.addEventListener("click",function(e){
                    clearTimeout (timeSet);
                    cancelBtn.classList.remove("active");
                    cancelBtn.classList.add("passive");
       
                    alarm.value="";
                    alarm.classList.remove("passive");
                    alarm.classList.add("active");
    
                    alarmInfo.innerHTML="<h2>Alarm Canceled </h2>";

                    setTimeout(() => {
                        alarmInfo.innerHTML="";
                    }, 2500);
                    

                });
            
                
            }

            else {
                alarmBtn.classList.add("passive");
                muteBtn.classList.add("passive");
                cancelBtn.classList.add("passive");


                alarmInfo.innerHTML="<h2> We Are Already Now  </h2>";
                alarm.classList.add("active");
                alarm.classList.remove("passive");
                alarm.value="";

                setTimeout(() => {
                    alarmInfo.innerHTML="";
                }, 2500);
            }

            
        


           



 
        

    




});









setInterval(() => {

    let saat = new Date();
    nowTime.innerHTML=`
    <h1>${saat.getHours()}</h1><h1>:</h1><h1>${saat.getMinutes()}</h1><h1>:</h1><h1>${saat.getSeconds()}</h1>
    `;
},10 );











