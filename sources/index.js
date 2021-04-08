function mostrarResumo(pedido, cliente) {
    let nameTam = document.getElementById('tamanho')
    //nameTam.options[nameTam.selectedIndex]
    alert(nameTam.options[nameTam.selectedIndex].innerHTML)
}

function nomeTamanho(){
    console.log()
}

function finalizarPedido() {
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
    document.getElementById("resumo").style.display = 'block'
    document.getElementById("menu").style.display = 'none'
    mostrarResumo(pedido, cliente)
}
function validarForm() {
    var optionSelect = document.getElementById("troco").value;

    if (optionSelect == "sim") {
        document.getElementById("sla").disabled = false;
    } else if (optionSelect == "nao") {
        document.getElementById("sla").disabled = true;
    }
}

function validarTroco() {
    var optionSelect = document.getElementById("pagamento").value;

    if (optionSelect == "dinheiro") {
        document.getElementById("troco").disabled = false;
    } else {
        document.getElementById("troco").disabled = true;
    }
}

