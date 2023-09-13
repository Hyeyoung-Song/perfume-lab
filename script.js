const titlemoveBox = document.querySelectorAll(".move-box");
const boxCount = titlemoveBox[0].childElementCount;
const moveRate = 100 / (boxCount + 1);
let num = 0;


function titleMove() {
  num++;
  
  titlemoveBox.forEach((elem, idx) => {
    if (num >= boxCount) {
      elem.style.transform = `translateY(-${moveRate * num}%)`;
      setTimeout(() => {
        num = 0;
        elem.style.transition = "none";
        elem.style.transform = `translateY(-${moveRate * num}%)`;
      }, 1210);
    } else {
      elem.style.transition = "0.8s"; 
      elem.style.transform = `translateY(-${moveRate * num}%)`;
    }
  });
  setTimeout(() => {
    window.requestAnimationFrame(titleMove);
  }, 4000);
}

function cloneBox(){
  
  titlemoveBox.forEach((elem) => {
  let lastChild = elem.lastElementChild;
  let cloneLast = lastChild.cloneNode(true);
  elem.prepend(cloneLast);
  cloneLast.style.opacity = 0;
    setTimeout(() => {
      cloneLast.style.opacity = 1;
      cloneLast.classList.add('ani');
      lastChild.classList.add('ani');
    }, 1000); 
  });
}
window.addEventListener('load',()=>{
  cloneBox();
  titleMove();  
})
