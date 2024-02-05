// inputs
const num1 = document.getElementById("numero");
const num2 = document.getElementById("numero2");

// Operadores
const operador = document.getElementById("operadores");
const boton = document.getElementById("boton");
const reset = document.getElementById("reset");

// Respuesta
const respuesta = document.getElementById("respuesta");

function operar() {
  if (num1.value && num2.value) {
    switch (operador.value) {
      case "sumar":
        var res = parseInt(num1.value) + parseInt(num2.value);
        break;
      case "restar":
        var res = num1.value - num2.value;
        break;
      case "multiplicar":
        var res = num1.value * num2.value;
        break;
      case "dividir":
        if (num2.value != 0) {
          var div = parseInt(num1.value) / parseInt(num2.value);

          res = div.toFixed(1).replace(/\.0+$/, "");
        } else {
          alert("No se puede dividir entre cero pendejo");
          var res = "";
        }

        break;
      case "nada":
        var res = "";
        alert("Escoge una operación");
        break;

      default:
        break;
    }

    // let texto = document.createElement("p");
    // texto.innerText = res;

    // respuesta.appendChild(texto);

    respuesta.innerText = res


  } else {
    alert("Pon ambos valores");
  }
}


function resetear() {
  num1.value= ""
  num2.value= ""

  respuesta.innerText = ""

}


reset.addEventListener('click', resetear)
boton.addEventListener("click", operar);

boton.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    operar()
  }
})

