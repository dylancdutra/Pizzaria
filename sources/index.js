function pegarTamanho() {
    let pedido = {
        tamanho: parseInt(document.getElementById('tamanho').value),
        borda: parseInt(document.getElementById('borda').value),
        sabor: document.getElementById('sabor').value,
        sabor2: document.getElementById('sabor2').value,
        bebida: parseInt(document.getElementById('bebida').value),
        entrega: parseInt(document.getElementById('tipodeentrega').value),
        pagamento: document.getElementById('pagamento').value,
        troco: document.getElementById('troco').value == "sim" ? true : false
    }
    alert(`O total do pedido foi : \n ${pedido.bebida + pedido.tamanho + pedido.borda + pedido.entrega}`)
}