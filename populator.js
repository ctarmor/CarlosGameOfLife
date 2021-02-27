module.exports = {
    start,
}

// ------------------------------------------------
function start(livesurface, nextsurface) {
    const sqSz = livesurface.lenght;

    livesurface.forEach(row => {
        row.forEach(cell => {
            nextsurface[cell.row][cell.col ].livecell = generateCell(livesurface, cell);
        });
    }); 

    return nextsurface;
}



// ------------------------------------------------
function generateCell(livesurface, cell) {
    const ls = livesurface;

    // use reducer to linearly calculate neighbours.
    const reducer = (accumulator, neigboughCell) => accumulator + ls[neigboughCell.row][neigboughCell.col].livecell;

    // Calculate the neightbours count
    const liveNeighbours = cell.neighbours.reduce(reducer, 0);

    // Game of life Rules
    // https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

    // Any live cell with two or three live neighbours survives.
    if (cell.livecell == 1) {
        if (liveNeighbours == 2 || liveNeighbours == 3) {
            return 1;  
        }
    }

    // Any dead cell with three live neighbours becomes a live cell.
    if (cell.livecell == 0) {
        if (liveNeighbours == 3) {
            return 1;
        }
    }

    // All other live cells die in the next generation.Similarly, all other dead cells stay dead.
    return 0; 
}