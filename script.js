

function InventoryViewModel() {

    var self = this;

    var fdElements = [
        { id: 1, name: "Producto 1", price: 200 },
        { id: 2, name: "Producto 2", price: 400 },
        { id: 3, name: "Producto 3", price: 600 },
        { id: 4, name: "Producto 4", price: 800 },
        { id: 5, name: "Producto 5", price: 1000 },
    ]

    self.fdItemsList = ko.observableArray(fdElements)

    self.fdOnRemove = function(index) {
        
        var lista = self.fdItemsList();

        self.fdItemsList(
            lista.filter(product => product.id !== index)
        );

    }

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
            case 'Aceptar': { self.cButtonClass('btn btn-success'); break; }
            case 'Cancelar': { self.cButtonClass('btn btn-warning'); break; }
        }

        self.onClick = function() {

            switch(self.cButtonText) {
                case 'Borrar': { 
                    params.action(params.value);
                    break; 
                }
                case 'Editar': { 
                    console.log("Valor del index desde el onClick: de Editar", self.cButtonValue); 
                    break; 
                }
                case 'Aceptar': { break; }
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