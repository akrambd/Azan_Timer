
    //Audio Function
  function audioPlay(){
    document.getElementById("my_audio").play();
  }

  //time and sound
  function TimeAnim(){

    var fullDate = new Date();
    var onlyHour = fullDate.getHours();
    var onlyMinutes = fullDate.getMinutes();
    var onlySeconds = fullDate.getSeconds();
    var timeZoneAmPm= onlyHour>=12 ? "PM":"AM";
    var hour12= onlyHour>12 ? onlyHour-12:onlyHour;

    //add 0 if it is sinle digit
    onlyHour= onlyHour<10 ? "0"+onlyHour:onlyHour;
    onlyMinutes1= onlyMinutes<10 ? "0"+onlyMinutes:onlyMinutes;
    onlySeconds1= onlySeconds<10 ? "0"+onlySeconds:onlySeconds;


    document.getElementById("demo").innerHTML=hour12+":"+onlyMinutes1+":"+onlySeconds1+" "+timeZoneAmPm;
        if(onlyHour==3 && onlyMinutes==54){
        audioPlay();
        }
}
  window.setInterval(TimeAnim, 1000);

    

  