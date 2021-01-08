'use strict';

// navar 스크롤을 내리면 투명해지면서 고정되어있다.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
   
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});


// 해당 메뉴 클릭 시 이동 
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) =>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){ // 링크가 있는 경우만 
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});

});

// contactBtn 클릭시 contact 메뉴로 이동 

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click',(event) => {
   
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});
});


// 홈화면 스크롤시 투명

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


