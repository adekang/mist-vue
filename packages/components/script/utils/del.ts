import shell from 'shelljs'

export default function delPath(rmFiles: string[]) {
  rmFiles.forEach((rmFile) => {
    shell.rm('-rf', `../../../mist-vue/${rmFile}`)
  })
}
