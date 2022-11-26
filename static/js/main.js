//creando la app
let app = new Vue({
    el:'#app', //elemento app
    data:{ // genero la data
        arraylomitos:[
                {
                    nombre: "Puma",
                    razaocolor: "Labrador"
                },
                {
                    nombre: "Lucky",
                    razaocolor: "Criollo"
                },
                {
                    nombre: "Silver",
                    razaocolor: "Husky"
                }
        ],
        arraymichis:[
            {
                nombre: "Paco",
                razaocolor: "Negro"
            },
            {
                nombre: "Tito",
                razaocolor: "Blanco"
            },
            {
                nombre: "Harry",
                razaocolor: "Gris"
            }
        ],
        arraywonejos:[
            {
                nombre: "Bugs",
                razaocolor: "Gris"
            },
            {
                nombre: "Saltarin",
                razaocolor: "Blanco"
            },
            {
                nombre: "Gus",
                razaocolor: "Negro"
            }
        ],
        //variables de data o globales
        bienvenida: "Entregable #2",
        lomitos: "Tabla de Lomitos 🐶",
        michis: "Tabla de Michis 🐱",
        wonejos: "Tabla de Wonejos 🐰",
        coloruno: "table-primary",
        colordos: "table-danger",
        colortres: "table-dark"
    },
    methods:{ //aqui van todos los metodos/funciones
        
    },
    computed: { //aqui van todos los metodos/funcones computados que siempre deben retornar
        
    },
})