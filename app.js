document.addEventListener('DOMContentLoaded', function() {
  var bars = document.querySelector('.bars');
  var closeMenu = document.querySelector('.closeMenu');
  var atags = document.querySelector('.atags');

  bars.addEventListener('click', function() {
    atags.classList.add('open');
    bars.style.display = 'none';
    closeMenu.style.display = 'block';
  });

  closeMenu.addEventListener('click', function() {
    atags.classList.remove('open');
    closeMenu.style.display = 'none';
    bars.style.display = 'block';
  });
});



document.addEventListener('DOMContentLoaded', function() {
  var slider = document.querySelector('.slider-1');
  console.log(slider);
  var images = ['images/slider1.jpg', 'images/slider2.jpg', 'images/slider3.jpg'];
  var currentImageIndex = 0;

  function changeBackgroundImage() {
    slider.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  changeBackgroundImage();
  setInterval(changeBackgroundImage, 5000);
});
