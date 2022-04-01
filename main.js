'use strict';
//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    //console.log(`navbarHeight: ${navbarHeight}`); /*navnar Height:104px*/ 
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping in the navbar menu
const navbarMenu =document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{
    
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;   //없다면 아무것도 일어나지 않도록 함 
    }

    // console.log(event.target.dataset.link);
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({ behavior: 'smooth'});

    scrollIntoView(link);
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', (event) =>{
  scrollIntoView('#contact');
});


//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
    //home height 800이면 스크롤이 0이다. 

});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight /2) {
        arrowUp.classList.add('visible');
    }else {
        arrowUp.classList.remove('visible');
    }
});



//Handle click  on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});


//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const Projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }
    console.log(filter);

    //Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected')
    active.classList.remove('selected');
    const target = 
        e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    //target이 버튼이면 실행하고 버튼이 아니면 span이라 selected를 걸어줌

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        Projects.forEach((project) => {
            console.log(project.dataset.type);
            if(filter ==='*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});



function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
}

//
// console.log(`--------------`);
    // for(let project of  Projects) {
    //     console.log(project);
    // }

    // let project;
    // for(let i = 0; i< Projects.length ; i++ ) {
    //     project = Projects[i];
    //     console.log(project);
    // }