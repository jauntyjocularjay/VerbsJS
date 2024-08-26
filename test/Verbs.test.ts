
import {
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
} from '../Verbs'

describe('Verbs.ts', () => {
    describe('contains', () => {
        it('Implicit form', () => {
            expect(contains()).toBe('contains')
        })
        it('Affirmative form', () => {
            expect(contains(true)).toBe('contains')
        })
        it('Negatory form', () => {
            expect(contains(false)).toBe('does NOT contain')
        })
    })

    describe('defined', () => {
        it('Implicit form', () => {
            expect(defined()).toBe('defined')
        })
        it('Affirmative form', () => {
            expect(defined(true)).toBe('defined')
        })
        it('Negatory form', () => {
            expect(defined(false)).toBe('undefined')
        })
    })

    describe('did', () => {
        it('Implicit form', () => {
            expect(did()).toBe('did')
        })
        it('Affirmative form', () => {
            expect(did(true)).toBe('did')
        })
        it('Negatory form', () => {
            expect(did(false)).toBe('did NOT')
        })
    })

    describe('does', () => {
        it('Implicit form', () => {
            expect(does()).toBe('does')
        })
        it('Affirmative form', () => {
            expect(does(true)).toBe('does')
        })
        it('Negatory form', () => {
            expect(does(false)).toBe('does NOT')
        })
    })

    describe('have', () => {
        it('Implicit form', () => {
            expect(have()).toBe('have')
        })
        it('Affirmative form', () => {
            expect(have(true)).toBe('have')
        })
        it('Negatory form', () => {
            expect(have(false)).toBe('NOT have')
        })
    })

    describe('has', () => {
        it('Implicit form', () => {
            expect(has()).toBe('has')
        })
        it('Affirmative form', () => {
            expect(has(true)).toBe('has')
        })
        it('Negatory form', () => {
            expect(has(false)).toBe('does NOT have')
        })
    })

    describe('is', () => {
        it('Implicit form', () => {
            expect(is()).toBe('is')
        })
        it('Affirmative form', () => {
            expect(is(true)).toBe('is')
        })
        it('Negatory form', () => {
            expect(is(false)).toBe('is NOT')
        })
    })

    describe('matches', () => {
        it('Implicit form', () => {
            expect(matches()).toBe('matches')
        })
        it('Affirmative form', () => {
            expect(matches(true)).toBe('matches')
        })
        it('Negatory form', () => {
            expect(matches(false)).toBe('does NOT match')
        })
    })

    describe('recognizes', () => {
        it('Implicit form', () => {
            expect(recognizes()).toBe('recognizes')
        })
        it('Affirmative form', () => {
            expect(recognizes(true)).toBe('recognizes')
        })
        it('Negatory form', () => {
            expect(recognizes(false)).toBe('does NOT recognize')
        })
    })

    describe('Throws an error', () => {
        it('Implicit form', () => {
            expect(throwsAnError()).toBe('successfully threw an error')
        })
        it('Affirmative form', () => {
            expect(throwsAnError(true)).toBe('successfully threw an error')
        })
        it('Negatory form', () => {
            expect(throwsAnError(false)).toBe('did NOT throw an error')
        })
    })




})