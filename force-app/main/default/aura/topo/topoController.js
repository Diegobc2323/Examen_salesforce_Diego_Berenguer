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
  
        if (component.get("v.jugando") == false) {
            console.log("No puedes jugar");
        }else{
            var evento = $A.get("e.c:parametros");
        
            if(component.get("v.color") == "rojo"){
                evento.setParams({"mensaje": "Has acertado"});
            }else{
                evento.setParams({"mensaje": "Has fallado"});
            }      
            
            evento.fire();
        } 
    },

    desactivar : function(component, event, helper) {
        component.set("v.color","azul")
    }
    
})
