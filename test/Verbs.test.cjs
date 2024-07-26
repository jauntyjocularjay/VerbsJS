
const {
    getCounter,
    throwsAnError,
    contains,
    defined,
    did,
    does,
    have,
    has,
    is,
    matches,
    recognizes
} = require('../Verbs.cjs')

describe('Verbs.cjs', () => {
    describe('Affirmative Verbs', () => {
        describe('return affirmative verbs by default', () => {
            it('throwsAnError()', () => {
                expect(throwsAnError()).toBe('successfully threw an error')
            })

            it('contains()', () => {
                expect(contains()).toBe('contains')
            })

            it('defined()', () => {
                expect(defined()).toBe('defined')
            })

            it('did()', () => {
                expect(did()).toBe('did')
            })

            it('does()', () => {
                expect(does()).toBe('does')
            })

            it('have()', () => {
                expect(have()).toBe('have')
            })

            it('has()', () => {
                expect(has()).toBe('has')
            })

            it('is()', () => {
                expect(is()).toBe('is')
            })

            it('matches()', () => {
                expect(matches()).toBe('matches')
            })

            it('recognizes()', () => {
                expect(recognizes()).toBe('recognizes')
            })
        })
        describe('return affirmative verbs when true', () => {
            it('throwsAnError(true)', () => {
                expect(throwsAnError(true)).toBe('successfully threw an error')
            })

            it('contains(true)', () => {
                expect(contains(true)).toBe('contains')
            })

            it('defined(true)', () => {
                expect(defined(true)).toBe('defined')
            })

            it('did(true)', () => {
                expect(did(true)).toBe('did')
            })

            it('does(true)', () => {
                expect(does(true)).toBe('does')
            })

            it('have(true)', () => {
                expect(have(true)).toBe('have')
            })

            it('has(true)', () => {
                expect(has(true)).toBe('has')
            })

            it('is(true)', () => {
                expect(is(true)).toBe('is')
            })

            it('matches(true)', () => {
                expect(matches(true)).toBe('matches')
            })

            it('recognizes(true)', () => {
                expect(recognizes(true)).toBe('recognizes')
            })
        })
    })
    describe('Negatory verbs', () => {
        describe('return affirmative verbs when false', () => {
            it('throwsAnError(false)', () => {
                expect(throwsAnError(false)).toBe('did NOT throw an error')
            })

            it('contains(false)', () => {
                expect(contains(false)).toBe('does NOT contain')
            })

            it('defined(false)', () => {
                expect(defined(false)).toBe('undefined')
            })

            it('did(false)', () => {
                expect(did(false)).toBe('did NOT')
            })

            it('does(false)', () => {
                expect(does(false)).toBe('does NOT')
            })

            it('have(false)', () => {
                expect(have(false)).toBe('NOT have')
            })

            it('has(false)', () => {
                expect(has(false)).toBe('does NOT have')
            })

            it('is(false)', () => {
                expect(is(false)).toBe('is NOT')
            })

            it('matches(false)', () => {
                expect(matches(false)).toBe('does not match')
            })

            it('recognizes(false)', () => {
                expect(recognizes(false)).toBe('does not recognize')
            })
        })})
})