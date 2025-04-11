'use strict';

const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    function step(currentPos) {
      img.style.left = `${currentPos}px`;
      if (currentPos >= stopPos) {
        return resolve();
      }
      setTimeout(() => step(currentPos + STEP_SIZE_PX), STEP_INTERVAL_MS);
    }
    step(startPos);
  });
}

function dance(img) {
  return new Promise((resolve) => {
    const currentImgUrl = img.src;
    img.src = DANCING_CAT_URL;

    setTimeout(() => {
      img.src = currentImgUrl;
      resolve();
    }, DANCE_TIME_MS);
  });
}

async function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  await walk(img, startPos, centerPos);
  await dance(img);
  await walk(img, centerPos, stopPos);
  catWalk();
}

window.addEventListener('load', catWalk);
