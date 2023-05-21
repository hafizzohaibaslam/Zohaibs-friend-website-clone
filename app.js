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
