
// -------------------------------------------------
function getNew(squareSz) {
    let surface = [];

    for (let row = 0; row < squareSz; row++) {
        const r = [];
        surface.push(r);

        for (let col = 0; col < squareSz; col++) {
            r.push({
                // Cache all neighbours and current cell location
                livecell: getRandomCellLife(),
                row: row,
                col: col, 
                neighbours: mapNeighbours(row, col, squareSz)
            });
        }
    }

    return surface;
}

// -------------------------------------------------
function getRandomCellLife() {
    min = Math.ceil(0); 
    max = Math.floor(1);
    return Math.random() > 0.5 ? 1 : 0;
}

// -------------------------------------------------
function mapNeighbours(row, col, squareSz) {
    const neighbours = [];

    // Calcualte the neighbours vector locations ahead of time
    for (let nr = row - 1; nr < row + 2; nr++) {
        for (let nc = col - 1; nc < col + 2; nc++) {

            // avoid edges
            if (nr > -1 && nc > -1 && nr < squareSz && nc < squareSz) { 
                neighbours.push({
                    row: nr,
                    col: nc
                });
            }
        }
    } 

    return neighbours;
}

// -------------------------------------------------
// https://jrgraphix.net/r/Unicode/2580-259F
const lifesymbol = '\u2580';

// -------------------------------------------------
function print(surface) {

    const output = surface
        .map(r => r.map(c => c.livecell == 1 ? lifesymbol : ' ').join(''))
        .join('\n')
        ;

    process.stdout.write('\033c');
    console.log(output);
}

module.exports = {
    getNew,
    print
}
 