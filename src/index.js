/*Acá va tu código*/
window.onload = mostrar;
//

function mostrar() {
    document.getElementById("root").style.display = "block";
    document.getElementById("cesar").style.display = "none";


}

//Botón comenzar, con prevent default para eliminar parpadeo
//Se reemplazó el onclick() por addEventListener

document.getElementById("comenzar").addEventListener('click', (evento) => {
    evento.preventDefault();
    document.getElementById("root").style.display = "none";
    document.getElementById("cesar").style.display = "block";
})

//Cifrando
document.getElementById("cifrar").addEventListener('click', (evento) => {
    evento.preventDefault();
    //guardar valores de los imput
    let texto = document.getElementById("inputTexto").value;
    let offset = document.getElementById("inputOffset").value;
    //guardar en resultado todo el contenido de cipher
    let resultadoCodificar = cipher.encode(texto, offset);
    //reemplazar mi parrafo vacio por resultado
    document.getElementById("textoEntregado").innerHTML = resultadoCodificar;
    //console.log(resultadoCodificar);


})


//Descifrando
document.getElementById("descifrar").addEventListener('click', (evento) => {
    evento.preventDefault();
    //guardar valores de los imput
    let textoD = document.getElementById("inputTexto").value;
    let offsetD = document.getElementById("inputOffset").value;
    //guardar en resultado todo el contenido de cipher
    let resultadoDecodificar = cipher.decode(textoD, offsetD);
    //reemplazar mi parrafo vacio por resultado
    document.getElementById("textoEntregado").innerHTML = resultadoDecodificar;
    //console.log(resultadoDecodificar);


})


//Botón volver al inicio
document.getElementById("volver").addEventListener('click', (evento) => {
    evento.preventDefault();
    document.getElementById("root").style.display = "block";
    document.getElementById("cesar").style.display = "none";
})