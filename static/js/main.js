let app = new Vue({
    el:'#app',
    data:{
        bienvenida: "Bienvenido a Vue 2",
        carta:{
            imagen:"https://dthezntil550i.cloudfront.net/yl/latest/yl2105161820253160016932460/1280_960/8a610cf4-a1e9-42a2-81fe-c549b057f910.png",
            titulo:"Zelda",
            descripcion:"the legend of zelda",
            textoboton:"Ver precio",
            precio: 99999
        }
    },
    methods:{
        mostrarPrecio(){
            alert(`Este cuadro cuesta ${this.carta.precio}`);
        }
    }
})