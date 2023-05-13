const container = document.querySelector('.container');
const cube = document.querySelector('.cube');
const redbtn = document.querySelector('.redbtn');
const black = document.querySelector('.black');
const audio = new Audio('assets/boom.mp3');

let [down, x, y, rotateX, rotateY] = [false, null, null, 0, 0];

const start = (e) => {
  down = true;
  x = e.clientX || e.changedTouches[0].clientX;
  y = e.clientY || e.changedTouches[0].clientY;
  container.style.cursor = 'grabbing';
};

const end = (e) => {
  down = false;
  x = null;
  y = null;
  container.style.cursor = 'grab';
};

const move = (e) => {
  if (down) {
    const currentX = e.clientX || e.changedTouches[0].clientX;
    const currentY = e.clientY || e.changedTouches[0].clientY;
    const difX = currentX - x;
    const difY = currentY - y;
    rotateX += difX;
    rotateY += difY;
    cube.style.transform = ` rotateY(${rotateX / 2}deg) rotateX(${
      -rotateY / 2
    }deg)`;
    x = currentX;
    y = currentY;
  }
};

container.addEventListener('mousedown', (e) => start(e));
container.addEventListener('mouseup', (e) => end(e));
container.addEventListener('mousemove', (e) => move(e));
container.addEventListener('touchstart', (e) => start(e));
container.addEventListener('touchend', (e) => end(e));
container.addEventListener('touchmove', (e) => move(e));

redbtn.addEventListener('click', () => {
  audio.play();
  black.style.display = 'flex';
});
