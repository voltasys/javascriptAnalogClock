// const seconds = document.querySelector(".second");
// const minutes  = document.querySelector(".minute");
// let sec=0;
// let min=0;
// //Set 12 O'clock Position 
// seconds.style.transform="rotate(180deg)"
// minutes.style.transform="rotate(180deg)"
// setInterval(function(){
// if(sec<61){
//     seconds.style.transform=`rotate(${180+6*sec}deg)`
//     sec++
// }  
 
// else{
//     sec=0; 
//     if(min<61){
//     min++;
//     minutes.style.transform=`rotate(${180+min*6}deg)`
//     }
//     else{
//         min=0;
//     }
    
// }
// },1000)

// const date = new Date();
// console.log(date)
// console.log(date.getSeconds())
// setInterval(function(){
//     console.log(date.getSeconds()) 
// },1000)

const hourEl= document.querySelector(".hour")
const minuteEl= document.querySelector(".minute")
const secondEl= document.querySelector(".second")
const toggle = document.querySelector(".toggle")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggle.addEventListener("click", function(){
   document.documentElement.classList.toggle("dark")
   if(document.documentElement.classList.contains("dark"))
    toggle.textContent="Light Mode";
   else
   toggle.textContent="Dark Mode";
})

function setTime(){
    const time =new Date();
    const month =time.getMonth();
    console.log("Mesec "+month)
    const day = time.getDay();
    console.log("Den "+day)
    const date = time.getDate();
    const hours =time.getHours();
    const hoursForClock = hours%12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours>=12?"AM":"PM"
    hourEl.style.transform=`translate(-50%,-100%) rotate(${scale(hoursForClock,0,12,0,360)}deg)`;
    minuteEl.style.transform=`translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    secondEl.style.transform=`translate(-50%,-100%) rotate(${scale(seconds,0,59,0,360)}deg)`
    timeEl.innerHTML=`${hoursForClock}:${minutes<10?0+minutes:minutes} ${ampm}`
    // console.log(time)
    dateEl.innerHTML=`${days[day]},${months[month]}<span class="circle">${date}</span></div>`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setInterval(setTime,1000)