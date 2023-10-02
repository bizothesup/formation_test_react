import {additional,soustraction,multiplication} from '../operations/addition'
let myVariable =1;
beforeAll(() => {
  console.log('This before All function')
})
afterAll(() => {
    console.log('This after All function')
})
beforeEach(()=>{
    console.log('je suis au début des test');
    myVariable=1;
})

afterEach(()=>{
    console.log('je suis à la fin des test')
    console.log('My variable',myVariable)
    myVariable--;
})
describe("Opertaion test ", () => {
    test.only("Addion", () => {
        expect( additional(1,2)).toBe(3);
        expect( additional(8,13)).toBe(21);
        console.log("operation addtion");
        myVariable++;
    });

    test.skip("Soustraction", () => {
        expect(soustraction(1,2)).toBe(-1);
        expect(soustraction(586,41)).toBe(545);
        console.log("operation soustraction");

    });
    test("Multplication", () => {
        expect(multiplication(0,2)).toBe(0);
        expect(soustraction(586,41)).toBe(545);
        console.log("operation Multiplication");
    },1000);
});