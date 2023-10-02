// expreionn Falsy:{false,0,null,undefined,Nan,""}

let p=null;
let v=true;
test("falsy test is",()=>{
    expect(p).toBeFalsy();
    expect(p).not.toBeTruthy();
})
