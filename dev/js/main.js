const images = document.querySelectorAll('img[data-src][data-srcset]');
images.forEach((img) => {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.setAttribute('srcset', img.getAttribute('data-srcset'));
  // when image is loaded remove data attribute to make image fade in with a css animation
  img.addEventListener('load', () => {
    img.removeAttribute('data-src');
    img.removeAttribute('data-srcset');
  });
});
