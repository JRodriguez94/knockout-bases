// ? Definicion del viewModel de c-button
// * Es ejecutado al ser requerido al registrar
// * El componente desde el loader
define(['ko'], ko => {
    var fdCButtonModel = function(params) {

        var self = this;

        self.cButtonText = params.cButtonText;
        self.cButtonClass = ko.observable("");
        self.cButtonValue = ko.observable(0);
        this.cButtonValue = params.value;

        // * Segun el valor de cButtonText pasado como parametro
        // * Se agrega la clase correspondiente al componente 
        switch(self.cButtonText) {
            case 'Borrar': { self.cButtonClass('btn btn-danger'); break; }
            case 'Editar': { self.cButtonClass('btn btn-info');  break; }
            case 'Guardar': { self.cButtonClass('btn btn-success'); break; }
            case 'Cancelar': { self.cButtonClass('btn btn-warning'); break; }
        }

        // * De la misma forma, dependiendo del parametro
        // * cButtonText, se ejecuta el caso correspondiente.
        self.onClick = function() {

            switch(self.cButtonText) {
                case 'Borrar': { 
                    params.action(params.value);
                    break; 
                }
                case 'Editar': { 
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

    // * Se retorna la funcion contenedora
    // * Para ejecurar el require
    return fdCButtonModel;
})