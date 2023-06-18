import run from "../utils/run";
import { pkgPath } from "../utils/paths";
// @ts-ignore
import { series } from "gulp";
export const publishComponent = async () => {
  run("release-it", `${pkgPath}/dist`);
};
export default series(async () => publishComponent());
