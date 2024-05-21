// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus',function(){
   searchEl.classList.add('focused');
   searchElInputEl.setAttribute('placeholder','');
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(불러)되면 실행.
searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchElInputEl.setAttribute('placeholder','');
});
// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll',function (){
  console.log(window.scrollY);
  if (this.window.scrollY > 500){
    gsap.to(badgeEl, .0,{
    opacity: 0,
    display: 'none'
    });
    gsap.to(badgeEl, .6,{
      opacity: 1,
      x: 0
      });
  } else{
    gsap.to(badgeEl, .6,{
    opacity: 1,
    display:'block'
  });
  gsap.to(badgeEl, .6,{
    opacity: 0,
    x: 100
    });
}
});
window.addEventListener('click',function (){
  gsap.to(windoe, .6,{
    scrollTo: 0
  });
});
const fadEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});
new Swiper('.notice .swiper',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper',{
  autoplay: true,
  loop: true,
  slidePerView: 3,
  spaceBetween: 10,
  centereSlides: true
});
new Swiper('.promotion .swiper',{
  autoplay: true,
  loop: true,
  slidePerView: 3,
  spaceBetween: 10,
  centereSlides: true,
  pagination:{
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation:{
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next',
  }
});
new Swiper('.awards .swiper',{
  autoplay: true,
  loop: true,
  apaceBetween: 30,
  alidePerView: 5,
  navigation:{
    prevEl: '.awards .swiper-button-prev',
    nextEl: '.awards .swiper-button-next'
  }
});
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
promotionToggleBtn = addEventListener('click', function(){
  if (promotionEl.classList.contains('hide')){
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});
gsap.to('.floating1',1.5,{
  delay: 1,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInout
});
gsap.to('.floating2',2,{
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInout
});
gsap.to('.floating3',2.5,{
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInout
});
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});
const thisEls = document.querySelector('this-year');
thisyear.textContent = new Date().getFulllYear();