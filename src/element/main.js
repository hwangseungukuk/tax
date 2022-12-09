
export default function Main()
{
   const header = document.querySelector(".header");
   const headerHeight = header.getBoundingClientRect().height;
   const nowHeight = window.scrollY; //윈도우높이
   const applicationSc = document.querySelector(".application-sc")
   const vscObjAni = document.querySelectorAll('.visual-sc .obj-ani'); 
   // 모바일 헤더~
   //const gnb = document.querySelector(".gnb");
   //const gnbBtn = document.querySelector(".mobile-gnb-btn");
   //const topBtn = document.querySelector(".top-btn")

   // topBtn.addEventListener('click',()=>{
   //    window.scrollTo(0,0)
   // })

   // gnbBtn.addEventListener('click', function(){
   //    gnb.classList.toggle("moblie-gnb")
   // })

      // 비주얼섹션 초반 애니메이션
   setTimeout(() => {
      for (const obj of vscObjAni) {
         obj.classList.add("obj-ani-on")
      }
      },)
      
      // 스크롤
   document.addEventListener('scroll', () => {
      const windowHeight = document.querySelector(".windowHeight") //버튼
      const nowHeight = window.scrollY; //윈도우높이
      const objAni = document.querySelectorAll('.obj-ani'); 
      const windowH = window.innerHeight / 1.1;
      //현재높이 표시
      // windowHeight.innerHTML = nowHeight + '/' +  windowH;
      // console.log(windowH)
      // 헤더부분
      if (nowHeight > headerHeight) {
         header.classList.add("white")
      } else {
         header.classList.remove("white");
      }
      // 텍스트 효과
      for(let i=0; i < objAni.length; i++){
         const onjAniTop = objAni[i].getBoundingClientRect().top + window.pageYOffset;
         if(nowHeight > onjAniTop - windowH){
            objAni[i].classList.add('obj-ani-on')
         }
         // console.log(onjAniTop + ':' + nowHeight  * 1.6 > onjAniTop)
         //반족실행 꺼놓음
         // else{
         //    sectionTop[i].classList.remove('scroll-bottom')
         // }
      }
      
      //와이드
      const wide = document.querySelector('.team-sc .wide-img');
      const wideTop = wide.getBoundingClientRect().top + window.pageYOffset;
      
      if(nowHeight > wideTop / 1.2){
         wide.classList.add("wide-ani")
      }else{
         wide.classList.remove('wide-ani')
      }
   })
   // 카운팅
   const counter = (counter, max) => {
      let now = max;
   
      const handle = setInterval(() => {
         counter.innerHTML = new Intl.NumberFormat('ko-KR',{maximumSignificantDigits:7}).format(max - now);
      
      // 목표수치에 도달하면 정지
      if (now < 1) {
         clearInterval(handle);
      }
      
      // 증가되는 값이 계속하여 작아짐
      const step = now / 17;
      
      // 값을 적용시키면서 다음 차례에 영향을 끼침
      now -= step;
      }, 22);
   }
   const asc = document.querySelector('.application-sc')
   asc.addEventListener('mouseover',()=>{
            // 카운트를 적용시킬 요소
            const $counter = document.querySelector(".count");
            // 목표 수치
            const max = 7000000 + 1;
            
            setTimeout(() => counter($counter, max),1800);
   },{ once : true })
}



