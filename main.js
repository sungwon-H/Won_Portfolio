'use strict';

// navar 스크롤을 내리면 투명해지면서 고정되어있다.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
   
    if(window.scrollY > navbarHeight){ // navbar높이가 scrollY보다 작으면 스크롤이 아래로 내려가면
        navbar.classList.add('navbar--dark'); // 클래스 생성
    }else{
        navbar.classList.remove('navbar--dark');
    }
});


// 해당 메뉴 클릭 시 이동 
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) =>{ // 클릭 시 
    // console.log(event.target.dataset.link); html 문서에 data-link의 아이디 값을 가져옴
    const target = event.target; // 
    const link = target.dataset.link; // 링크 값
    if(link == null){ // 링크가 없다면 리턴 
        return;
    }
    scrollIntoView(link);
});



// contactBtn 클릭시 contact 메뉴로 이동 

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click',() => {
   
   
    scrollIntoView('#contact');
});



// 홈화면 스크롤시 투명

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height; // 

document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});



// 아래로 내려갈 시 위로 올라가는 버튼 생성
const arrowUp = document.querySelector(".arrow-up"); // html 문서의 arrow-up클래스 가져온다
document.addEventListener('scroll',()=>{ // 이벤트 리스너 scroll시 발동
    if(window.scrollY > homeHeight / 2){ //만야 homeHeight의 /2 에 도달하면 아래 실행
        arrowUp.classList.add('visiable'); // visiable 클래스 생성
    }else{
        arrowUp.classList.remove('visiable'); // 아니면 제거 
    }
});

// arrow 버튼 클릭시 위로 이동
arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
});

function scrollIntoView(selector){ //scrollIntoView함수 생성 링크 광역
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});

}


