 
const btn = document.querySelector('#TOP');
const box_pst = document.querySelectorAll('.rightMenu')[0].offsetTop;
btn.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst, behavior: 'smooth' } )
});
const btn1 = document.querySelector('#COVER');
const box_pst1 = document.querySelectorAll('.p0__bg')[0].offsetTop;
btn1.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst1-70, behavior: 'smooth'})
});
const btn2 = document.querySelector('#TEL');
const box_pst2 = document.querySelectorAll('.p1__bg')[0].offsetTop;
btn2.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst2-70, behavior: 'smooth'})
});
const btn3 = document.querySelector('#SITE');
const box_pst3 = document.querySelectorAll('.p2__bg')[0].offsetTop;
btn3.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst3-70, behavior: 'smooth'})
});
const btn4 = document.querySelector('#WORK');
const box_pst4 = document.querySelectorAll('.p6__bg')[0].offsetTop;
btn4.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst4-70, behavior: 'smooth'})
});
const btn5 = document.querySelector('#Apple');
const box_pst5 = document.querySelectorAll('.p2')[0].offsetTop;
btn5.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst5-70, behavior: 'smooth'})
});
const btn6 = document.querySelector('#YoungPoong');
btn6.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst5+850, behavior: 'smooth'})
});
const btn7 = document.querySelector('#ABCefe');
btn7.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst5+1750, behavior: 'smooth'})
});
const btn8 = document.querySelector('#CELL');
btn8.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst5+2640, behavior: 'smooth'})
});



const modalOpenButton1 = document.getElementById('modalOpenButton1');
const modalCloseButton1 = document.getElementById('modalCloseButton1');
const modal1 = document.getElementById('modalContainer1');

modalOpenButton1.addEventListener('click', () => {
  modal1.classList.remove('hidden');
});

modalCloseButton1.addEventListener('click', () => {
  modal1.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal1) {
    modal1.classList.add('hidden');
  } 
});


const modalOpenButton2 = document.getElementById('modalOpenButton2');
const modalCloseButton2 = document.getElementById('modalCloseButton2');
const modal2 = document.getElementById('modalContainer2');

modalOpenButton2.addEventListener('click', () => {
  modal2.classList.remove('hidden');
});

modalCloseButton2.addEventListener('click', () => {
  modal2.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal2) {
    modal2.classList.add('hidden');
  } 
});


const modalOpenButton3 = document.getElementById('modalOpenButton3');
const modalCloseButton3 = document.getElementById('modalCloseButton3');
const modal3 = document.getElementById('modalContainer3');

modalOpenButton3.addEventListener('click', () => {
  modal3.classList.remove('hidden');
});

modalCloseButton3.addEventListener('click', () => {
  modal3.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal3) {
    modal3.classList.add('hidden');
  } 
});


const modalOpenButton4 = document.getElementById('modalOpenButton4');
const modalCloseButton4 = document.getElementById('modalCloseButton4');
const modal4 = document.getElementById('modalContainer4');

modalOpenButton4.addEventListener('click', () => {
  modal4.classList.remove('hidden');
});

modalCloseButton4.addEventListener('click', () => {
  modal4.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal4) {
    modal4.classList.add('hidden');
  } 
});


const modalOpenButton5 = document.getElementById('modalOpenButton5');
const modalCloseButton5 = document.getElementById('modalCloseButton5');
const modal5 = document.getElementById('modalContainer5');

modalOpenButton5.addEventListener('click', () => {
  modal5.classList.remove('hidden');
});

modalCloseButton5.addEventListener('click', () => {
  modal5.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal5) {
    modal5.classList.add('hidden');
  } 
});


const modalOpenButton6 = document.getElementById('modalOpenButton6');
const modalCloseButton6 = document.getElementById('modalCloseButton6');
const modal6 = document.getElementById('modalContainer6');

modalOpenButton6.addEventListener('click', () => {
  modal6.classList.remove('hidden');
});

modalCloseButton6.addEventListener('click', () => {
  modal6.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal6) {
    modal6.classList.add('hidden');
  } 
});



const modalOpenButton7 = document.getElementById('modalOpenButton7');
const modalCloseButton7 = document.getElementById('modalCloseButton7');
const modal7 = document.getElementById('modalContainer7');

modalOpenButton7.addEventListener('click', () => {
  modal7.classList.remove('hidden');
});

modalCloseButton7.addEventListener('click', () => {
  modal7.classList.add('hidden');
  
});
window.addEventListener('click', (event) => {
    if (event.target === modal7) {
      modal7.classList.add('hidden');
    } 
  });



const modalOpenButton8 = document.getElementById('modalOpenButton8');
const modalCloseButton8 = document.getElementById('modalCloseButton8');
const modal8 = document.getElementById('modalContainer8');

modalOpenButton8.addEventListener('click', () => {
  modal8.classList.remove('hidden');
});

modalCloseButton8.addEventListener('click', () => {
  modal8.classList.add('hidden');
  
});
window.addEventListener('click', (event) => {
    if (event.target === modal8) {
      modal8.classList.add('hidden');
    } 
  });



const modalOpenButton9 = document.getElementById('modalOpenButton9');
const modalCloseButton9 = document.getElementById('modalCloseButton9');
const modal9 = document.getElementById('modalContainer9');

modalOpenButton9.addEventListener('click', () => {
  modal9.classList.remove('hidden');
});

modalCloseButton9.addEventListener('click', () => {
  modal9.classList.add('hidden');
  
});
window.addEventListener('click', (event) => {
    if (event.target === modal9) {
      modal9.classList.add('hidden');
    } 
  });



const modalOpenButton10 = document.getElementById('modalOpenButton10');
const modalCloseButton10 = document.getElementById('modalCloseButton10');
const modal10 = document.getElementById('modalContainer10');

modalOpenButton10.addEventListener('click', () => {
  modal10.classList.remove('hidden');
});

modalCloseButton10.addEventListener('click', () => {
  modal10.classList.add('hidden');
  
});
window.addEventListener('click', (event) => {
    if (event.target === modal10) {
      modal10.classList.add('hidden');
    } 
  });



const modalOpenButton11 = document.getElementById('modalOpenButton11');
const modalCloseButton11 = document.getElementById('modalCloseButton11');
const modal11 = document.getElementById('modalContainer11');

modalOpenButton11.addEventListener('click', () => {
  modal11.classList.remove('hidden');
});

modalCloseButton11.addEventListener('click', () => {
  modal11.classList.add('hidden');
  
});
window.addEventListener('click', (event) => {
    if (event.target === modal11) {
      modal11.classList.add('hidden');
    } 
  });



const modalOpenButton12 = document.getElementById('modalOpenButton12');
const modalCloseButton12 = document.getElementById('modalCloseButton12');
const modal12 = document.getElementById('modalContainer12');

modalOpenButton12.addEventListener('click', () => {
  modal12.classList.remove('hidden');
});

modalCloseButton12.addEventListener('click', () => {
  modal12.classList.add('hidden');
  
});
window.addEventListener('click', (event) => {
    if (event.target === modal12) {
      modal12.classList.add('hidden');
    } 
  });



const modalOpenButton13 = document.getElementById('modalOpenButton13');
const modalCloseButton13 = document.getElementById('modalCloseButton13');
const modal13 = document.getElementById('modalContainer13');

modalOpenButton13.addEventListener('click', () => {
  modal13.classList.remove('hidden');
});

modalCloseButton13.addEventListener('click', () => {
  modal13.classList.add('hidden');
  
});
window.addEventListener('click', (event) => {
    if (event.target === modal13) {
      modal13.classList.add('hidden');
    } 
  });



const modalOpenButton14 = document.getElementById('modalOpenButton14');
const modalCloseButton14 = document.getElementById('modalCloseButton14');
const modal14 = document.getElementById('modalContainer14');

modalOpenButton14.addEventListener('click', () => {
  modal14.classList.remove('hidden');
});

modalCloseButton14.addEventListener('click', () => {
  modal14.classList.add('hidden');
  
});
window.addEventListener('click', (event) => {
    if (event.target === modal14) {
      modal14.classList.add('hidden');
    } 
  });



const modalOpenButton15 = document.getElementById('modalOpenButton15');
const modalCloseButton15 = document.getElementById('modalCloseButton15');
const modal15 = document.getElementById('modalContainer15');

modalOpenButton15.addEventListener('click', () => {
  modal15.classList.remove('hidden');
});

modalCloseButton15.addEventListener('click', () => {
  modal15.classList.add('hidden');
  
});
window.addEventListener('click', (event) => {
    if (event.target === modal15) {
      modal15.classList.add('hidden');
    } 
  });