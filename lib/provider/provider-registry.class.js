"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const libnut_mouse_class_1 = __importDefault(require("./native/libnut-mouse.class"));
const libnut_keyboard_class_1 = __importDefault(require("./native/libnut-keyboard.class"));
const log_provider_interface_1 = require("./log-provider.interface");
const noop_log_provider_class_1 = require("./log/noop-log-provider.class");
class DefaultProviderRegistry {
    constructor() {
        this.getKeyboard = () => {
            if (this._keyboard) {
                return this._keyboard;
            }
            const error = new Error(`No KeyboardProvider registered`);
            this.getLogProvider().error(error);
            throw error;
        };
        this.registerKeyboardProvider = (value) => {
            this._keyboard = value;
            this.getLogProvider().trace("Registered new keyboard provider", value);
        };
        this.getMouse = () => {
            if (this._mouse) {
                return this._mouse;
            }
            const error = new Error(`No MouseProvider registered`);
            this.getLogProvider().error(error);
            throw error;
        };
        this.registerMouseProvider = (value) => {
            this._mouse = value;
            this.getLogProvider().trace("Registered new mouse provider", value);
        };
        this.getLogProvider = () => {
            if (this._logProvider) {
                return this._logProvider;
            }
            return new noop_log_provider_class_1.NoopLogProvider();
        };
        this.registerLogProvider = (value) => {
            this._logProvider = (0, log_provider_interface_1.wrapLogger)(value);
            this.getLogProvider().trace("Registered new log provider", value);
        };
    }
}
const providerRegistry = new DefaultProviderRegistry();
providerRegistry.registerKeyboardProvider(new libnut_keyboard_class_1.default());
providerRegistry.registerMouseProvider(new libnut_mouse_class_1.default());
providerRegistry.registerLogProvider(new noop_log_provider_class_1.NoopLogProvider());
exports.default = providerRegistry;
