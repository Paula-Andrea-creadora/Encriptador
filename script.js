//variables

const textArea=document.querySelector(".palabras-a-codificar");

const mensaje=document.querySelector(".palabras-codificadas");

//4to funcion del boton
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    //para que desaparezca la imagen
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

//2do funciones encriptar
function encriptar(stringEncriptado){

    //1ro Arreglos multidimensionales o arreglos de arregloa

    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //console.table(matrizCodigo);

    stringEncriptado = stringEncriptado.toLowerCase();

    //3ro bucle for

    for(let i=0 ; i<matrizCodigo.length; i++ ){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo [i][0],matrizCodigo [i][1])
        }

    }
    return stringEncriptado;

}

//Funcion desencriptar

//4to paso

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(mensaje.value); // Cambia textArea.value por mensaje.value
    mensaje.value = textoDesencriptado;
}

//2do paso

function desencriptar(stringDesencriptado){

    //1ro Arreglo
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    //3ro bucle for
    for(let i=0 ; i<matrizCodigo.length; i++){
        stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo [i][0])
    }

    return stringDesencriptado;

}
  

//Copiar

//1ro Definir la funcion

function btnCopiar() {
    const mensajeDesencriptado = mensaje.value; // Obtiene el mensaje desencriptado del campo de texto
    navigator.clipboard.writeText(mensajeDesencriptado);
}

