define(['ko'], ko => {

    // | ---------------------------------------------------------

    function fdItemsModel(id, name, price) {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
        this.price = ko.observable(price);
    }

    var fdElements = [
        new fdItemsModel(1, "Producto 1", 200 ),
        new fdItemsModel(2, "Producto 2", 400 ),
        new fdItemsModel(3, "Producto 3", 600 ),
        new fdItemsModel(4, "Producto 4", 800 ),
        new fdItemsModel(5, "Producto 5", 1000 ),
    ]

    self.fdItemsList = ko.observableArray(fdElements)

    self.fdToEditItem = ko.observable();
    self.fdToEditItem( {
        id: null,
        name: null,
        price: null
    });

    // | ---------------------------------------------------------



    console.log('Está entrando al define del LOADER')
    console.log('Ko desde loader: ', ko)

    ko.components.register('c-button', {
        template: { require: 'text!../modules/fd-cButton/fd-cButton.html' },
        viewModel: { require: '../modules/fd-cButton/fd-cButton' }
        // template: '<h1>Hola?</h1>'
    });


    ko.applyBindings(new mainViewModel());

    
    

});

function mainViewModel(ko) {
   
    var self = this;

    self.onTest = ko => {

        console.log('Hola KO(?', ko)
    }


    // * --------------------------------------------------

    self.fdOnRemove = function(index) {

        /* console.log('Está entrando al self.fdOnRemove :D')
        console.log('Index(? ', index)

        console.log('self.fdItemsList(? ', fdItemsList()) */
        
        var lista = fdItemsList();

        fdItemsList(
            lista.filter(product => product.id !== index)
        );

    }

    self.fdOnEdit = function(index) {
        
        var lista = fdItemsList();
        var toEditE = lista.filter(product => product.id === index);
        fdToEditItem(toEditE[0])
        console.log('fdToEditItem ', fdToEditItem())

    }

    self.fdOnSave = function() {
        
        var lista = fdItemsList();
        var indexCurrentE = lista.findIndex(product => product.id === fdToEditItem().id)
        
        lista[indexCurrentE] = fdToEditItem();
        fdItemsList(lista);

        $('#fd-Modal').modal('hide');

        console.log('Nueva self.fdItemsList(? ', fdItemsList());

    }

    // * --------------------------------------------------


    // | --------------------------------------------------

    self.perroTest = function() {
        console.log('juan :D')
    }

    self.SowFdItemsList = function() {
        console.log("Así está actualmente fdItemsList: ", fdItemsList())
    }

    // | -------------------------------------------------- 
}