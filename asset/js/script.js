/* ========================== Color Mode =============================== */
//toggle
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () =>{
    document.querySelector('.style-switcher').classList.toggle('open');
});


// hiding mode on scrolling
window.addEventListener("scroll", ()=>{
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open');
    }
})

// activate color style
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyles.forEach((style) =>  {
        if(color === style.getAttribute('title')){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}


/* ========================= Day-night Mode ============================= */
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    dayNight.querySelector('i').classList.toggle('fa-sun');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-moon');
    }
    else{
        dayNight.querySelector('i').classList.add('fa-sun');
    }
})

/*============================ Typing Animation =======================*/
// embeding from github

var typing = new Typed('.typing', {
    strings: ["Engineer", "Web Developer", "Electronics Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

/* ========================== contact form ============================ 
document.querySelector('#contact-submit').addEventListener('click', () =>{
    let nameOj = document.querySelector('input[name="name"]');
    let emailOj = document.querySelector('input[name="email"]');
    let phoneOj = document.querySelector('input[name="phone"]');
    let messageOj = document.querySelector('input[name="message"]');

    let name = nameOj.value;
    let email = emailOj.value;
    let phone = phoneOj.value;
    let message = messageOj.value;


})
*/
/* active current page */
const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;

for(let i = 0; i < totalNavList; i++){
    const a = navList[i].querySelector('a');
    a.addEventListener('click', () => {
        for(let j = 0; j < totalNavList; j++){
            navList[j].querySelector('a').classList.remove('active');
        }
        a.classList.add('active');
    })
}
window.addEventListener('scroll', () =>{
    const home = document.getElementById('home');
    const about = document.getElementById("about");
    const services = document.getElementById('services');
    const portfolio = document.getElementById('portfolio');
    const contact = document.getElementById('contact');
    //console.log(home.scrollTop);
    if(home.scrollTop < window.innerHeight/2){
        for(let j = 0; j < totalNavList; j++){
            navList[j].querySelector('a').classList.remove('active');
        }
        navList[0].querySelector('a').classList.add('active');
    }
    if(/*about.scrollTop < window.innerHeight/2*/window.pageYOffset > 450 && window.pageYOffset < 2000){
        for(let j = 0; j < totalNavList; j++){
            navList[j].querySelector('a').classList.remove('active');
        }
        navList[1].querySelector('a').classList.add('active');
    }
    if(/*services.scrollTop < window.innerHeight/2*/window.pageYOffset > 2000 && window.pageYOffset < 2850){
        for(let j = 0; j < totalNavList; j++){
            navList[j].querySelector('a').classList.remove('active');
        }
        navList[2].querySelector('a').classList.add('active');
    }
    if(window.pageYOffset > 2850 && window.pageYOffset < 3700){
        for(let j = 0; j < totalNavList; j++){
            navList[j].querySelector('a').classList.remove('active');
        }
        navList[3].querySelector('a').classList.add('active');
    }
    if(window.pageYOffset > 3700){
        for(let j = 0; j < totalNavList; j++){
            navList[j].querySelector('a').classList.remove('active');
        }
        navList[4].querySelector('a').classList.add('active');
    }
})

const allSection = document.querySelectorAll('.section');
const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for(let i = 0; i < allSection.length; i++){
        allSection[i].classList.toggle('open');
    }
})

//0 450 2000 2850 3700
