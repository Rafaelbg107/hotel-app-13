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
    background-color: rgba(10, 250, 100, 1);
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: white ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Bahnschrift Light", "Bahnschrift Light";
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
  .header nav button{
    color: #333333;
    background: rgba(10, 210, 100, 0.8);
    border: 2px solid rgba(10, 250, 100, 0.8);;
    border-radius: 50px;
    padding: 10px 20px;
    transition: background-color .3s;
  }
  .header nav button:hover{
    color: black;
    background: #F5F7F9;
    border: 3px solid rgba(10, 250, 100, 0.7);
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: rgba(10, 250, 100, 0.3) ;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: rgba(255,255,255,1);
    color: #E5E7E9;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Bahnschrift Light", "Bahnschrift Light";
    color: black;
  }

  #myForm {
    font-family: "Bahnschrift Light", "Bahnschrift Light";
    background-color: rgba(10, 250, 100, 1);
    text-align: center;
  }

  input[type=submit]{
    background-color: black;
    border: none;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    font-weight: bold;
  }
</style>
