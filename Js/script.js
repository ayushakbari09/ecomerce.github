const wraper = document.querySelector('.wraper');
const loginLink = document.querySelector('.login-link');
const ragisterLink = document.querySelector('.ragister-link');
const btnpop = document.querySelector('.btnlogin-pop');
const iconclose = document.querySelector('.icon-close');


ragisterLink.addEventListener('click',()=> {
    wraper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    wraper.classList.remove('active');
});

btnpop.addEventListener('click',()=> {
    wraper.classList.add('active-pop');
});

iconclose.addEventListener('click',()=> {
    wraper.classList.remove('active-pop');
});

function searchBooks() {
    var searchTerm = document.getElementById("search").value;
    var books = document.getElementsByClassName("card");
    for (var i = 0; i < books.length; i++) {
      var bookName = books[i].getElementsByClassName("card-header")[0].innerHTML;
      if (bookName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
        books[i].style.display = "block";
      } else {
        books[i].style.display = "none";
      }
    }
  }


  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );  


// For Slider

const slides= document.querySelectorAll('.pic');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(function (s, i) {
    const translateXNum = 80 * (i - slide);
    let translateYNum, rotateDeg, grayscaleNum, zIndexNum, opacityNum;
    if (translateXNum === 0){
      translateYNum = 0; 
      rotateDeg = 0;
      grayscaleNum = 0;
      zIndexNum = 1;
      opacityNum = 100;
    } else if (translateXNum < 0) {
      translateYNum = 5;
      rotateDeg = -5;
      grayscaleNum = 1;
      zIndexNum = 0;
      opacityNum = 20;
      } else {
      translateYNum = 5;
      rotateDeg = 5;
      grayscaleNum = 1;
      zIndexNum = 0;
      opacityNum = 20;
      }      
s.style.transform = `translate(${translateXNum}%, ${translateYNum}%) rotate(${rotateDeg}deg)`;
s.style.filter = `grayscale(${grayscaleNum})`;
s.style.zIndex = zIndexNum;
s.style.opacity = `${opacityNum}%`
  });
};
goToSlide(0);

const nextSlide = function(){
  if(curSlide === maxSlide-1) {
    curSlide=0;
  } else {
    curSlide++;
  }
 goToSlide(curSlide);
}

const prevSlide = function (){
 if (curSlide === 0){
   curSlide = maxSlide-1
 } else {
 curSlide--;
 }
 goToSlide(curSlide);
}


btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)


// MainSlider



// Responsive Bar


