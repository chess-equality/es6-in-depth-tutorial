import { describe, expect, it } from 'vitest'
import { formatModuleTitle } from './utils.js'

describe('formatModuleTitle', () => {
  it('capitalizes each word in a title', () => {
    expect(formatModuleTitle('modern javascript essentials')).toBe(
      'Modern Javascript Essentials'
    )
  })

  it('returns an empty string for falsy input', () => {
    expect(formatModuleTitle('')).toBe('')
    expect(formatModuleTitle(null)).toBe('')
  })
})
