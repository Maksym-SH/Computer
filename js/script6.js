const menuBurger = document.getElementById('menu__toggle');
const menuBurgerUl = document.getElementById("menu_box_ul");
let count = 0;
menuBurger.addEventListener('click', function(){
  count++;
  menuBurgerUl.classList.remove("ul_none");
  menuBurgerUl.classList.add("menu__box1");
  if(count == 2){
    menuBurgerUl.classList.remove("menu_box1");
    menuBurgerUl.classList.add("ul_none");
    count = 0;
  }
});
var target_date = new Date().getTime() + (1000*3600*432);
var days, hours, minutes, seconds; 
getCountdown();
 
setInterval(function () { getCountdown(); }, 1000);
 
function getCountdown(){
 
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    days = parseInt(seconds_left / 86400);
    days = days < 10 ? "0" + days : days;
    seconds_left = seconds_left % 86400;         
    hours = parseInt(seconds_left / 3600);
    hours = hours < 10 ? "0" + hours : hours;
    seconds_left = seconds_left % 3600;
    minutes = parseInt(seconds_left / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = parseInt( seconds_left % 60 );
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let sec = document.getElementById('second');
    let min = document.getElementById('minutes');
    let hour =  document.getElementById('hours');
    let day =  document.getElementById('days');
    day.textContent = days;
    hour.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;
};
let button = document.getElementById("butt1");
let button2 = document.getElementById("butt2");
let orderBut = document.getElementById("butt3");
let popap = document.getElementById("popap");
let popap1 = document.getElementById("popap1");
let bioBut1 = document.getElementById("bio1");
let biography1 = document.getElementById("biography1");
let bioBut2 = document.getElementById("bio2");
let biography2 = document.getElementById("biography2");
let bioBut3 = document.getElementById("bio3");
let biography3 = document.getElementById("biography3");
let closeds = document.getElementById("clos");
let closeds1 = document.getElementById("clos1");
let closeds2 = document.getElementById("clos2");
let closeds3 = document.getElementById("clos3");
let closeds4 = document.getElementById("clos4");
button.addEventListener('click', function(){
  popap.style.opacity = 1;
  popap.style.visibility = "visible";
  document.body.style.overflow = "hidden";
});

button2.addEventListener('click', function(){
  popap.style.opacity = 1;
  popap.style.visibility = "visible";
  document.body.style.overflow = "hidden";
});
orderBut.addEventListener("click", function(){
  popap1.style.opacity = 1;
  popap1.style.visibility = "visible";
  document.body.style.overflow = "hidden";
});
bioBut1.addEventListener("click", function(){
  biography1.style.opacity = 1;
  biography1.style.visibility = "visible";
  document.body.style.overflow = "hidden";
})
bioBut2.addEventListener("click", function(){
  biography2.style.opacity = 1;
  biography2.style.visibility = "visible";
  document.body.style.overflow = "hidden";
})
bioBut3.addEventListener("click", function(){
  biography3.style.opacity = 1;
  biography3.style.visibility = "visible";
  document.body.style.overflow = "hidden";
})
closeds.addEventListener("click", function(){
  popap.style.opacity = 0;
  popap.style.visibility = "hidden";
  document.body.style.overflow = "auto";
})
closeds1.addEventListener("click", function(){
  popap1.style.opacity = 0;
  popap1.style.visibility = "hidden";
  document.body.style.overflow = "auto";
})
closeds2.addEventListener("click", function(){
  biography1.style.opacity = 0;
  biography1.style.visibility = "hidden";
  document.body.style.overflow = "auto";
})
closeds3.addEventListener("click", function(){
  biography2.style.opacity = 0;
  biography2.style.visibility = "hidden";
  document.body.style.overflow = "auto";
});
closeds4.addEventListener("click", function(){
  biography3.style.opacity = 0;
  biography3.style.visibility = "hidden";
  document.body.style.overflow = "auto";
})