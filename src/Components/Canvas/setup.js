
import Mappa from 'mappa-mundi'


const key = require('../../token.json').token;

let p5 = null;

const options = {
    lat: 42.52069952914966,
    lng: 20.76416015625,
    zoom: 6,
    studio: true,
    style: 'mapbox://styles/markof94/cklmxeagq0d7i17t62ir9ejrp'
};

const setup = (p) => {
    p5 = p;

    const mappa = new Mappa('Mapbox', key);
    const canvas = p.createCanvas(window.innerWidth, window.innerHeight);

    if (!window.myMap) {
        window.myMap = mappa.tileMap(options);
        window.myMap.overlay(canvas);
        setTimeout(() => {
            window.myMap.map.options.inertia = false;
            window.myMap.map.options.maxZoom = 7;
            window.myMap.map.options.minZoom = 4;
        }, 500)
    }

    
    p.myMap = window.myMap;
    p.myMap.onChange(() => p.shouldDraw = true);


    p.textFont(p.fontFamily);
}

export default setup;