<template>
<div>
    <menu-bar/>
    <h1>Dados do item a ser leiloado:</h1>
    <input placeholder="Nome do item" type="text"/> 
    <input placeholder="Valor inicial" type="number"/>
    <button>Iniciar leilão</button>
</div>
    
</template>

<script>
import MenuBar from '../components/MenuBar'
export default {

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
