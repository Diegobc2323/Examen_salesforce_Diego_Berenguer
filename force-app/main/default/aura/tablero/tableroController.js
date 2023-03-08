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
                    var puntuacion = 0

                    var evento = $A.get("e.c:parametros");
                    evento.setParams({"random": numAleatorio, "numAnterior": numAnterior, "puntuacion":puntuacion});
                    component.set("v.numAnterior", numAnterior); 
                    this.devolver = numAleatorio;       
                    evento.fire();

                    var nombre = "topo"+numAleatorio;
                    var findTopo = component.find(nombre);
                    findTopo.funcionHijo(numAleatorio)
                }
            });
        $A.enqueueAction(action);
    },

    stop : function(component, event, helper) {
        //coger la puntuacion del evento parametros y devolverlo
        var event = $A.get("e.c:parametros");
        var puntuacion = event.getParam("puntuacion");
        component.set("v.puntuacion", puntuacion);

        document.getElementById("marcador").style.display = "block";

        helper.desactivar(component, event);
    }
    
    

})
