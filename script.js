//dom captura la informacion del text area
//campos en los que trabajamos
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//2 - function del boton que recibe la funcion encriptar
function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  console.log("Texto original:", textArea.value); // IVerificacion
  console.log("Texto encriptado:", textoEncriptado);

  //mostrarlo en el campo de mensaje
  mensaje.value = textoEncriptado;
  //limpiar el campo despues de usarlo
  textArea.value = "";
  //para quitar la imagen
  mensaje.style.backgroundImage = "none";
}

//1 - se almacena en la matriz (conjunto de arreglos)

//variable dentro de la funcion 
function encriptar(stringEncriptado) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ia"], ["o", "ober"], ["u", "ufat"]];

  //console.table(matrizCodigo);
  stringEncriptado = stringEncriptado.toLowerCase(); //Combierte todo a minuscula

  //recorrido bucle for
  for (let i = 0; i < matrizCodigo.length; i++) {
    //condicion 
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      //verificamos la sustitucion de TODO
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptado;
}

//desencriptado   btnDesencriptar

//2 - function del boton que recibe la funcion desencriptar
function btnDesencriptar() { // Define la función btnDesencriptar
  const textoDesencriptado = desencriptar(mensaje.value);
  //console.log("Texto original:", textArea.value); // IVerificacion
  //console.log("Texto encriptado:", textoDesencriptado);

  //mostrarlo en el campo de mensaje
  mensaje.value = textoDesencriptado;
  //limpiar el campo despues de usarlo
  textArea.value = "";
}

//1 - se almacena en la matriz (conjunto de arreglos)

//variable dentro de la funcion 
function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ia"], ["o", "ober"], ["u", "ufat"]];

  //console.table(matrizCodigo);
  stringDesencriptada = stringDesencriptada.toLowerCase(); //Combierte todo a minuscula

  //recorrido bucle for
  for (let i = 0; i < matrizCodigo.length; i++) {
    //condicion 
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      //verificamos la sustitucion de TODO
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}

//Copiar

//1ro Definir la funcion

function copiar() {
    const mensajeDesencriptado = mensaje.value; // Obtiene el mensaje desencriptado del campo de texto
    navigator.clipboard.writeText(mensajeDesencriptado)
}



