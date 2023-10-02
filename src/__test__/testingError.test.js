import {checkError} from '../errorgen/errors';

test("Tes for Error",()=> {
    expect(checkError).toThrow();
    expect(checkError).toThrow(Error);
})

test("Error to Compare Exception",()=> {
    expect(checkError).toThrow("Fatal mistake");
});

test("Error to Compare Exception is contain message",()=> {
    expect(checkError).toThrow(/Fatal/i);
});
