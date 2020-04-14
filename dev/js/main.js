const images = document.querySelectorAll('img[data-src]');
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
});
