# TODO

## @ManuelPuentes

- IPFS subida del pdf

https://www.youtube.com/watch?v=I0UolzV3ico

## @DavLiendoProgramming

- Link para ver los documentos

- Interfaz para ver todos los documentos

## @nazhG

- Test

- Methodos de comunicacion con el front
nota: podria hacer listas doblemente indexadas en solidity para borrar las ofertas?
cambiar el retuirn a unum se puede?
 ~ *_Esquema del Backend_* ~

*Promociones* : 
- status: (aceptado, pendiente, declinado)
    *esto es por que el owner del contarto elige cuales promociones si van*
- Wallet de la empresa (address)
- Nombre de la promo (string)
- Inicio (uint)
- fin (uint)
- url (string) un nombre amigable
- hash (ni idea) este es el archivo
- Empresas adheridas (mapping(address (wallet) => Struc (Info de la empresa))):
    me imagino que seran las empresas qeu hallan publicado en la red
    *va a ser necesario registrar una empresa para hacer una promocion*

-Funcion para que una persona sin wallet puede ver si el doc existe
-Funcion para cuando se crea una Promosion se crea un PDF que confima con esta info :
1. Autor del documento/hash
2. Fecha de generación/depósito del hash
3. El contenido del propio documento.

