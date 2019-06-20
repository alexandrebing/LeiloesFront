<template>
<div>
    <menu-bar/>
    <h1>Bem vindo, {{user}}</h1>
    <h2>Leiloes abertos:</h2>
    <bid-input :key="item.name" v-for="item in items" :item="item"/>
</div>
    
</template>


<script>
import MenuBar from '../components/MenuBar'
import BidInput from '../components/BidInput'
export default {
    data(){
        return{
            user: "Joe",
            items: [{
                name: "Piano",
                currentBid: 3200
             },{
                 name: "Porshe Carrera",
                 currentBid: 77000
             } , {
                 name: "Quadro Monert",
                 currentBid: 620000
                 }],
            userBid: 0
        }
    },
    components:{
        'menu-bar':MenuBar,
        'bid-input':BidInput
    },

    methods:{
        makeBid(){

        }
    }
    
}
</script>


<style>

</style>
