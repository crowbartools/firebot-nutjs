export interface Point {
    x: number;
    y: number
}

export interface libnut {

    setMouseDelay(delay: number): void;
    getMousePos(): Point;
    mouseClick(button?: string, double?: boolean): void;
    mouseToggle(down?: string, button?: string): void;
    moveMouse(x: number, y: number): void;
    scrollMouse(x: number, y: number): void;
    setKeyboardDelay(ms: number): void;
    keyTap(key: string, modifier?: string | string[]): void;
    keyToggle(
        key: string,
        down: string,
        modifier?: string | string[]
    ): void;

    typeString(string: string): void;
}

let libnut : libnut;
if (process.platform === 'darwin') {
    libnut = require("osx/libnut.node");

} else if (process.platform === 'linux') {
    libnut = require("linux/libnut.node");

} else if (process.platform === 'win32') {
    libnut = require("windows/libnut.node");

} else {
    throw new Error('unsupported platform');
}

export default libnut;