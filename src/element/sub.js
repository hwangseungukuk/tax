
 // 모바일 헤더~
 export default function Sub()
 {
   const gnb = document.querySelector(".gnb");
   const gnbBtn = document.querySelector(".mobile-gnb-btn");
   
   gnbBtn.addEventListener('click', function(){
      gnb.classList.toggle("moblie-gnb")
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
   
   window.onload = ( ) => {
                  // 카운트를 적용시킬 요소
                  const $counter = document.querySelectorAll(".count");
                  // 목표 수치
                  const max = 7000000 + 1;
                  
                  $counter.forEach(count => {
                     setTimeout(() => counter(count, max),0);
                  });
   
   }
   
   /*
   const tabNum = document.querySelectorAll(".tab-num");
   const tabCon = document.querySelectorAll(".tab-box")
   
   const tab1 = () =>{
      tabNum[0].classList.remove('active')
      tabNum[1].classList.add('active')
      tabCon[0].classList.remove('active')
      tabCon[1].classList.add('active')
   }
   const tab2 = () =>{
      tabNum[1].classList.remove('active')
      tabNum[2].classList.add('active')
      tabCon[1].classList.remove('active')
      tabCon[2].classList.add('active')
      setTimeout(() => {
         tabNum[2].classList.remove('active')
         tabNum[3].classList.add('active')
         tabCon[2].classList.remove('active')
         tabCon[3].classList.add('active')
      }, 3000);
   }
   const tab4 = () =>{
      tabNum[3].classList.remove('active')
      tabNum[4].classList.add('active')
      tabCon[3].classList.remove('active')
      tabCon[4].classList.add('active')
   }
   const tab5 = () =>{
      tabCon[4].classList.remove('active')
      tabCon[5].classList.add('active')
   }
   */
   
   // const back = document.querySelector(".back-btn button");
   // back.addEventListener('click', ()=>{
   //    history.go(-1);
   //    console.log('asd')
   // })
}
