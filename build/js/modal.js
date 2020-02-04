// document.addEventListener("DOMContentLoaded", function(){
//   // var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
//   // console.log(scrollbar);

//   document.querySelector('[href="#openModal"]').addEventListener('click',function(){
//     document.body.style.overflow = 'hidden';
//     console.log(78);
//     console.log(e.target);
//     // document.querySelector('#openModal').style.marginLeft = scrollbar;
//   });
//   document.querySelector('[href="#close"]').addEventListener('click',function(){
//     document.body.style.overflow = 'visible';
//     document.querySelector('#openModal').style.marginLeft = '0px';
//   });
// });

// if (document.querySelector('[href="#openModal"]') !== null) {
//   console.log(6787);
// } else {
//   console.log(56);
// }

window.modalOpen = function (evt) {
  if (document.querySelector('[href="#openModal"]') !== null) {
  console.log(6787);
  // document.querySelector('[href="#openModal"]').addEventListener('click', function () {
  //   console.log(document.querySelector('[href="#openModal"]'));
  // })
  
} else {
  console.log(56);
}
}