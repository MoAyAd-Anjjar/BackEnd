"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// Construct absolute path to .migs file
const migsFilePath = path_1.default.join(__dirname, '..', 'migs', 'file.migs');
app.get('/', (_req, res) => {
    res.send(`Path to MIGS file: ${migsFilePath}`);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
