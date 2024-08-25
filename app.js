/*
// Llave de encriptacion

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

// variables

const entradaTexto = document.querySelector(".contenedor1_cajatexto");
const salidaTexto = document.querySelector(".contenedor2_derecha_evaluar");
const contendioSalida = document.querySelector(".contenedor2_derecha");
const botonCopiar = document.querySelector(".contenedor2_derecha_copiar");

// Funcionalidad Boton Encriptar

function botonEncriptar(){
    const textoEncriptado = encriptar(entradaTexto.value);
    salidaTexto.value = textoEncriptado;
    entradaTexto.value = "";
    contendioSalida.remove();
    // contendioSalida.style.display ="none";
    botonCopiar.style.visibility = "inherit";
}


// funcion de encriptar

function encriptar(stringEncriptado){
    let keyEncriptador = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < keyEncriptador.length; i++){
        if(stringEncriptado.includes(keyEncriptador[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(keyEncriptador[i][0], keyEncriptador[i][1]);
        }
    }
    return stringEncriptado;
}

// Funcionalidad Boton Desencriptar

function botonDesencriptar(){
    const textoEncriptado = desencriptar(entradaTexto.value);
    salidaTexto.value = textoEncriptado;
    entradaTexto.value = "";
    contendioSalida.remove();
    botonCopiar.style.visibility = "inherit";
}

// funcion de desencriptar

function desencriptar(stringDesencriptado){
    let keyEncriptador = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < keyEncriptador.length; i++){
        if(stringDesencriptado.includes(keyEncriptador[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(keyEncriptador[i][1], keyEncriptador[i][0]);
        }
    }
    return stringDesencriptado;
}

// Funcionalidad Boton Encriptar

function copiar(){
    const textoCopiado = salidaTexto;
    navigator.clipboard.writeText(salidaTexto.value);
    // textoCopiado.select();
    // document.execCommand("copy");
    alert("Texto copiado en el portapapeles");
    salidaTexto.value = "";
}
