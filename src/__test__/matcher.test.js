let myvalue=1;
let myValueGrant=5;
let myValueString= 'Krystian';
let animals= ["lion", "dragon", "zebra", "tiger"];
test("Matcher",()=>{
    expect(myvalue).toBe(1);
    expect(myvalue).toEqual(1);

    //plus grand que
    expect(myValueGrant).toBeGreaterThan(2);
    expect(myValueGrant).toBeLessThanOrEqual( 6)

    //Matcher String
    expect(myValueString).toMatch(/Kry/i)
    //Contains String
    expect(animals).toContain("tiger")

})