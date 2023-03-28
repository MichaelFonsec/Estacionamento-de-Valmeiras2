// This is a JavaScript file

// This is a JavaScript file

var placaInput = document.getElementById('placa');

function calculo() {    
    // Obter o valor selecionado no combobox
    var combobox = document.getElementById("combo").value;

    // Fazer a conta
    var hora = document.getElementById("horas").value;

    if (hora <= 3 && placaInput.value.match(/^[A-Z]{3}\-\d{4}$/)) {
        var resultado = combobox * hora;
        let valorresultado = `R$: ${resultado} Reais`;
        document.querySelector('h3').innerHTML = valorresultado;
    }
    else if (hora > 3) {
        let mensagemerro = 'O limite máximo de tempo são 3 horas';
        document.querySelector('h3').innerHTML = mensagemerro; 
    }
    else if (!placaInput.value.match(/^[A-Z]{3}\-\d{4}$/)) {
        alert("Por favor, insira uma placa válida no formato AAA-1234.");
    }
    
}

placaInput.addEventListener('input', function(event) {
    let placa = event.target.value;
    placa = placa.toUpperCase(); // converte para letras maiúsculas
    placa = placa.replace(/[^A-Z0-9]/g, ''); // remove caracteres inválidos

    if (placa.length > 7) {
        placa = placa.slice(0, 7); // limita a 8 caracteres
    }

    if (placa.length > 3) {
        const letras = placa.slice(0, 3);
        const numeros = placa.slice(3);
        placa = letras + '-' + numeros; // adiciona hífen
    }

    event.target.value = placa;
});

var campoNumerico = document.getElementById("horas");
campoNumerico.addEventListener("input", function(evt) {
    var valorAnterior = this.value;
    var digitado = evt.data;

    // Verifica se o que foi digitado é um número válido
    if (isNaN(digitado) || (digitado == " " && valorAnterior.slice(-1) != "-")) {
        evt.preventDefault();
        this.value = valorAnterior;
    }
});


function limparCampos() {
  if (confirm('Ao Realizar uma nova compra os dados da compra atual serão eliminados. Deseja Continuar ?')) {
    const campos = document.querySelectorAll('input, select, h3');
    campos.forEach(campo => {
      campo.value = '';
      if (campo.nodeName === 'TD') {
        campo.style.backgroundColor = '';
        campo.classList.remove('selecionado');
      }
      if (campo.id === 'resultado') {
        campo.innerHTML = '';
      }
    });
    alert('Os dados foram limpos.');
  }
}





