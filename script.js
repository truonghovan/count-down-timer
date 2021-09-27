const newYear='1 Jan 2022';


const daysel=document.getElementById('days');
const hoursel=document.getElementById('hours');
const minuteel=document.getElementById('minute');
const secondsel=document.getElementById('seconds');

function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate=new Date();
    const totalSeconds=(newYearDate-currentDate)/1000;
    const days=Math.floor(totalSeconds/3600/24);
    const hours= Math.floor(totalSeconds/3600)%24;  
    const minute=Math.floor(totalSeconds/60) %60;
    const second=Math.floor(totalSeconds)%60;
    
    daysel.innerHTML=formatTime(days);
    hoursel.innerHTML=formatTime(hours);
    minuteel.innerHTML=formatTime(minute);
    secondsel.innerHTML=formatTime(second);

}
function formatTime(time){
    return time<10 ?(`0${time}`):time;
}
countdown();
setInterval(countdown,1000)