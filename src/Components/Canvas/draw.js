import territories from '../../Data/territories.json'
import special from '../../Data/Territories/special.json'
import colors from '../../Data/colors.json'

let p5 = null;

const findTerritory = (year) => {
    for (let i = territories.length - 1; i >= 0; i--) {
        if (territories[i].year <= year) {
            return territories[i]
        }
    }

    return [];
}

const draw = (p) => {
    p5 = p;
    if (!p.frameRate() || p.frameRate() < 2) return;


    drawBorders(p5.year);

}

const drawBorders = (year) => {
    if (!p5.shouldDraw) return;

    p5.clear();
    const territory = findTerritory(year);

    if (territory.countries.length === 0 && (!territory.specials || territory.specials.length === 0)) return;

    drawCountry(territory.countries);

    const specials = territory.specials || [];


    specials.forEach(s => {
        const color = territory.specialColor && Number.isInteger(s) ? territory.specialColor : null;
        drawCountry(special.filter(i => i.id === s), color);
        //drawCountry(special.filter(i => i.id));
    });


    p5.shouldDraw = false;
}

const drawCountry = (c, color) => {
    c.forEach(country => {
        const coordinates = country.coordinates;

        p5.fill(color ? getColor(color) : getColor(country.color));
        p5.stroke("rgba(0, 0, 0, 0.25)");
        p5.strokeWeight(0.5);
        p5.noStroke();

        p5.beginShape();

        coordinates.forEach(coordinate => {
            const lng = coordinate[0];
            const lat = coordinate[1];
            const pos = p5.myMap.latLngToPixel(lat, lng);
            p5.vertex(pos.x, pos.y);
        });

        p5.endShape();
    });
}

const getColor = (colorName = "serbia") => {
    const foundColor = colors.filter(c => c.name === colorName)[0];

    return foundColor ? foundColor.color : "rgba(255, 0, 0, 0.5)";
}

export default draw;