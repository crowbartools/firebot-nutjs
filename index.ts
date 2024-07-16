import { KeyboardClass } from "./lib/keyboard.class";
import { MouseClass } from "./lib/mouse.class";
import providerRegistry from "./lib/provider/provider-registry.class";

export { Key } from "./lib/key.enum";
export { Button } from "./lib/button.enum";

const keyboard = new KeyboardClass(providerRegistry);
const mouse = new MouseClass(providerRegistry);

export {
  keyboard,
  mouse,
};
