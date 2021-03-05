
// ? Objeto de configuracion de require
// * Se estan declarando los paths que apuntan a las
// * Librerias y scripts que van a ser utilizados en la página
// | Si no se agrega la propiedad 'baseUrl', el path base
// | Será relatico a la ruta de este archivo (como en este caso) 
require.config({
    paths: {
        ko: 'libs/knockout',
        jquery: 'libs/jquery',
        text: 'libs/text',
        bootstrap: 'libs/bootstrap-bundle',
    }
})

// ? Este es el punto de entrada en el flujo de carga
// * Como primer parametro se pasa un array con las dependencias
// * Que se utilizaran para LA CARGA del modulo requerido, en este caso 'Loader'
// * El segundo parametro, son las dependencias (separadas por coma si hay mas de una)
// * Que van ser utilizadas explistamente en el o los modulos a cargar.
require(['jquery', 'bootstrap', 'ko', 'loader',], ko => {
    console.log('Entra a LA FUNCION del require del MAIN')
})