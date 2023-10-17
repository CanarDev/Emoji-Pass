const emojis = require('./emoji-list');

function generatePassword(length) {
    if (typeof length !== "number" || length <= 0) {
        throw new Error("Invalid password length specified")
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        password += emojis[randomIndex];
    }

    return password;
}

module.exports = generatePassword;