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
            event.setParams({"mensajeTopo": "Has acertado"});
        }else{
            event.setParams({"mensajeTopo": "Has fallado"});
        }        
    },

    desactivar : function(component, event, helper) {
        component.set("v.color","azul")
    }
    
})
