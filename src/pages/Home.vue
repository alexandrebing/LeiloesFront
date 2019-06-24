<template>
<div v-if="loaded">
    <menu-bar/>
    <h1 v-if="user">Bem vindo, {{ user.username }}</h1>
    <h1 v-if="user">Saldo: $ {{ user.balance }}</h1>
    <h2>Leiloes abertos:</h2>
    <bid-input :onChange="loadData" :user="user" :key="item.name" v-for="item in items" :item="item"/>
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
            loaded: false,
            user: null,
            items: [],
        }
    },

    components:{
        'menu-bar':MenuBar,
        'bid-input':BidInput
    },

    mounted() {
      this.loadData();
    },

    methods:{
        async loadData() {
          await Promise.all([
            this.loadAuctions(),
            this.loadUserData(),
          ])
        },
        async loadUserData() {
          const accessToken = localStorage.getItem('accessToken');
          if (accessToken) {
            try {
              const res = await getTokenInfo(accessToken);
              this.user = res.data;
              this.loaded = true; 
            } catch (err) {
              localStorage.removeItem('accessToken');
              this.$router.push('/');
            }
          } else {
            this.loaded = true;
          }
        },
        async loadAuctions(){
          const res = await getAuctions();
          this.items = res.data;
        }
    }
    
}
</script>
