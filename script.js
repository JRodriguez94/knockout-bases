/* function CounterViewModel() {
    var self = this;

    self.firstName = ko.observable();  // Se puede definir el valor desde el princiio (entre comillas)
    self.firstName("Octavio Rodriguez");

    self.contador = ko.observable(0);
    // self.contador = 0;

    self.incrementar = () => {
        var currentValue = self.contador();
        self.contador(currentValue + 1);
    }

    self.decrementar = () => {
        var currentValue = self.contador();
        if(currentValue > 0)
            self.contador(currentValue - 1);
    }

}

ko.applyBindings(new CounterViewModel(),
document.querySelector("#knockout-app")) */



function InventoryViewModel() {
    var self = this;


    /* var iconTypes = [
        { icon: "icon-bone", text: "Bone" },
        { icon: "icon-ball", text: "Ball" },
        { icon: "icon-circle", text: "Circle" },
        { icon: "icon-rabbit", text: "Rabbit" },
    ] */

    var fdElements = [
        { id: 1, name: "Producto 1", price: 200 },
        { id: 2, name: "Producto 2", price: 400 },
        { id: 3, name: "Producto 3", price: 600 },
        { id: 4, name: "Producto 4", price: 800 },
        { id: 5, name: "Producto 5", price: 1000 },
    ]

    // self.inventory = ko.observableArray([]);
    self.fdItemsList = ko.observableArray(fdElements)


    /* self.addItem = () => {
        var index = Math.floor(Math.random() * iconTypes.length);
        self.inventory.push(iconTypes[index]);
    } */

    /* self.removeItem = (data, event) => {
        // console.log("Perro removido")
        var indexToRemove = event.target.getAttribute("item-index");
        console.log(indexToRemove)
        self.inventory.splice(indexToRemove, 1);
    } */

    /* self.onNewItems = function(newItems) {
        self.items(newItems)
    } */

    // * ----------------------------------- 

    self.fdOnRemove = function(index) {
        console.log("fdOnRemove Index(? ", index);
    }

};


ko.components.register('fd-custom-button', {
    template: [
        '<button data-bind="click: onClick, class: cButtonClass">',
            '<span data-bind="text: buttonText"></span>',
            // '<span data-bind="text: buttonText, attr: {'data-toggle': fdtoggle, 'data-target': fdtarget}"></span>',
        '</button>'
    ].join(''),
    viewModel: function(params) {
        
        var self = this;
        self.buttonText = params.buttonText;
        self.cButtonClass = ko.observable("");
        self.cButtonValue = ko.observable(0);

        // | ----------------------------------------
        // ? ------------- ATRIBUTOS ----------------
        /* console.log("Togle(?", params.toggle)
        console.log("Target(?", params.target)
        
        self.fdtoggle = ko.observable(params.toggle)
        self.fdtarget = ko.observable(params.target) */
        // | ----------------------------------------

        self.cButtonValue = params.value;

        console.log("Este es el valor de buttonText: ", self.cButtonValue)

        switch(self.buttonText) {
            case 'Borrar': { self.cButtonClass('btn btn-danger'); break; }
            case 'Editar': { self.cButtonClass('btn btn-info');  break; }
            case 'Aceptar': { self.cButtonClass('btn btn-success'); break; }
            case 'Cancelar': { self.cButtonClass('btn btn-warning'); break; }
        }

        self.onClick = function() {

            switch(self.buttonText) {
                case 'Borrar': { 
                    console.log("Valor del index desde el onClick: de Borrar", self.cButtonValue);
                    params.fdOnRemove(7);
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


const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new InventoryViewModel(self.fdItemsList), knockoutApp);

// ? Esto es para pasar la función que puede tener la logica adicional del componente
/* const knockoutPerro = document.querySelector('#perro-selector');
ko.applyBindings(new perrillo(), knockoutPerro); */

// ? Pero si nolo quieres así, es tan simple como esto
// ko.applyBindings(new onButton());