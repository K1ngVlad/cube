const container = document.querySelector('.container');
const cube = document.querySelector('.cube');
const redbtn = document.querySelector('.redbtn');
const black = document.querySelector('.black');
const audio = new Audio('assets/boom.mp3');

let [down, x, y, rotateX, rotateY] = [false, null, null, 0, 0];

container.addEventListener('mousedown', (e) => {
  down = true;
  x = e.clientX;
  y = e.clientY;
  container.style.cursor = 'grabbing';
});
container.addEventListener('mouseup', () => {
  down = false;
  x = null;
  y = null;
  container.style.cursor = 'grab';
});
container.addEventListener('mousemove', (e) => {
  if (down) {
    const currentX = e.clientX;
    const currentY = e.clientY;
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
});

redbtn.addEventListener('click', () => {
  audio.play();
  black.style.display = 'flex';
});
