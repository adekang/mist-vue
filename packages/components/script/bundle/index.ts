import gulp, { dest, parallel, series, src } from 'gulp'
import babel from 'gulp-babel'
import rename from 'gulp-rename'
import autoprefixer from 'gulp-autoprefixer'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import { componentPath, pkgPath } from '../utils/paths'
import delPath from '../utils/delpath'
import run from '../utils/run'

import babelEsConfig from './babelConfig'

const sass = gulpSass(dartSass)

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

// 打包 resolver
// 定义一个任务来处理 TypeScript 文件
export function buildMistResolver() {
  return gulp.src(`${componentPath}/script/utils/MistResolver.ts`)
    .pipe(babel(babelEsConfig as any)) // 使用 gulp-babel 转换文件
    .pipe(rename({ extname: '.mjs' }))
    .pipe(dest(`${pkgPath}/mist-vue`)) // 指定输出目录
}

export default series(
  async () => removeDist(),
  parallel(
    async () => buildSassStyle(),
    async () => buildComponent(),
    async () => buildMistResolver(),
  ),
)
