import {additional,soustraction,multiplication} from '../operations/addition'

describe("Opertaion test ", () => {
    test("Addion", () => {
        expect( additional(1,2)).toBe(3);
        expect( additional(8,13)).toBe(21);
    });

    test("Soustraction", () => {
        expect(soustraction(1,2)).toBe(-1);
        expect(soustraction(586,41)).toBe(545);

    });
    test("Multplication", () => {
        expect(multiplication(0,2)).toBe(0);
        expect(soustraction(586,41)).toBe(545);

    });
});