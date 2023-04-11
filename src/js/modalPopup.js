'use strict'

const scrollArrow = document.querySelector('.top-button')
const popupImg = document.querySelector('.directionContainer .image');
const popupArticle = document.querySelector('.directionContainer .textContainer h2');
const popupParagraph = document.querySelector('.directionContainer .textContainer p');


document.querySelectorAll('#direction').forEach(element => {
  element.onclick = () => {

    directionPopup.classList.remove('none');
    document.body.style.overflow = 'hidden';

    if (element.children[0].style.backgroundImage != null) {
      popupImg.style.backgroundImage = element.children[0].style.backgroundImage;
    } else popupImg.src = "#";

    if (element.children[1].innerHTML != null) {
      popupArticle.innerHTML = element.children[1].innerHTML;
    } else popupArticle.innerHTML = "Нічого не знайдено";
    
    if (!element.children[2].innerHTML != null) {
      popupParagraph.innerHTML = element.children[2].innerHTML;
    } else popupArticle.innerHTML = "Нічого не знайдено";

    scrollArrow.style.zIndex = "1";
  }
});

directionPopup.onclick = (e) => {

  if (e.target.id == 'directionPopup') {
    directionPopup.classList.add('none');
    document.body.style.overflow = 'auto';
  }
  scrollArrow.style.zIndex = "999";
  
};

