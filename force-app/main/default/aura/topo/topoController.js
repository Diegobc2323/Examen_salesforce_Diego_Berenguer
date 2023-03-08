({
    activar : function(component, event, helper) {
        var num = event.getParam("arguments");
        num = num.numAleatorio;

        if (num == component.get("v.posicion")) {
            component.set("v.color","rojo")
        }else{
            component.set("v.color","azul")
        }
    },

    comprobar : function(component, event, helper) {
        if(component.get("v.color") == "rojo"){

            //coger el parametro puntuacion del evento
            
            var puntuacion = event.getParam("puntuacion");
            puntuacion++
            event.setParams({"puntuacion": puntuacion});
            event.fire();
            component.set("v.color","azul")
            console.log("puntuacion: "+puntuacion)
        }        
    },

    desactivar : function(component, event, helper) {
        component.set("v.color","azul")
    }
    
})
