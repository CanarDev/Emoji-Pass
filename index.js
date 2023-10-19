import emojis from './emoji-list.js';

function generateEmojiPassword(length) {
    if (typeof length !== "number" || length <= 0) {
        throw new Error("Invalid password length specified");
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        password += emojis[randomIndex];
    }

    return password;
}

function generateHybridPassword(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]:;<>,.?~\\/-';
    let password = '';

    for (let i = 0; i < length; i++) {
        let aleatory =  Math.floor(Math.random() * 2)
        if (aleatory === 0) {
            const randomEmojiIndex = Math.floor(Math.random() * emojis.length);
            password += emojis[randomEmojiIndex];
        } else {
            const randomCharIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomCharIndex];
        }
    }

    return password;
}

export { generateEmojiPassword, generateHybridPassword };