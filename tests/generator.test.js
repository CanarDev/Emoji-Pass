const generatePassword = require('../index');

describe('Emoji Password Generator', () => {
    // This part of the test is used to check that the length of the generated password is indeed that expected (here 5)
    it('Should generate a password of specified length', () => {
        const length = 5;
        const password = generatePassword(length);
        // Length *2 beacause an emoji has 2 characters
        expect(password.length).toEqual(length*2);
    });
    // This part of the test is used to verify that the generated password only contains emojis
    it('Should generate a password with only emojis', () => {
        const password = generatePassword(5);
        const emojis = require('../emoji-list');
        for (let char of password) {
            expect(emojis).toContain(char);
        }
    });
});