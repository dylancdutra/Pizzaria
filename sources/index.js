//Mostrar que o pedido foi efetuado com sucesso e o codigo do pedido.
function fecharPedido() {
    
    document.getElementById("botoes").style.display = 'none';
    document.getElementById("resumo").style.display = 'none';

    let divNota = document.createElement("div");
    divNota.id = "nota";
    let agradecimentos = document.createTextNode(`Agradecemos sua preferência senhor(a) ${document.getElementById('nome').value}.
                                                 O codigo do seu pedido é: ${Math.floor(Math.random() * 150)}.
                                                 O tempo estimado para entrega é de até 90 minutos.`)
    
    divNota.appendChild(agradecimentos)
    let divMenu = document.getElementById("menu")
    document.body.insertBefore(divNota, divMenu)
}


function fazerAlteracao() {
    //apagar o outro pedido
    let pedidoAntigo = document.getElementById("resumo");
    pedidoAntigo.parentNode.removeChild(pedidoAntigo);

    //esconder pedido e aparecer o menu
    document.getElementById("botoes").style.display = 'none'
    document.getElementById("menu").style.display = 'block'

}

function mostrarResumo(pedido) {
    //Guardar o texto de cada input, o .value traz o custo e nao a opcao
    let nameTam = document.getElementById('tamanho')
    let nameBorda = document.getElementById('borda')
    let nameBebida = document.getElementById('bebida')
    let nameEntrega = document.getElementById('tipodeentrega')
    let escolhas = [
        nameTam.options[nameTam.selectedIndex].innerHTML,
        nameBorda.options[nameBorda.selectedIndex].innerHTML,
        document.getElementById('sabor').value,
        document.getElementById('sabor2').value,
        nameBebida.options[nameBebida.selectedIndex].innerHTML,
        nameEntrega.options[nameEntrega.selectedIndex].innerHTML,
        `Para o endereço: ${document.getElementById('endereco').value}
         nº  ${document.getElementById('numero').value}
         ${document.getElementById('bairro').value}`
    ]

    //Criacao da div resumo para o cliente confirmar o pedido
    let divResumo = document.createElement("div")
    divResumo.id = "resumo"
    for (i in escolhas) {
        let conteudoNovo = document.createTextNode(escolhas[i])
        divResumo.appendChild(conteudoNovo);
        divResumo.appendChild(document.createElement("br"))
        divResumo.appendChild(document.createElement("br"))
    }
    let total = document.createTextNode(`Total do pedido: R$ ${pedido.tamanho + pedido.borda + pedido.bebida + pedido.entrega}`)
    divResumo.appendChild(total);
    let divMenu = document.getElementById("menu");
    document.body.insertBefore(divResumo, divMenu);
}


function finalizarPedido() {
    //armazenar dados que o cliente passar em objetos
    const pedido = {
        tamanho: parseInt(document.getElementById('tamanho').value),
        borda: parseInt(document.getElementById('borda').value),
        sabor: document.getElementById('sabor').value,
        sabor2: document.getElementById('sabor2').value,
        bebida: parseInt(document.getElementById('bebida').value),
        entrega: parseInt(document.getElementById('tipodeentrega').value),
        pagamento: document.getElementById('pagamento').value,
        troco: document.getElementById('troco').value == "sim" ? true : false
    }
    const cliente = {
        nome: document.getElementById('nome').value,
        celular: document.getElementById('celular').value,
        endereco: document.getElementById('endereco').value,
        numero: document.getElementById('numero').value,
        complemento: document.getElementById('complemento').value,
        bairro: document.getElementById('bairro').value

    }

    //validar se o formulario foi completado
    
    for (val in pedido) {
        if (pedido[val].toString() == "null" || pedido[val].toString() == "NaN") {
            return alert('Voce nao selecionou todas as opcoes')
        }
    }

    //trocar as divs
    document.getElementById("botoes").style.display = 'block'
    document.getElementById("menu").style.display = 'none'
    mostrarResumo(pedido, cliente)
}

function validarForm() {
    var optionSelect = document.getElementById("troco").value;

    if (optionSelect == "sim") {
        document.getElementById("inputTroco").disabled = false;
    } else if (optionSelect == "nao") {
        document.getElementById("inputTroco").disabled = true;
    }
}

function validarTroco() {
    var optionSelect = document.getElementById("pagamento").value;

    if (optionSelect == "dinheiro") {
        document.getElementById("inputTroco").disabled = false;
    } else {
        document.getElementById("inputTroco").disabled = true;
    }
}

