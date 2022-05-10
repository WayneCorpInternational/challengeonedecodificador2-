
const vocales = ['a', 'e', 'i', 'o', 'u'];
const encriptados = ['ai', 'enter', 'imes', 'ober', 'ufat'];


// let textoOriginal = [];
// let cadenaOriginal = "";
const texto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-resultado");
const buscar = document.getElementById('buscar');
const resultado = document.getElementById('resultado');

function btnEncriptar(){
    const txtEncriptado = encriptar(texto.value);
    if (txtEncriptado!=""){
        resultado.style.display = 'inline-block';
        mensaje.value = txtEncriptado;
        texto.value = "";
    }
    else{
        resultado.style.display = 'none';
        buscar.style.display = 'inline-block';
    }
    
}

function btnCopiar(){
    // const contenido = document.getElementById('msjEncriptado');
    mensaje.select();
    document.execCommand('copy');
    alert("Copiado!");
}

function encriptar(txt){
 
    let textoEncriptado = [];
    let cadenaEncriptada = "";

    txt = txt.toLowerCase();
    console.log(txt);
    for(i=0; i<txt.length;i++){
        if(vocales.indexOf(txt[i]) == -1){
            textoEncriptado[i] = txt[i];
        }else{
            textoEncriptado[i] = encriptados[vocales.indexOf(txt[i])];
        }

        cadenaEncriptada = cadenaEncriptada + textoEncriptado[i].toString();
    }

    return cadenaEncriptada;
    //console.log(cadenaEncriptada);
    
} 

function Desencriptar(){

    if (texto.value != ""){
        for(j=0; j<texto.value.length; j++){
            for(i=0; i<encriptados.length; i++){
             let posicion = texto.value.indexOf(encriptados[i]);
             if(posicion != -1){   
                texto.value = texto.value.replace(encriptados[i], vocales[i]);
                break;
             }
           }
        }
        
        resultado.style.display = 'inline-block';
        mensaje.value = texto.value;
        texto.value = "";
    }else{
        resultado.style.display = 'none';
        buscar.style.display = 'inline-block';
    }
    
   
}