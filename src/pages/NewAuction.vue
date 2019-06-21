<template>
<div>
    <menu-bar/>
    <h1>Dados do item a ser leiloado:</h1>
    <input v-model="title" placeholder="Nome do item" type="text"/> 
    <input v-model="price" placeholder="Valor inicial" type="number"/>
    <button @click="create">Iniciar leilão</button>
</div>
    
</template>

<script>
import MenuBar from '../components/MenuBar'
import { createAuction } from '../services/auction';

export default {
  data() {
    return {
      title: '',
      price: 0,
    }
  },
  methods: {
    async create() {
      await createAuction(localStorage.getItem('accessToken'), {
        title: this.title,
        price: this.price,
      });
      this.$router.push('/home');
    }
  },
    components:{
        'menu-bar': MenuBar
    }
    
}
</script>

<style>

input{
    display: block;
    margin: 0 auto;
    height: 30px;
    width: 300px;
    margin-top: 10px;
    font-size: 15px;
    border-radius: 5px;
}

button{
    background-color: #333;
    color: white;
    height: 30px;
    font-size: 15px;
    border-radius: 5px;
    margin-top: 10px;
    width: 300px;
}

button:hover{
    background-color: #111;
    cursor: pointer;
}

</style>
