
// ? Esta es la definicion del modulo requerido en el archivo 'Main'
// * Este es declarado como una funcion anonima y se ejecuta al ser instanciada
// * (Siendo requerido como en el archivo main)
// * De la misma forma que al ser requerido, se debe espesificar las depencias 
// * De las que harán uso. En este caso ko
// | Al ser definido como una funcion anonima, solo será ejecutado al ser requerido
// | Por ende, puede ser invocado de otra forma.
define(['ko'], ko => {

    console.log('Está entrando al define del LOADER')

    // | ---------------------------------------------------------

    // ? Definicion y carga de los objetos obervables que serán
    // ? Utilizados en la vista de la página

    // * Modelo del objeto fdItems (item individual)
    function fdItemsModel(id, name, price) {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
        this.price = ko.observable(price);
    }

    // * Carga de datos de los items
    var fdElements = [
        new fdItemsModel(1, "Producto 1", 200 ),
        new fdItemsModel(2, "Producto 2", 400 ),
        new fdItemsModel(3, "Producto 3", 600 ),
        new fdItemsModel(4, "Producto 4", 800 ),
        new fdItemsModel(5, "Producto 5", 1000 ),
    ]

    // * Asifnacion del objeto fdElements a fdItemsList
    // * El cual será el observableArray con el que se va a trabajar
    self.fdItemsList = ko.observableArray(fdElements)

    // * Declaracion y definicion de objeto auxiliar para
    // * La edicion de items
    self.fdToEditItem = ko.observable();
    self.fdToEditItem( {
        id: null,
        name: null,
        price: null
    });

    // | ---------------------------------------------------------

    // ? Registro del custom component (boton)
    // * Se define el template y el viewModel del componente
    // | Recordar anteponer 'text!' antes del path del template
    // | Esto para que text.js lo pueda transpilar, de otra forma
    // | No cargara el template y marcará un error
    // | Omitit la extencion .js del viewModel. Require se lo agrega automaticamente
    // | De otra forma se duplicara el .js y marcara un error
    ko.components.register('c-button', {
        template: { require: 'text!../modules/fd-cButton/fd-cButton.html' },
        viewModel: { require: '../modules/fd-cButton/fd-cButton' }
    });


    // ? Se aplica el bindeo tanto de los observables como del registro
    // ? Del cutom component
    // * Se pasa como parametro la instancia de la funcion contenedora 
    // * mainViewModel en este caso, para poder hacer uso de sus metododos
    // * Desde el el viewModel de los custom components registrados
    ko.applyBindings(new mainViewModel());

});


// ? Funcion que contiene los metodos (más funciones) que serán
// ? Accedidos desde el viewModel de los custom components
function mainViewModel() {
   
    var self = this;

    // ? Metodo que elimina el elemento seleccionado de la tabla
    self.fdOnRemove = function(index) {
        
        var lista = fdItemsList();

        fdItemsList(
            lista.filter(product => product.id !== index)
        );

    }

    // ? Metodo que edita el elemento seleccionado de la table
    self.fdOnEdit = function(index) {
        
        var lista = fdItemsList();
        var toEditE = lista.filter(product => product.id === index);
        fdToEditItem(toEditE[0])
        console.log('fdToEditItem ', fdToEditItem())

    }

    // ? Metodo que guarda los cambios hechos en el item seleccionaod de la tabla
    self.fdOnSave = function() {
        
        var lista = fdItemsList();
        var indexCurrentE = lista.findIndex(product => product.id === fdToEditItem().id)
        
        lista[indexCurrentE] = fdToEditItem();
        fdItemsList(lista);

        $('#fd-Modal').modal('hide');

        console.log('Nueva self.fdItemsList(? ', fdItemsList());

    }

    // | --------------------------------------------------

    // ? Metodo auxiliar para mostrar el estado actual del array de elementos
    self.SowFdItemsList = function() {
        console.log("Así está actualmente fdItemsList: ", fdItemsList())
    }

    // | -------------------------------------------------- 
}