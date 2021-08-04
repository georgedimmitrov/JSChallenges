const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', (event) => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove('scroll-up');
  }

  if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up');
    body.classList.add('scroll-down');
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains('scroll-down')
  ) {
    body.classList.add('scroll-up');
    body.classList.remove('scroll-down');
  }

  lastScroll = currentScroll;
});
