

define(['ko'], ko => {
    var fdCButtonModel = function(params) {

        /* console.log('Esta entrando al fdCButtonModel')
        
        let self = this;

        self.onClick = function() {
            // console.log('On click :D', ko)

            params.action(ko);
        } */

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
    return fdCButtonModel;
})