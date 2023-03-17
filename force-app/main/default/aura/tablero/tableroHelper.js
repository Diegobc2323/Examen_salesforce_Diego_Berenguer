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

    // activar : function(component, event) {   
      
    //   var cantidad = document.getElementById("numTopos").value

    //     var numAnterior = component.get("v.numAnterior")

    //     for (let i = 0; i < cantidad; i++) {
    //       var action = component.get("c.getRandomNumber");
    //         action.setParams({
    //             "min": 1,
    //             "max": 8,
    //             "numAnterior": numAnterior
    //         });
    //         action.setCallback(this, function(response) {
    //             var state = response.getState();
    //             if (state === "SUCCESS") {
    //                 var numAleatorio = response.getReturnValue();
                    

    //                 component.set("v.random", numAleatorio);
    //                 numAnterior.push(numAleatorio)
    //                 component.set("v.numAnterior", numAnterior);
    //                 console.log(numAnterior)

    //                 var nombre = "topo"+numAleatorio;
    //                 var findTopo = component.find(nombre);
    //                 findTopo.funcionHijo(numAleatorio)
                    
    //             }
    //         });
    //     $A.enqueueAction(action);      
    //     }
          
    //     component.set("v.numAnterior", [])
    // }

    
    activar: function(component, event) {
      var cantidad = document.getElementById("numTopos").value;
      var numAnterior = component.get("v.numAnterior");
  
      // Función recursiva para ejecutar la acción y esperar a que se complete antes de continuar con la siguiente iteración
      function executeAction(index, numAnterior, callback) {
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
                  numAnterior.push(numAleatorio);
                  component.set("v.random", numAleatorio);
                  component.set("v.numAnterior", numAnterior);
                  console.log(numAnterior);
  
                  var nombre = "topo" + numAleatorio;
                  var findTopo = component.find(nombre);
                  findTopo.funcionHijo(numAleatorio);
  
                  if (index < cantidad - 1) {
                      // Si hay más iteraciones, llamar a executeAction con el índice de la siguiente iteración
                      executeAction(index + 1, numAnterior, callback);
                  } else {
                      // Si no hay más iteraciones, llamar a la función de devolución de llamada
                      callback();
                  }
              }
          });
          $A.enqueueAction(action);
      }
  
      // Llamar a executeAction con el índice de la primera iteración y el array numAnterior
      executeAction(0, numAnterior, function() {
          // Función de devolución de llamada para indicar que se ha completado el bucle
          console.log("Bucle completado");
          numAnterior.length = 0;
          component.set("v.numAnterior", numAnterior)
          console.log(component.get("v.numAnterior"));
      });
      
      
    }
  
        
})
