module.exports = {
    start,
}

// ------------------------------------------------
function start(livesurface, nextsurface) {
    livesurface.forEach(row => {
        row.forEach(cell => {
            nextsurface[cell.row][cell.col].livecell = generateCell(livesurface, cell);
        });
    });

    return nextsurface;
}



// ------------------------------------------------
function generateCell(livesurface, cell) {
    const ls = livesurface;

    // use reducer to linearly calculate neighbours.
    const reducer = (accumulator, neigboughCell) => accumulator + (ls[neigboughCell.row][neigboughCell.col].livecell ? 1 : 0);

    // Calculate the neightbours count
    const liveNeighbours = cell.neighbours.reduce(reducer, 0);

    // Game of life Rules
    // https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

    // Any live cell with two or three live neighbours survives.
    // Any dead cell with three live neighbours becomes a live cell.
    if (liveNeighbours === 3) {
        return liveNeighbours;
    }

    if (cell.livecell && liveNeighbours === 2) {
        return liveNeighbours;
    }

    // All other live cells die in the next generation.Similarly, all other dead cells stay dead.
    return null;
}