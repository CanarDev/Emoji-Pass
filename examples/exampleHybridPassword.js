import {generateHybridPassword} from '../index.js';

const hybridPassword = generateHybridPassword(10);
console.log("Hybrid Password: " + hybridPassword);