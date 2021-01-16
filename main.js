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
    navbarMenu.classList.remove('open');
    scrollIntoView(link);

});


// 모바일 메뉴 클릭 시 카테고리 보이게 하는 코드


const navbarToggleBtn = document.querySelector('.navbar__toggleBtn');
navbarToggleBtn.addEventListener('click', () =>{
    navbarMenu.classList.toggle('open');
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

// 프로젝트 카테고리 버튼 클릭 시 해당 자료만 보여주기 기능
const workBtnContainer = document.querySelector('.project__categories');
const projectContainer = document.querySelector('.project__view');
// 프로젝트들을 배열로 가져온다
const projects = document.querySelectorAll('.project');

// 프로젝트 버튼 클릭시
workBtnContainer.addEventListener('click', (e) =>{
    const filter = e.target.dataset.filter  || e.target.parentNode.dataset.filter; // 데이터가 없다면 parentNode의 데이터 필터 값을 사용함// 데이터 필터 값을 받아온다.
    if(filter == null){
        return;
    }
    //이전 선택 버튼의 셀렉션을 없애고 다음 선택버튼의 셀렉션 생성
    const active = document.querySelector('.category__btn.selected');
    // node의 이름이 클릭된것이 버튼이면  그대로 e.target를 사용하고 아닐경우 span이 클릭 될 경우엔 parentnode를 사용하여 부모노드인 button 선택
    active.classList.remove('selected');
    const target=e.target.nodeName === 'BUTTON' ? e.target: e.target.parentNode;
    target.classList.add('selected');


    projectContainer.classList.add('anim-out'); // 에니메이션 등록
    projects.forEach((project) =>{
        console.log(project.dataset.type);
        if(filter === '*' || filter=== project.dataset.type){ // 필터가 전부이거나, 클릭한 필터와 데이터타입이매칭하면 보여줌
            project.classList.remove('invisible');

        }else{
            project.classList.add('invisible');// 필터랑 동일하면 안보여져야되니까 클래스 생성 
        }
    }); 
    setTimeout(() => {
        projectContainer.classList.remove('anim-out'); // 3초뒤에 클래스를 지워줘야 opacity가 남지않는다
    }, 500);
   
});


// home title 타이핑 애니메이션
$(window).ready(function() {
    var typingBool = false;
    var typingIdx = 0;
    var typingTxt = $(".home__title").text(); // 타이핑될 텍스트를 가져온다
    typingTxt = typingTxt.split(""); // 한글자씩 자른다.
    if (typingBool == false) {
      // 타이핑이 진행되지 않았다면
      typingBool = true;
  
      var tyInt = setInterval(typing, 100); // 반복동작
    }
  
    function typing() {
      if (typingIdx < typingTxt.length) {
        // 타이핑될 텍스트 길이만큼 반복
        $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
        typingIdx++;
      } else {
        clearInterval(tyInt); //끝나면 반복종료
      }
    }
  });
  