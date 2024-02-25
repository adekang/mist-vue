import { dest, parallel, series, src } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import { componentPath, pkgPath } from '../utils/paths'
import delPath from '../utils/delpath'
import run from '../utils/run'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const sass = require('gulp-sass')(require('sass'))

export function removeDist() {
  return delPath(`${pkgPath}/mist-vue`)
}

// 打包样式
// sass样式
export function buildSassStyle() {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/mist-vue/lib/src`))
    .pipe(dest(`${pkgPath}/mist-vue/es/src`))
}

// 打包组件
export async function buildComponent() {
  await run('pnpm run build', componentPath)
}
export default series(
  async () => removeDist(),
  parallel(
    async () => buildSassStyle(),
    async () => buildComponent(),
  ),
)
