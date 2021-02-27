const surface = require('./surface');
const populator = require('./populator');

//
// Overview:
// There are 2 surfaces available. Each surface is statically
// preloaded with all cells, and vector coordinates to all the neighbours
// for each cell.
//
// One surface is live, while the other one is a cache for the next generation. 
// 
// Each cell is the following objec:
// {
//     livecell: 1 == live | 0 == dead,
//     row: number, 
//     col: number,
//     neighbours: [{
//                      row: number
//                      col: number },
//                  {
//                      row: number,
//                      col: number }]
// }
//

const squareSz = 40;
const timerMs = 150;

// Init 2 identical working surfaces
var livesurface = surface.getNew(squareSz);
var nextsurface = surface.getNew(squareSz);

//--------------------------------------------
runGeneration();

//--------------------------------------------
function runGeneration() {
    let holdnext = livesurface;
    livesurface = populator.start(livesurface, nextsurface);
    nextsurface = holdnext;
    surface.print(livesurface);

    setTimeout(() => {
        runGeneration();
    }, timerMs);
}



 