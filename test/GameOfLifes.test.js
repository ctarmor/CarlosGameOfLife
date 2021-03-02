var assert = require('assert');
const surface = require('./../surface');
const populator = require('./../populator');


function assertEmptyRow(target, row) {
    for (let i = 0; i < target[row].length; i++) {
        assert.equal(target[row][i].livecell, null);
    }
}

describe('Test 1 generation run', function () {
    it('should run one itration', function () {

        let livesurface = surface.getNew(5, false);
        let nextsurface = surface.getNew(5, false);

        // Initial
        //  0 0 0 0 0
        //  0 0 0 0 0
        //  0 1 1 1 0
        //  0 0 0 0 0
        //  0 0 0 0 0
        livesurface[2][1].livecell = 1;
        livesurface[2][2].livecell = 1;
        livesurface[2][3].livecell = 1;

        const target = populator.start(livesurface, nextsurface);

        // Expected
        //  0 0 0 0 0
        //  0 0 3 0 0
        //  0 0 2 0 0
        //  0 0 3 0 0
        //  0 0 0 0 0

        //console.log(target);

        // 0 Row
        assertEmptyRow(target, 0);

        // 1st Row
        assert.equal(target[1][0].livecell, null);
        assert.equal(target[1][1].livecell, null);
        assert.equal(target[1][2].livecell, 3);
        assert.equal(target[1][3].livecell, null);
        assert.equal(target[1][4].livecell, null);

        // 2nd Row
        assert.equal(target[2][0].livecell, null);
        assert.equal(target[2][1].livecell, null);
        assert.equal(target[2][2].livecell, 2); 
        assert.equal(target[2][3].livecell, null);
        assert.equal(target[2][4].livecell, null);

        // 3rd Row
        assert.equal(target[3][0].livecell, null);
        assert.equal(target[3][1].livecell, null);
        assert.equal(target[3][2].livecell, 3);
        assert.equal(target[3][3].livecell, null);
        assert.equal(target[3][4].livecell, null);

        // 4th Row
        assertEmptyRow(target, 4);
    });
});