const projects = document.querySelectorAll('.js-project');
const popUpWrappers = document.querySelectorAll('.js-pop-up-wrapper');

projects.forEach((project) => {
  const popUpWrapper = project.querySelector('.js-pop-up-wrapper');
  const img = project.querySelector('img[data-src]');
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

  img.addEventListener('click', () => {
    popUpWrapper.setAttribute('style', 'display: block;');
  });

  // close popup on click
  popUpWrapper.addEventListener('click', () => {
    popUpWrapper.removeAttribute('style');
  });
});

// close all popups on esc key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popUpWrappers.forEach((wrapper) => {
      wrapper.removeAttribute('style');
    });
  }
});
