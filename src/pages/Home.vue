<template>
<div>

    <h1>Leiloes abertos:</h1>
    <div :key="item.name" v-for="item in items">
        <li> {{item.name}} - {{item.currentBid}}</li>
        <input type="number" name="" id="" placeholder="make your bid">
        <button>make a bid</button>
    </div>
    
</div>
    
</template>


<script>
export default {
    data(){
        return{
            items: [{
                name: "Piano",
                currentBid: 3200
             },{
                 name: "Porshe Carrera",
                 currentBid: 77000
             } , {
                 name: "Quadro Monert",
                 currentBid: 620000
                 }]
        }
    }
    
}
</script>


<style>

</style>
