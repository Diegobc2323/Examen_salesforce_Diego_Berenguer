({
    registrarPartida : function(component, event, helper) {
        var puntuacion = event.getParam("puntuacion");
        var partida = component.get("v.partida");

        var ul = document.getElementById("partidas");
        var li = document.createElement("li");

        li.innerHTML = "En la partida " + partida + " has conseguido " + puntuacion + " puntos";
        ul.appendChild(li);

        partida++;
        component.set("v.partida", partida);
    }
})
