# CarlosGameOfLife

NodeJs implementaion of the [Game Of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) version in Wikipedia

There is a recursive method in start.js, runGeneration(), using a setTimeout() of 1 second.  Lower the timeout for faster rendering. 

## Run command
node [start.js](https://github.com/ctarmor/CarlosGameOfLife/blob/master/start.js)

## Unit Test command
npm test



## Implemention Overview

There are 2 surfaces available. Each surface is statically
preloaded with all cells, and vector coordinates to all the neighbours
for each cell.

One surface is live, while the other one is a cache for the next generation. 

Each cell is the following JSON object:
<pre>
{
    livecell: !null == live | null == dead,  
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

There is a print() method where we can switch to display the number of neighbours instead of the square.

![Alt text](/Screenshot.png "Optional Title")

