<template>

<div>
    <h1>Bem vindo ao gerenciador de leiloes

    </h1>
    <input type="text" name="" id="" placeholder="Usuário">
    <input type="text" placeholder="senha">
    <button @click="validate">Entrar</button>
</div>
    
</template>

<script>
export default {

    methods:{
        validate(){
            this.$router.push('\home')
        }
    }
    
}
</script>

<style>

</style>
