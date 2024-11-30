import { isString } from 'lodash-es'

class MError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'MError'
  }
}

export function throwError(scope: string, message: string): never {
  throw new MError(`[${scope}] : ${message}`)
}

export function debugWarn(error: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: Error | string, message?: string): void {
  const err = isString(scope) ? new MError(`[${scope}] : ${message}`) : scope
  console.warn(err)
}
