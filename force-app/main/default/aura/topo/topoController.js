({
    activar : function(component, event, helper) {
        var num = event.getParam("arguments");
        num = num.numAleatorio;
        console.log(num);
        if (num == component.get("v.posicion")) {
            component.set("v.color","rojo")
        }else{
            component.set("v.color","azul")
        }
    }
})
