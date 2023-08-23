const { validaCpf } = require("../../common/validaCpf")

describe('Valida Cpf', () => {    
    it('deve testar o cpf: 502.348.450-58 e retornar true', () => {
        const res = validaCpf("502.348.450-58");
        
        expect(res).toBeTruthy();
    })

    it('deve testar o cpf: 502.348.450-59 e retornar false', () => {
        const res = validaCpf("502.348.450-59");
        
        expect(res).toBeFalsy();
    })

    it('deve testar o cpf: 111.111.111-11 e retornar false', () => {
        const res = validaCpf("111.111.111-11");
        
        expect(res).toBeFalsy();
    })

    it('deve testar o cpf: 111 e retornar false', () => {
        const res = validaCpf("111");
        
        expect(res).toBeFalsy();
    })

    it('deve testar o cpf: null e retornar false', () => {
        const res = validaCpf();
        
        expect(res).toBeFalsy();
    })

    it('deve testar o cpf: 251.777.280-05 e retornar true', () => {
        const res = validaCpf("251.777.280-05");
        
        expect(res).toBeTruthy();
    })
})