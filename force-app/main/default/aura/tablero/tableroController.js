({
    
    start : function(component, event, helper) {
        var action = component.get("c.getRandomNumber");
            
            var numAnterior = 0;

            action.setParams({
                "min": 1,
                "max": 8,
                "numAnterior": numAnterior
            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {

                    var numAleatorio = response.getReturnValue();
                    numAnterior = response.getReturnValue();

                    var evento = $A.get("e.c:parametros");
                    evento.setParams({"random": numAleatorio, "numAnterior": numAnterior, "puntuacion":0});
                    component.set("v.numAnterior", numAnterior); 
                    this.devolver = numAleatorio;       
                    evento.fire();

                    var nombre = "topo"+numAleatorio;
                    var findTopo = component.find(nombre);
                    console.log(findTopo)
                    findTopo.funcionHijo(numAleatorio)
                }
            });
        $A.enqueueAction(action);
    }

})
