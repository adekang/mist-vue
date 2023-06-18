import run from "../utils/run";
import { pkgPath } from "../utils/paths";
// @ts-ignore
import { series } from "gulp";
export const publishComponent = async () => {
  run("release-it", `${pkgPath}/mist-vue`);
};
export default series(async () => publishComponent());
