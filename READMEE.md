# `Cifrado César`

Esta aplicación fue creada para obtener una `clave` mucho mas segura de la que ocupamos comúnmente con el fin de poder proteger cualquier tipo de dato personal.

Esto se hizo mediante un sistema de codificación llamado `cifrado César`. 

Pero, ¿qué es el cifrado César?

Cifrar significa codificar. El [`cifrado César`](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://github.com/marcelalopeznanco/imagenes/blob/master/Caesar_cipher_left_shift_of_3.jpg?raw=true)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

___

## `Resumen del proyecto`

`Clave segura` es una aplicación creada para personas que necesiten proteger aun mas sus datos personales, dando como resultado claves secretas.
Todo esto mediante un cifrado y descifrado. 

La formula utilizada se basa en el "cifrado cesar" mencionado anteriormente que es una forma antigua de convertir un mensaje a otro, con el fin de que el mensaje inicial sea difícil de entender por los demás.

Consiste en una sustitución de letras, que son las originales, reemplazandolas por otras que se encuentran posicionadas más adelante en el alfabeto. Todo esto según el numero fijo de desplazamiento que se asigne.

Por ejemplo, con un desplazamiento de 3, la A sería sustituida por la D (situada 3 lugares a la derecha de la A), la B sería reemplazada por la E, etc.


Continuar escribiendo
## `Especificaciones del Proceso realizado:`

- Análisis, interpretación y solución del problema.
- Planificación del proyecto.
- Realización de actividades planificadas, con el compromiso de terminar de ejecutar todas las actividades dentro de las dos semanas.

___

## `Experiencia de Usario: UX`

El diseño de la aplicación fue basado en la necesidad que se debía cubrir. 

Se designo que su grupo objetivo seria mayoritariamente adulto.
En base a esto se designaron colores.

Fue siendo modificado debido a los pequeños testeos a diferentes usuarios ya que en estos indicaron no se entendía con tanta facilidad, no era tan agradable, era demaciado largo para obtener el resultado, tenia muchas paginas, etc.

Se crearon 3 Prototipos.


## `Diseño de Prototipo 1`

Este fue el diseño de prototipo inicial, el que consistía en 3 pantallas:

#### Pantalla 1
- Bienvenida
- Botón cifrar
- Botón descifrar

#### Pantalla 2
- Texto Cifrar
- indicación para ingresar la clave
- Input para ingreso de clave y offset
- Botón para cifrar y obtener resultado
- Cuadro de resultado
- Botón home para volver al inicio

#### Pantalla 3
- Texto Descifrar
- indicación para ingresar la clave
- Input para ingreso de clave y offset
- Botón para cifrar y obtener resultado
- Cuadro de resultado
- Botón home para volver al inicio


Fue descartado por la falta información e instrucciones.


![caeser-cipher](https://github.com/marcelalopeznanco/imagenes/blob/master/69358805_385158602202775_4962743983638839296_n.jpg?raw=true)

___

## `Diseño de Prototipo 2`

En este prototipo se agrega una pantalla incluyendo instrucciones, el que consistía en 3 pantallas:

#### Pantalla 1
- Bienvenida
- Botón entrar

#### Pantalla 2
- Introducción / Instrucciones
- Botón cifrar
- Botón descifrar

#### Pantalla 3
- Texto Cifrar
- indicación para ingresar la clave
- Input para ingreso de clave y offset
- Botón para cifrar y obtener resultado
- Cuadro de resultado
- Botón home para volver al inicio


#### Pantalla 4
- Texto Descifrar
- indicación para ingresar la clave
- Input para ingreso de clave y offset
- Botón para cifrar y obtener resultado
- Cuadro de resultado
- Botón home para volver al inicio

Al igual que el anterior fue descartado despues de haber simulado testeos con usuarios reales obteniendo como respuesta:

>"Aplicación muy extensa para llegar al resultado", 
>"Disminuir cantidad de paginas", 
>"No se entiende la seleccion de offset", etc.
![caeser-cipher](https://github.com/marcelalopeznanco/imagenes/blob/master/68998947_375422099793507_7082807375010201600_n.jpg?raw=true)

___

## `Diseño de Prototipo 3`

Se corrigen errores anteriores y se llega al resultado final de disminuir la cantidad de paginas entregando mas información.

#### Pantalla 1
- Bienvenida
- Introducción / Instrucciones
- Botón comenzar

#### Pantalla 2
- Ingresa tus datos
- Indica tu offset (indicando un ejemplo)
- Ingresa tu clave (indicando, solo letras, excepto "ñ")
- Botón cifrar
- Botón descifrar
- Resultado
- Botón Volver a instrucciones

![caeser-cipher](https://github.com/marcelalopeznanco/imagenes/blob/master/68957132_2346923945422764_7456348420274388992_n.jpg?raw=true)

___

## `Diseño tipo formulario y su funcionalidad`


Objetivo: Cifrar y descifrar un mensaje.

Cómo utilizarlo:
1) Lee bien las instrucciones
2) Ingresa un número de desplazamiento.
3) Ingresa una clave.
4) Hacer clic en el botón “Cifrar” o "Descifrar" para encriptar o desencriptar el mensaje.
5) Obtén tu resultado
6) Vuelve a inicio

![caeser-cipher](https://github.com/marcelalopeznanco/imagenes/blob/master/formulario.jpg?raw=true)

___

## `Diseño final`

###  Pagina 1

![caeser-cipher](https://github.com/marcelalopeznanco/imagenes/blob/master/pagina%201%20negra.jpg?raw=true)

### pagina 2

![caeser-cipher](https://github.com/marcelalopeznanco/imagenes/blob/master/pagina%202%20negra.jpg?raw=true)

Para ingresar al formulario desarrollado, entrar al siguiente enlace: [Abrir formulario.](https://marcelalopeznanco.github.io/SCL011-Cipher/src/index.html) 

## `Tips utilizados:`


[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Diseño de experiencia de usuario (User Experience Design):

- Ideación
- Prototipado (sketching)
- Testeo e Iteración

Desarrollo Front-end:

* [Valores](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/01-basics/01-values-variables-and-types)
* [Tipos](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/01-basics/01-values-variables-and-types)
* [Variables](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/01-basics/02-variables)
* [Control de flujo](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/02-flow-control/00-opening)
* [Tests unitarios](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/11-testing/00-opening)
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:
- [GitHub y GitHub Pages](https://guides.github.com/)

