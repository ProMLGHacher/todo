import { classNames } from "./classNames"

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with mods', () => {
        expect(classNames('someClass', ['mod1', 'mod2'])).toBe('someClass mod1 mod2')
    })

    test('with additional', () => {
        expect(classNames('someClass', { additional: true, hovered: false, scrollable: undefined })).toBe('someClass additional')
    })

    test('with additional and mods', () => {
        expect(classNames('someClass', ['mod1', 'mod2'], { additional: true, hovered: false, scrollable: undefined })).toBe('someClass mod1 mod2 additional')
    })

    test('with additional and mods reverse', () => {
        expect(classNames('someClass', { additional: true, hovered: false, scrollable: undefined }, ['mod1', 'mod2'])).toBe('someClass mod1 mod2 additional')
    })
})
