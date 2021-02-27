# CarlosGameOfLife

NodeJs implementaion of the [Game Of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) version in Wikipedia


## Run command
node [start.js](https://github.com/ctarmor/CarlosGameOfLife/blob/master/start.js)

The is recursive method, runGeneration(), using a setTieout() of 1 second.  Lower the timeout if you want to see it rendering faster. 


## Implemention Overview

There are 2 surfaces available. Each surface is statically
preloaded with all cells, and vector coordinates to all the neighbours
for each cell.

One surface is live, while the other one is a cache for the next generation. 

Each cell is the following JSON object:
<pre>
{
    livecell: 1 == live | 0 == dead,
    row: number, 
    col: number,
    neighbours: [{
                     row: number
                     col: number },
                 {
                     row: number,
                     col: number }]
}
</pre>




