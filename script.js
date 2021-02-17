

function InventoryViewModel() {

    var self = this;

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



// * --------------------------------------------------

    self.fdOnRemove = function(index) {
        
        var lista = self.fdItemsList();

        self.fdItemsList(
            lista.filter(product => product.id !== index)
        );

    }

    self.fdOnEdit = function(index) {
        
        var lista = self.fdItemsList();
        var toEditE = lista.filter(product => product.id === index);
        self.fdToEditItem(toEditE[0])

    }

    self.fdOnSave = function() {
        
        var lista = self.fdItemsList();
        var indexCurrentE = lista.findIndex(product => product.id === self.fdToEditItem().id)
        
        lista[indexCurrentE] = self.fdToEditItem();
        self.fdItemsList(lista);

        $('#fd-Modal').modal('hide');

        console.log('Nueva self.fdItemsList(? ', self.fdItemsList());

    }

// * --------------------------------------------------


// | --------------------------------------------------

    self.perroTest = function() {
        console.log('juan :D')
    }

    self.SowFdItemsList = function() {
        console.log("Así está actualmente fdItemsList: ", self.fdItemsList())
    }

// | --------------------------------------------------


};


ko.components.register('fd-custom-button', {
    template: [
        '<button data-bind="click: onClick, class: cButtonClass">',
            '<span data-bind="text: cButtonText"></span>',
        '</button>'
    ].join(''),
    viewModel: function(params) {
        
        var self = this;

        self.cButtonText = params.cButtonText;
        self.cButtonClass = ko.observable("");
        self.cButtonValue = ko.observable(0);
        this.cButtonValue = params.value;

        switch(self.cButtonText) {
            case 'Borrar': { self.cButtonClass('btn btn-danger'); break; }
            case 'Editar': { self.cButtonClass('btn btn-info');  break; }
            case 'Guardar': { self.cButtonClass('btn btn-success'); break; }
            case 'Cancelar': { self.cButtonClass('btn btn-warning'); break; }
        }

        self.onClick = function() {

            switch(self.cButtonText) {
                case 'Borrar': { 
                    params.action(params.value);
                    break; 
                }
                case 'Editar': { 
                    // console.log("Valor del index desde el onClick: de Editar", self.cButtonValue); 
                    params.action(params.value);
                    break; 
                }
                case 'Guardar': {
                    params.action(); 
                    break; 
                }
                case 'Cancelar': { break; }
            }
            
        }
    }
})

// ? De esta forma se hace instancia de la funcion padre que se pasa como parametro
const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new InventoryViewModel(), knockoutApp);

// ? Si solo quieres hacer instancia del componente, se puede bindear así
// ko.applyBindings(new onButton());