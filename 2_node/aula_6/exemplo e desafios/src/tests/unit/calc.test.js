const { Soma, Subtracao, Multiplicacao, Divisao } = require("../../common/calc")

describe('Calculadora', () => {
    it('deve retornar o resultado da soma de 1+2', () => {
        const res = Soma(2, 1);
        
        expect(res).toBe(3);
    })
    it('deve retornar o resultado da subtração de 1-2', () => {
        const res = Subtracao(2, 1);
        
        expect(res).toBe(1);
    })
    it('deve retornar o resultado da multiplicação de 1*2', () => {
        const res = Multiplicacao(2, 1);
        
        expect(res).toBe(2);
    })
    it('deve retornar o resultado da divisão de 1/2', () => {
        const res = Divisao(2, 1);
        
        expect(res).toBe(2);
    })
})