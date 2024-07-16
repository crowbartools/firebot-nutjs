"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const libnut_core_1 = __importDefault(require("../../libnut-core"));
const button_enum_1 = require("../../button.enum");
const point_class_1 = require("../../point.class");
class MouseAction {
    constructor() { }
    static buttonLookup(btn) {
        return this.ButtonLookupMap.get(btn);
    }
    setMouseDelay(delay) {
        libnut_core_1.default.setMouseDelay(delay);
    }
    setMousePosition(p) {
        return new Promise((resolve, reject) => {
            try {
                libnut_core_1.default.moveMouse(p.x, p.y);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    currentMousePosition() {
        return new Promise((resolve, reject) => {
            try {
                const position = libnut_core_1.default.getMousePos();
                resolve(new point_class_1.Point(position.x, position.y));
            }
            catch (e) {
                reject(e);
            }
        });
    }
    click(btn) {
        return new Promise((resolve, reject) => {
            try {
                libnut_core_1.default.mouseClick(MouseAction.buttonLookup(btn));
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    doubleClick(btn) {
        return new Promise((resolve, reject) => {
            try {
                libnut_core_1.default.mouseClick(MouseAction.buttonLookup(btn), true);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    leftClick() {
        return this.click(button_enum_1.Button.LEFT);
    }
    rightClick() {
        return this.click(button_enum_1.Button.RIGHT);
    }
    middleClick() {
        return this.click(button_enum_1.Button.MIDDLE);
    }
    pressButton(btn) {
        return new Promise((resolve, reject) => {
            try {
                libnut_core_1.default.mouseToggle("down", MouseAction.buttonLookup(btn));
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    releaseButton(btn) {
        return new Promise((resolve, reject) => {
            try {
                libnut_core_1.default.mouseToggle("up", MouseAction.buttonLookup(btn));
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    scrollUp(amount) {
        return new Promise((resolve, reject) => {
            try {
                libnut_core_1.default.scrollMouse(0, amount);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    scrollDown(amount) {
        return new Promise((resolve, reject) => {
            try {
                libnut_core_1.default.scrollMouse(0, -amount);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    scrollLeft(amount) {
        return new Promise((resolve, reject) => {
            try {
                libnut_core_1.default.scrollMouse(-amount, 0);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
    scrollRight(amount) {
        return new Promise((resolve, reject) => {
            try {
                libnut_core_1.default.scrollMouse(amount, 0);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    }
}
exports.default = MouseAction;
MouseAction.ButtonLookupMap = new Map([
    [button_enum_1.Button.LEFT, "left"],
    [button_enum_1.Button.MIDDLE, "middle"],
    [button_enum_1.Button.RIGHT, "right"],
]);
