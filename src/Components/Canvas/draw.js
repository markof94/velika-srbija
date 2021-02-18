import territories from '../../Data/territories.json'

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

    console.log('drawin')

    p5.clear();
    const territory = findTerritory(year);

    if (territory.length === 0) return;

    territory.countries.forEach(country => {
        const coordinates = country.coordinates;


        p5.fill(country.color);
        p5.stroke("#000000");
        p5.strokeWeight(0.5);

        p5.beginShape();

        coordinates.forEach(coordinate => {
            const lng = coordinate[0];
            const lat = coordinate[1];
            const pos = p5.myMap.latLngToPixel(lat, lng);
            p5.vertex(pos.x, pos.y);
        });

        p5.endShape();
    });

    p5.shouldDraw = false;


}

export default draw;