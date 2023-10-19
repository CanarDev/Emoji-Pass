import { generateEmojiPassword, generateHybridPassword } from './index.js';

const emojiPassword = generateEmojiPassword(10);
console.log("Emoji Password: " + emojiPassword);

const hybridPassword = generateHybridPassword(10);
console.log("Hybrid Password: " + hybridPassword);