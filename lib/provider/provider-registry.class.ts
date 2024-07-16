import { KeyboardProviderInterface } from "./keyboard-provider.interface";
import { MouseProviderInterface } from "./mouse-provider.interface";
import Mouse from "./native/libnut-mouse.class";
import Keyboard from "./native/libnut-keyboard.class";
import { LogProviderInterface, wrapLogger } from "./log-provider.interface";
import { NoopLogProvider } from "./log/noop-log-provider.class";
export interface ProviderRegistry {
  getKeyboard(): KeyboardProviderInterface;
  registerKeyboardProvider(value: KeyboardProviderInterface): void;
  getMouse(): MouseProviderInterface;
  registerMouseProvider(value: MouseProviderInterface): void;
  getLogProvider(): LogProviderInterface;
  registerLogProvider(value: LogProviderInterface): void;
}

class DefaultProviderRegistry implements ProviderRegistry {
  private _keyboard?: KeyboardProviderInterface;
  private _mouse?: MouseProviderInterface;
  private _logProvider?: LogProviderInterface;

  getKeyboard = (): KeyboardProviderInterface => {
    if (this._keyboard) {
      return this._keyboard;
    }
    const error = new Error(`No KeyboardProvider registered`);
    this.getLogProvider().error(error);
    throw error;
  };

  registerKeyboardProvider = (value: KeyboardProviderInterface) => {
    this._keyboard = value;
    this.getLogProvider().trace("Registered new keyboard provider", value);
  };

  getMouse = (): MouseProviderInterface => {
    if (this._mouse) {
      return this._mouse;
    }
    const error = new Error(`No MouseProvider registered`);
    this.getLogProvider().error(error);
    throw error;
  };

  registerMouseProvider = (value: MouseProviderInterface) => {
    this._mouse = value;
    this.getLogProvider().trace("Registered new mouse provider", value);
  };

  getLogProvider = (): LogProviderInterface => {
    if (this._logProvider) {
      return this._logProvider;
    }
    return new NoopLogProvider();
  };

  registerLogProvider = (value: LogProviderInterface): void => {
    this._logProvider = wrapLogger(value);
    this.getLogProvider().trace("Registered new log provider", value);
  };
}

const providerRegistry = new DefaultProviderRegistry();

providerRegistry.registerKeyboardProvider(new Keyboard());
providerRegistry.registerMouseProvider(new Mouse());
providerRegistry.registerLogProvider(new NoopLogProvider());

export default providerRegistry;
