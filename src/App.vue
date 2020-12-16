<template>
  <div id="app">
    <div class="header">
      <h1>
        <a href="../Inicio">
          <img src="./assets/Logo-hotel.png">
        </a>
      </h1>
      
      <nav>
        <form>
          <input type="text" placeholder="Id de reserva" name="idReserva" 
              pattern="[0-9]{1,15}" required v-model="idres">
          <button type="submit" v-on:click="verReserva">Buscar reserva</button>
        </form>
        <button > Login </button>
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>   
    </div>

    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {


  name: 'App',

  components: {},

  data: function(){
    return {
    is_auth: localStorage.getItem('isAuth') || false,
    idres: this.$refs.idres
    }
  },
  methods: {
    init: function(){
      if(this.$route.name != "root"){
        this.$router.push({name: "root"})
      }
    },
    verReserva: function(){
      console.log("El valor de idres es: " + this.idres)
      if(this.idres != undefined)
        //axios.get("http://localhost:8000/reserva/" + this.idres).then((result)=>{});
        this.$router.push({name: "ver_reserva", params:{idReserva:this.idres}})
      else
        alert("Ingrese un número de reserva");
      },
  
  },
}
</script>

<style>
  body{
    margin: 0 0 0 0;
    background-color: #e5e5e5;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #ffffff ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "bahnschrift light";
  }
  .header h1{
    margin-top: 2.3%;
    width: 30%;
    text-align: center;
    color: black;
  }

  
  .header nav {
    height: 100%;
    width: 40%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items:  center;
    font-size: 20px;
  }
  .header nav button{
    color: #333333;
    background: #c2f1ff;
    border: 2px solid  #0c7f9cd7;
    border-radius: 20px;
    padding: 8px 40px;
    transition: background-color .3s;
  }
  .header nav button:hover{
    color: black;
    background: #F5F7F9;
    border: 1px solid  #2f8ca3b0;
  }
  .main-component{
    height: 75vh;
    width: 1190;
    margin: 0%;
    padding: 0%; 
    background-image: url('./assets/hotel_fondo.jpeg');
     background-position: center;
     background-size:cover;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 980;
    height: 7vh;
    min-height: 60px;
    background-color: #fffffffb;
    color: #E5E7E9;
  }
  .footer h2{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Helvetica" ;
    font-size: 80%;
    color: #2f8ca3b0;
  }

  #myForm {
        font-family: "Bahnschrift Light";
        background-color: #f3f3f3d8;
        padding: 50px;
        text-align: center;
    }

    input[type=submit]{
        background-color: #2f8ca3b0;
        border: none;
        color: white;
        padding: 10px 30px;
         cursor: pointer;
        font-weight: bold;
  }
</style>
