({
    desactivar : function(component, event) {
        for (let i = 1; i < 9; i++) {
            var nombre = "topo"+i;
            var findTopo = component.find(nombre);
            findTopo.desactivar()
        }
    },

    poderJugar : function(component, event, bool) {
        for (let i = 1; i < 9; i++) {
            const element = [i];
            var nombreTopo = "topo"+element;
            var findTopo = component.find(nombreTopo);
            findTopo.set("v.jugando", bool);            
        }
    },

    activar : function(component, event, numAnterior) {        
        var action = component.get("c.getRandomNumber");
            action.setParams({
                "min": 1,
                "max": 8,
                "numAnterior": numAnterior
            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var numAleatorio = response.getReturnValue();

                    component.set("v.random", numAleatorio);
                    component.set("v.numAnterior", numAleatorio);

                    var nombre = "topo"+numAleatorio;
                    var findTopo = component.find(nombre);
                    findTopo.funcionHijo(numAleatorio)
                    
                }
            });
        $A.enqueueAction(action);
    }
})
