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
            var evento = $A.get("e.c:parametros");
            var puntuacion = evento.getParam("puntuacion");
            puntuacion++
            evento.setParams({"puntuacion": puntuacion});
            evento.fire();
            component.set("v.color","azul")
        }        
    },

    desactivar : function(component, event, helper) {
        component.set("v.color","azul")
    }
    
})
