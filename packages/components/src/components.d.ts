import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MButton: typeof components.Button;
    MInput: typeof components.MInput;
  }
}
export { };