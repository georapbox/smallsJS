/*global trim*/

(function () {
    'use strict';

    describe('strings/trim', function () {
        it('trim("     Hello    ") should have length 5', function () {
            expect(trim('    Hello   ').length).toEqual(5);
        });
    });
}());
