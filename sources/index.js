var pedido = {
    tamanho: undefined,
    borda: undefined,
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

switch (pedido.tamanho) {
    case "pequena":
        var valorTamanho = 25;
        break;

    case "media":
        var valorTamanho = 30;
        break;

    case "gigante":
        var valorTamanho = 40;
        break;

    default:
        var valorTamanho = 45;
        break;
}