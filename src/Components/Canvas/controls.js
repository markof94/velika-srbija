import isMobile from '../../Utils/isMobile'

const touchAction = (p) => {
 
  p.isTouching = true;
}

const touchEndAction = (p) => {
  p.isTouching = false;
}

export const touchStarted = (p) => {
  if (!isMobile()) return;

  touchAction();
}

export const touchEnded = (p) => {
  if (!isMobile()) return;
  touchEndAction();
}

export const mousePressed = (p) => {
  touchAction();
}

export const mouseReleased = (p) => {
  touchEndAction();
}


export const keyPressed = (p) => {
  if (p.isPaused) return;

}