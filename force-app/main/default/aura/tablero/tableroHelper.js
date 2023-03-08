({
    desactivar : function(component, event) {
        for (let i = 1; i < 9; i++) {
            var nombre = "topo"+i;
            var findTopo = component.find(nombre);
            findTopo.desactivar()
        }
    }
})
