<template>
<div>
    <menu-bar/>
    <h1 v-if="user">Bem vindo, {{ user.username }}</h1>
    <h1 v-if="user">Saldo: $ {{ user.balance }}</h1>
    <h2>Leiloes abertos:</h2>
    <bid-input :key="item.name" v-for="item in items" :item="item"/>
</div>
    
</template>


<script>
import MenuBar from '../components/MenuBar'
import BidInput from '../components/BidInput'
import {getAuctions, getScore} from '../services/auction.js'
import {getTokenInfo} from '../services/auth.js';

export default {
    data(){
        return{
            user: null,
            items: [{
                name: "Piano",
                currentBid: 3200
             },{
                 name: "Porshe Carrera",
                 currentBid: 77000
             } , {
                 name: "Quadro Monert",
                 currentBid: 620000
                 },
                 {
                     name: "Nintendo Wii",
                     currentBid: 670
                 }],
            userBid: 0
        }
    },

    components:{
        'menu-bar':MenuBar,
        'bid-input':BidInput
    },

    mounted(){
      getTokenInfo(localStorage.getItem('accessToken'))
        .then((res) => {
          this.user = res.data; 
        });

        console.log*("res")
        const gameID = {
            gameID: 10000
        }
        getAuctions()
        .then( res => {
            console.log(res)
        })

    },

    methods:{
        makeBid(){

        }
    }
    
}
</script>


<style>

</style>
