const fibonacci = require("./fibonnacci");

describe('Fibonacci', () => {
    it('Deve retornar 1 caso receba 1 de parametro', () => {
        const res = fibonacci(1);
        expect(res).toBe(1);
    });
    it('Deve retornar 0 caso receba 0 de parametro', () => {
        const res = fibonacci(0);
        expect(res).toBe(0);
    });
    it('Deve retornar 0 caso receba menor que 0', () => {
        const res = fibonacci(-1);
        expect(res).toBe(0);
    });
    it('Deve retornar 8 caso receba 6 de parametro', () => {
        const res = fibonacci(6);
        expect(res).toBe(8)
    })
});