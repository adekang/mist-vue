import { resolve } from 'node:path'
import fs from 'fs-extra'
import { pkgPath } from './paths'

// 保留的文件
const stayFile = ['package.json', 'README.md']

async function delPath(path: string) {
  let files: string[] = []

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)

    for (const file of files) {
      const curPath = resolve(path, file)
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file !== 'node_modules')
          await delPath(curPath)
      }
      else {
        // delete file
        if (!stayFile.includes(file))
          fs.unlinkSync(curPath)
      }
    }
    if (path !== `${pkgPath}/mist-vue`)
      fs.rmdirSync(path)
  }
}

export default delPath
