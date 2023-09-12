







const root = document.documentElement;
const head = document.head;

let metaThemeColor = document.querySelector('meta[name="theme-color"]');

const body = document.body;


window.addEventListener("mousemove", (p) =>{
  let mousep = document.getElementById("mouse");
  mousep.style.left = p.pageX + "px";
  mousep.style.top = p.pageY + "px";
})


// slide up down button
let slideAutoDown = document.getElementById('slide_auto_down');
let slideAutoUp = document.getElementById('slide_auto_up');
let sw = window.innerHeight /1.5;

slideAutoDown.addEventListener('click', () =>{
  window.scrollBy({
    top: sw,
    behavior: 'smooth'
  })
})
slideAutoUp.addEventListener('click', () =>{
  window.scrollTo({
    top: -0,
    behavior: 'smooth'
  })
})
// window screen lenth

window.addEventListener('scroll', () =>{
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  let scrolled = window.scrollY;

  if(Math.ceil(scrolled) === scrollable){
    slideAutoDown.classList.remove('active')
    slideAutoUp.classList.add('active')
  }
  else{
    slideAutoDown.classList.add('active')
    slideAutoUp.classList.remove('active')
  }
})

// scroll hide
setTimeout(() =>{
  window.onscroll = () => {
    body.classList.add('scroll');
    if(body.classList.contains('scroll')){
      // console.log("hide me");
      slideAutoDown.classList.remove('show');
      slideAutoUp.classList.remove('show')
    }
  };
}, 1000);

setInterval(() => {
  // console.log("show me");
  body.classList.remove('scroll');
  slideAutoDown.classList.add('show');
  slideAutoUp.classList.add('show')
},1000);


// ========== animation
// ----------- scroll animation 

const scrollers = document.querySelectorAll('.scroller');
window.addEventListener('scroll', checkScrollers)
checkScrollers()

function checkScrollers() {
    const triggerBottom = window.innerHeight / 2;
    const triggerTop = window.innerHeight / 2.5;
    scrollers.forEach(scroller => {
        const scrollerTop = scroller.getBoundingClientRect().top
        const scrollerBottom = scroller.getBoundingClientRect().bottom
        if(scrollerTop < triggerBottom && scrollerBottom > triggerTop)
        {
          scroller.classList.add('scrolled')
        }
        else
        {
          scroller.classList.remove('scrolled')
        }
    })
}


// dayes calculation

let dayes = document.getElementById('dayes');
let years = document.getElementById('years');
let cardYears0 = document.getElementById('card-years0');
let cardYears1 = document.getElementById('card-years1');
let cardYears2 = document.getElementById('card-years2');
let date = new Date();
date.getDate();
date.getFullYear();

dayes.innerText = " " + date.getDate();
years.innerText = " " + date.getFullYear();
cardYears0.innerText = date.getFullYear() - 1;
cardYears1.innerText = date.getFullYear();
cardYears2.innerText = date.getFullYear() + 1;



let pRange = document.getElementById("prange");

setInterval(() => {
 let totalRange = pRange.value * 3;

 pRange.onchange = () =>{
  localStorage.setItem("pColor", totalRange);
 };

 let pColor = localStorage.getItem("pColor");

 body.style = '--hue:' +  pColor + ';'

 metaThemeColor.conent = body.style.accentColor;

},1);



// theme changing ***************

let theme = document.getElementById('theme');
let time = date.getHours();

if(time >= 18){
  theme.classList.add('active');
}else{
  theme.classList.remove('active')
};


theme.onclick = () =>{
  theme.classList.toggle('active');
};

setInterval(() =>{
  if(theme.classList.contains('active')){
   body.classList.add('active');
 }else{
   body.classList.remove('active');
 }

},1)
