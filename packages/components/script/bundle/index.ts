import { dest, parallel, series, src } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import { componentPath, pkgPath } from '../utils/paths'
import delPath from '../utils/delpath'
import run from '../utils/run'

// import less from "gulp-less";

const sass = gulpSass(dartSass)

export function removeDist() {
  console.log('删除目录...')
  return delPath(`${pkgPath}/mist-vue`)
}

// 打包样式
// sass样式
export function buildSassStyle() {
  console.log('打包sass样式ing...')
  return src(`${componentPath}/src/**/style/index.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/mist-vue/lib/src`))
    .pipe(dest(`${pkgPath}/mist-vue/es/src`))
}

// less 样式
// export function buildLessStyle() {
//   return src(`${componentPath}/src/**/style/**.less`)
//     .pipe(less())
//     .pipe(autoprefixer())
//     .pipe(dest(`${pkgPath}/mist-vue/lib/src`))
//     .pipe(dest(`${pkgPath}/mist-vue/es/src`))
// }

// 打包组件
export async function buildComponent() {
  console.log('打包组件...')
  await run('pnpm run build:all', componentPath)
}

export default series(
  async () => removeDist(),
  parallel(
    async () => buildSassStyle(),
    async () => buildComponent(),
  ),
)
