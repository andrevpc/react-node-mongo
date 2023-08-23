function validaCpf(cpf) {
    if (!cpf) return false;

    const cpfSplit = cpf.replaceAll('.', '').replace('-', '')
    if (cpfSplit.length != 11) return false

    var isSequencial = true
    for (let i = 1; i < cpfSplit.length; i++) {
        if (cpfSplit[i] != cpfSplit[i - 1])
            isSequencial = false
    }

    if (isSequencial) return false

    var somaDig1 = 0;
    for (let i = 0; i < cpfSplit.length - 2; i++) {
        somaDig1 += (Number(cpfSplit[i]) * (10 - i));
    }

    if ((11 - (somaDig1 % 11)) > 9)
        somaDig1 = 0
    else
        somaDig1 = 11 - (somaDig1 % 11)

    var somaDig2 = 0;
    for (let i = 0; i < cpfSplit.length - 1; i++) {
        somaDig2 += Number(cpfSplit[i]) * (11 - i);
    }

    if ((11 - (somaDig2 % 11)) != cpfSplit[10]) return false

    return true
}

module.exports = { validaCpf }