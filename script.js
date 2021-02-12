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

    var iconTypes = [
        { icon: "icon-bone", text: "Bone" },
        { icon: "icon-ball", text: "Ball" },
        { icon: "icon-circle", text: "Circle" },
        { icon: "icon-rabbit", text: "Rabbit" },
    ]

    self.inventory = ko.observableArray([
    ]);

    self.addItem = () => {
        var index = Math.floor(Math.random() * iconTypes.length);
        self.inventory.push(iconTypes[index]);
    }

    self.removeItem = (data, event) => {
        var indexToRemove = event.target.getAttribute("item-index");
        console.log(indexToRemove)
        self.inventory.splice(indexToRemove, 1);
    }
};

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new InventoryViewModel(), knockoutApp);