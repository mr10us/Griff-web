'use scrict'

window.onscroll = () => {
  if (window.scrollY > 1000) {
    document.querySelector('.top-button').style.opacity = 1;
    document.querySelector('.top-button').style.pointerEvents = 'auto';
  } else {
    document.querySelector('.top-button').style.opacity = 0;
    document.querySelector('.top-button').style.pointerEvents = 'none';
  }
}

