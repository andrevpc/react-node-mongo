const isPrime = require("./isPrime");

describe('Prime', () => {
    it('Must return false incase the parameter is 1', () => {
        const res = isPrime(1);
        expect(res).toBe(false);
    });
    it('Must return true incase the parameter is 2', () => {
        const res = isPrime(2);
        expect(res).toBe(true);
    });
    it('Must return true incase the parameter is 89', () => {
        const res = isPrime(89);
        expect(res).toBe(true);
    });
    it('Must return false incase the parameter is 25', () => {
        const res = isPrime(25);
        expect(res).toBe(false);
    });
    it('Must return false incase the parameter is 4', () => {
        const res = isPrime(4);
        expect(res).toBe(false)
    })
});