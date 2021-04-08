var pedido = {
    tamanho: undefined,
    borda: valorDaBorda,
    sabor1: undefined,
    sabor2: undefined,
    bebida: undefined
}

var entrega = {
    tipo: undefined,
    pagamento: undefined,
    nome: undefined,
    celular: undefined,
    rua: undefined,
    numero: undefined,
    complemento: undefined,
    bairro: undefined,
    referencia: undefined
}
const valorDaBorda = {
    gorgonzola: 10,
    provolone: 8,
    catupiry: 5,
    cheddar: 5,
    semBorda: 0
}

switch (pedido.tamanho) {
    case "pequena":
        var valorTamanho = 20;
        break;

    default:
        break;
}