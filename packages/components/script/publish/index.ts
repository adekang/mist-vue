import { series } from 'gulp'
import run from '../utils/run'
import { pkgPath } from '../utils/paths'

export async function publishComponent() {
  await run('release-it', `${pkgPath}/mist-vue`)
}
export default series(async () => publishComponent())
