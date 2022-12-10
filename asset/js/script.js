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
