const card = document.getElementById('activator');

const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

tl.pause();

let toggle = false;

tl.to('.activator', {
  background: '#805ad5',
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
});

tl.to(
  'nav',
  {
    clipPath: 'ellipse(100% 100% at 50% 50%)',
  },
  '-=.5'
);

tl.to(
  'nav img',
  {
    opacity: 1,
    transform: 'translateX(0)',
    stagger: 0.07,
  },
  '-=.5'
);

tl.to(
  '.activator img.x-menu',
  {
    opacity: 1,
    transform: 'translateX(0)',
    display: 'initial',
  },
  '-=.4'
);

tl.to(
  '.activator img.menu',
  {
    display: 'none',
    opacity: 0,
    transform: 'translateX(-10)',
  },
  '-=.9'
);

card.addEventListener('click', () => {
  toggle = !toggle;

  toggle ? tl.play() : tl.reverse();
});
