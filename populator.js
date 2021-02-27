module.exports = {
    start,
}

// ------------------------------------------------
function start(livesurface, nextsurface) {
    const sqSz = livesurface.lenght;

    livesurface.forEach(row => {
        row.forEach(cell => {
            nextsurface[cell.row][cell.col ].livecell = generateCell(livesurface, cell);
    // if (cell.row == 0 && cell.col == 0) {
    //     console.log('nextsurface: ' + JSON.stringify(nextsurface[cell.row][cell.col]));
    // }

        });

    }); 

    return nextsurface;
}



// ------------------------------------------------
function generateCell(livesurface, cell) {
    const ls = livesurface;

    const reducer = (accumulator, neigboughCell) => accumulator + ls[neigboughCell.row][neigboughCell.col].livecell;

    // Calculate the neightbours
    const liveNeighbours = cell.neighbours.reduce(reducer, 0);

    // if (cell.row == 0 && cell.col == 0) {
    //     console.log('Nbourg: ' + JSON.stringify(cell));
    //     console.log('Nbourgs: ' + liveNeighbours);
    // }

    // Game of life Rules
    // https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

    // Any live cell with two or three live neighbours survives.
    if (cell.livecell == 1) {
        if (liveNeighbours-1 == 2 || liveNeighbours-1 == 3) {
    // if (cell.row == 0 && cell.col == 0) {
    //             console.log(cell.livecell  + ' Stay Alive');
    //         }
            return 1;  
        }
    }

    // Any dead cell with three live neighbours becomes a live cell.
    if (cell.livecell == 0) {
        if (liveNeighbours == 3) {
    // if (cell.row == 0 && cell.col == 0) {
    //             console.log(cell.livecell + ' Dead to Alive');
    //         }
            return 1;
        }
    }

    // All other live cells die in the next generation.Similarly, all other dead cells stay dead.
    // if (cell.row == 0 && cell.col == 0) {
    //     console.log(cell.livecell + ' Dead');
    // }
    return 0; 
}