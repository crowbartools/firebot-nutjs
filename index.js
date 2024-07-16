"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mouse = exports.keyboard = exports.Button = exports.Key = void 0;
const keyboard_class_1 = require("./lib/keyboard.class");
const mouse_class_1 = require("./lib/mouse.class");
const provider_registry_class_1 = __importDefault(require("./lib/provider/provider-registry.class"));
var key_enum_1 = require("./lib/key.enum");
Object.defineProperty(exports, "Key", { enumerable: true, get: function () { return key_enum_1.Key; } });
var button_enum_1 = require("./lib/button.enum");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return button_enum_1.Button; } });
const keyboard = new keyboard_class_1.KeyboardClass(provider_registry_class_1.default);
exports.keyboard = keyboard;
const mouse = new mouse_class_1.MouseClass(provider_registry_class_1.default);
exports.mouse = mouse;
