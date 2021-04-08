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

switch (pedido.bebida) {
    case "coca cola":
        var valorBebida = 12;
        break;

    case "fanta":
        var valorBebida = 10;
        break;

    case "guaraná antártica":
        var valorBebida = 10;
        break;

    case "h2o":
        var valorBebida = 8
        break;

    default:
        var valorBebida = 7
        break;
}

switch (pedido.borda){
    case "gorgonzola":
        var valorBorda = 10 ;
        break;

    case "provolone":
        var valorBorda = 8 ;
        break;

    case "catupiry" || "cheddar":
        var valorBorda = 5 ;
        break;

    case "sem borda":
        var valorBorda = 0 ;
        break;

    default:
        break;
}

switch (entrega.tipo){
    case "retirada no balcão":
        var valorEntrega = 0;
        break;
    
    default:
        var valorEntrega = 5;
        break;
}

var valorFinal = valorBebida + valorBorda + valorEntrega + valorTamanho;

var tipoDePagamento = undefined;

if(tipoDePagamento == "dinheiro"){
    let troco = prompt("Você precisará de troco?\n\nS-Sim\nN-Não");
    var trocoValidado = validarTroco(troco.toLowerCase());

    switch (trocoValidado) {
        case "s":
            var pagamento = parseInt(prompt("Você precisará de troco para quanto?"));

            var pagamentoValidado = validarPagamento(pagamento);
            break;
    
        default:
            break;
    }
    var trocoFinal = pagamentoValidado - valorFinal;
}

var confirmarPedido = prompt("Confirmar pedido? \n[S] \n[N] ").toUpperCase().substr(0, 1);

if (confirmarPedido == "S"){
    alert("Pedido confirmado! \nSeu pedido chegará em até 90 minutos");

}
else{
    alert("Pedido cancelado");
    
}



function validarTroco(troco){
    while (troco != 's' && troco != 'n'){
        alert("Resposta inválida!\n\nPor favor digite uma resposta válida");
        troco = prompt("Você precisará de troco?\n\nS-Sim\nN-Não");
    }
    return troco;
}

function validarPagamento(pagamento){
    while(isNaN(pagamento)){
        alert("Resposta inválida!\n\nPor favor digite uma resposta válida");
        pagamento = parseInt(prompt("Você precisará de troco para quanto?"));
    }
    return pagamento;
}