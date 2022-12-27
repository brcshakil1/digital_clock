setInterval(setClock, 1000);

const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
const ampm = document.getElementById('ampm')



function setClock() {
    const date = new Date();
    let hours = date.getHours();
    ampm.innerHTML = hours > 12 ? "PM" : "AM";
    
    if(hours > 12) {
        hours -= 12; 
    }
    hour.innerHTML = hours;
    minute.innerHTML = date.getMinutes();
    second.innerHTML = date.getSeconds();
    
}