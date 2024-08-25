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
const contenidoSalida = document.querySelector(".contenedor2_derecha");
const botonCopiar = document.querySelector(".contenedor2_derecha_copiar");
const validacion = /[^\w\s]/g;

// Validacion acentos o caracteres especiales 

entradaTexto.addEventListener("input", function(){
    const textoVerificar = entradaTexto.value;
    if (validacion.test(textoVerificar)){
        alert("El texto no debe contener acentos o caracteres especiales.");
        entradaTexto.value = textoVerificar.replace(validacion,"");
        entradaTexto.focus();
    }return;
})

// Funcionalidad Boton Encriptar

function botonEncriptar() {

// elimina los espacios en blanco

    const textoOriginal = entradaTexto.value.trim(); 
        if (textoOriginal === "") {
        alert("Por favor, ingrese un texto para encriptar.");
        entradaTexto.focus();
        return;
        }

    const textoEncriptado = encriptar(textoOriginal);
    salidaTexto.value = textoEncriptado;
    entradaTexto.value = "";

// oculta la imagen y el texto

    if (textoEncriptado) {
        contenidoSalida.style.display = "none";
        botonCopiar.style.visibility = "visible";
    } else {
        contenidoSalida.style.display = "block";
        botonCopiar.style.visibility = "hidden";        
    }
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

function botonDesencriptar() {
    
// elimina los espacios en blanco

    const textoOriginal = entradaTexto.value.trim(); 
    if (textoOriginal === "") {
        alert("Por favor, ingrese un texto para desencriptar.");
        entradaTexto.focus();
        return;
        }

    const textoDesencriptado = desencriptar(textoOriginal);
    salidaTexto.value = textoDesencriptado;
    entradaTexto.value = "";

// oculta la imagen y el texto

    if (textoDesencriptado) {
        contenidoSalida.style.display = "none";
        botonCopiar.style.visibility = "visible";
        } else {
        contenidoSalida.style.display = "block";
        botonCopiar.style.visibility = "hidden";
        
     }
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

function copiar() {
    // Copia el texto al portapapeles
    navigator.clipboard.writeText(salidaTexto.value)
        .then(() => {
            alert("Texto copiado en el portapapeles");

            // Restablece los campos iniciales

            salidaTexto.value = "";
            entradaTexto.value = "";
            contenidoSalida.style.display = "block";
            botonCopiar.style.visibility = "hidden";

            // Devuelve el foco al textarea
            entradaTexto.focus();
        })
    }
