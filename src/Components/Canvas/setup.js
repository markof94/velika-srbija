
import Mappa from 'mappa-mundi'


const key = require('../../token.json').token;

let p5 = null;

const options = {
    lat: 42.52069952914966,
    lng: 20.76416015625,
    zoom: 6,
    studio: true, // false to use non studio styles
    //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
    //style: 'mapbox://styles/mapbox/light-v10',
    style: 'mapbox://styles/markof94/cklbelyw42szn17n03z4aq8vp'
};

const setup = (p) => {
    p5 = p;

    const mappa = new Mappa('Mapbox', key);
    const size = Math.min(window.innerWidth, window.innerHeight);
    const canvas = p.createCanvas(size, size);
    p.myMap = mappa.tileMap(options);
    p.myMap.overlay(canvas);
    setTimeout(() => {
        p.myMap.map.options.inertia = false;
        p.myMap.map.options.maxZoom = 7;
        p.myMap.map.options.minZoom = 4;
    }, 500)
    p.textFont(p.fontFamily);

    p.myMap.onChange(() => p.shouldDraw = true);

    init();
}

//Assign stuff here, create player, enemies etc.
const init = () => {

}



export default setup;