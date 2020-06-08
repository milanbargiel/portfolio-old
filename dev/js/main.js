const images = document.querySelectorAll('img[data-src]');
const popUpWrappers = document.querySelectorAll('.js-pop-up-wrapper');

images.forEach((img) => {
  const hasSrcSet = img.getAttribute('data-srcset');
  img.setAttribute('src', img.getAttribute('data-src'));
  if (hasSrcSet) {
    img.setAttribute('srcset', img.getAttribute('data-srcset'));
  }
  // when image is loaded remove data attribute to make image fade in with a css animation
  img.addEventListener('load', () => {
    img.removeAttribute('data-src');
    if (hasSrcSet) {
      img.removeAttribute('data-srcset');
    }
  });
  // show project description modal on click
  img.addEventListener('click', () => {
    const project = img.parentNode.parentNode;
    project.querySelector('.js-pop-up-wrapper').style.display = 'block';
  });
});

// close popups on click or esc key
popUpWrappers.forEach((wrapper) => {
  wrapper.addEventListener('click', () => {
    wrapper.removeAttribute('style');
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popUpWrappers.forEach((wrapper) => {
      wrapper.removeAttribute('style');
    });
  }
});
