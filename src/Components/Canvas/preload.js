import isMobile from '../../Utils/isMobile'

let p5 = null;

const preload = (p) => {
    p5 = p;

    initializeValues();

    loadGoogleFont("Cuprum");

}

const initializeValues = () => {
   p5.shouldDraw = true;
}

const loadGoogleFont = (fontFamily) => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css?family=${fontFamily.replace(" ", "+")}`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    p5.fontFamily = fontFamily;
}

export default preload;