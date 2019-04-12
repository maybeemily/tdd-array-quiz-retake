const { bigNumbers } = require('../lib/index');

describe('BIG test', ()=> {
    it('remove numbers less than 5 and modify phrase', ()=> {
        const numbers = [1, 4, 5, 15, 3, 12, 7];
        const result = bigNumbers(numbers);
        expect(result).toEqual(['Wow, 5 is big!', 'Wow, 15 is big!', 'Wow, 12 is big!', 'Wow, 7 is big!']);
    });
});
