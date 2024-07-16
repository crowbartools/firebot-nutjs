"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let libnut;
if (process.platform === 'darwin') {
    libnut = require("osx/libnut.node");
}
else if (process.platform === 'linux') {
    libnut = require("linux/libnut.node");
}
else if (process.platform === 'win32') {
    libnut = require("windows/libnut.node");
}
else {
    throw new Error('unsupported platform');
}
exports.default = libnut;
