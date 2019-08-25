window.cipher = {
    encode: (texto, offset) => {
        /* Acá va tu código */

        let resultCodificar = "";
        for (let i = 0; i < texto.length; i++) {

            //guardando datos del for
            let ascii = texto.charCodeAt(i)

            //Mayúsculas ASCII
            if ((ascii >= 97) && (ascii <= 122)) {
                let formula = ((ascii - 97 + parseInt(offset)) % 26) + 97;
                let nuevoAscii = String.fromCharCode(formula);
                resultCodificar += nuevoAscii;
            } else if ((ascii >= 65) && (ascii <= 90)) {
                let formula2 = ((ascii - 65 + parseInt(offset)) % 26) + 65;
                let nuevoAscii2 = String.fromCharCode(formula2);
                resultCodificar += nuevoAscii2;
                //Numeros ASCII
            } else if ((ascii >= 48) && (ascii <= 57)) {
                let formula3 = ((ascii - 48 + parseInt(offset)) % 10) + 48;
                let nuevoAscii3 = String.fromCharCode(formula3);
                resultCodificar += nuevoAscii3;

            } else if (ascii === 32) {
                resultCodificar += " "
                continue;
            } else if (texto[i] === "ñ") {
                resultCodificar += "ñ"
                continue;
            } else if (texto[i] === "Ñ") {
                resultCodificar += "Ñ"
                continue;


            }
        }
        return resultCodificar;
    },

    decode: (textoD, offsetD) => {
        /* Acá va tu código */
        let resultDecodificar = "";
        for (let i = 0; i < textoD.length; i++) {
            //guardando datos del for
            let asciiD = textoD.charCodeAt(i)

            //Mayúsculas ASCII
            if ((asciiD >= 97) && (asciiD <= 122)) {
                let formula = ((asciiD - 122 - parseInt(offsetD)) % 26) + 122;
                let nuevoAscii = String.fromCharCode(formula);
                resultDecodificar += nuevoAscii;
            } else if ((asciiD >= 65) && (asciiD <= 90)) {
                let formula2 = ((asciiD - 90 - parseInt(offsetD)) % 26) + 90;
                let nuevoAscii2 = String.fromCharCode(formula2);
                resultDecodificar += nuevoAscii2;
                //Numeros ASCII
            } else if ((asciiD >= 48) && (asciiD <= 57)) {
                let formula3 = ((asciiD - 57 - parseInt(offsetD)) % 10) + 57;
                let nuevoAscii3 = String.fromCharCode(formula3);
                resultDecodificar += nuevoAscii3;

            } else if (asciiD === 32) {
                resultDecodificar += " "
                continue;
            } else if (textoD[i] === "ñ") {
                resultDecodificar += "ñ"
                continue;
            } else if (textoD[i] === "Ñ") {
                resultDecodificar += "Ñ"
                continue;
            }
        }
        return resultDecodificar;
    }
};