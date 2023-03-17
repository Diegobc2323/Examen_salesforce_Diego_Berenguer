({
    start : function(component, event, helper) {
        helper.desactivar(component, event);
         
         
        helper.poderJugar(component, event, true);
        var puntuacion = 0
        var numAnterior = component.get("v.numAnterior")

        numAnterior.length = 0;
        numAnterior.push(0);
        numAnterior.push(1);
        component.set("v.numAnterior", numAnterior);
        component.set("v.puntuacion", puntuacion);  

        helper.activar(component, event)
    },

    stop : function(component, event, helper) {

        component.set("v.jugando", false);

        helper.poderJugar(component, event, false);
        helper.desactivar(component, event);

        var evento = $A.get("e.c:parar");
        evento.setParams({"puntuacion": component.get("v.puntuacion")});
        evento.fire();
        component.set("v.puntuacion", 0);
    },

    

    controlarEvento : function(component, event, helper) {
        helper.desactivar(component, event);
        var puntuacion = component.get("v.puntuacion");
        
        if(event.getParam("mensaje") == "Has acertado"){
            puntuacion++
        }else{
            puntuacion=0
        }
        component.set("v.puntuacion", puntuacion);

        helper.activar(component, event)
    }

})
