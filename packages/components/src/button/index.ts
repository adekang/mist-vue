import _Button from "./button.vue";
import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

// app.use 注册
const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    //注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};


// 具名导出
export const Button = withInstall(_Button);

// 默认导出
export default Button;
// export { default as MButton } from './button.vue';
