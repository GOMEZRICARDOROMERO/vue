//creo el componente
Vue.component('entregabledos-componente',{//estructura dle componente con el nombre
    //la data se crea diferente, es necesario asignarle una funcion que retorne
    data:function(){
        return{
            //aqui va la data
            nombre: "Nombre",
            raza: "Raza y/o Color",
        }
    },
    //las props son los datos que el componente va a recibir desde data/app
    props:{
        colorcompo: String, //recibo un string y lo llamo colorcompo
        arraycompo: Array
    },
    //aqui va el template
    //con /*html*/ antes de `` se puede usar el codigo html
    template:/*html*/`
    <div > <!-- siempre debe ir todo dentro de un div -->
        <table class="table table-sm" :class="colorcompo" > <!-- vindeo el colorcompo cuyo valor viene de data y se pasa por parametro-->
            <thead>
                <tr>
                    <th scope="col">{{nombre}}</th>
                    <th scope="col">{{raza}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pet in arraycompo"> <!-- recorro el array y saco cada pet -->
                    <td>{{pet.nombre}}</td>
                    <td>{{pet.razaocolor}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `
})