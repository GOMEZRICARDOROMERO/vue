//creando la app
let app = new Vue({
    el:'#app', //elemento app
    data:{ // genero la data
        carta:{
            //variables de carta, para agregarlas dentro de llaves se usa carta.nombre
            imagen:"https://dthezntil550i.cloudfront.net/yl/latest/yl2105161820253160016932460/1280_960/8a610cf4-a1e9-42a2-81fe-c549b057f910.png",
            titulo:"Zelda",
            descripcion:"the legend of zelda",
            textoboton:"Ver precio",
            precio: 99999
        },
        //variables de data o globales
        corazon:0,
        bienvenida: "Enviale Corazones a Zelda",
    },
    methods:{ //aqui van todos los metodos/funciones
        mostrarPrecio(){
            alert(`Este cuadro cuesta ${this.carta.precio}`);
        },
        mas(){
            return this.corazon ++;
        },
        menos(){
            return this.corazon --;
        }
    },
    computed: { //aqui van todos los metodos/funcones computados que siempre deben retornar
        
    },
})