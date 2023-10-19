import { generateEmojiPassword, generateHybridPassword } from '../index.js';
import emojis from '../emoji-list.js';

describe('Emoji Password Generator', () => {
    const length = 5;

    describe('generateEmojiPassword', () => {
        it('Should generate a password of specified length with only emojis', () => {
            const password = generateEmojiPassword(length);
            expect(password.match(/./gu).length).toEqual(length); // because emojis are two characters long
            for (let char of password) {
                expect(emojis).toContain(char);
            }
        });
    });

    describe('generateHybridPassword', () => {
        it('Should generate a password of specified length with emojis and potentially alphanumeric characters and symbols', () => {
            const password = generateHybridPassword(length);
            expect(password.match(/./gu).length).toBeGreaterThanOrEqual(length);
        });
    });
});