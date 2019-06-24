<template>
<div class="item">
    <h3>{{item.id}} - {{item.title}}</h3>
    <p>Current bid: $ {{item.price}}</p>
    <input v-if="user && user.username !== item.creator" type="number" name="" id="" placeholder="Place your bid here" v-model.lazy="currentBid">
    <button v-if="user && user.username !== item.creator" @click="makeBid">make a bid</button>
    <button v-if="user && user.username === item.creator" @click="finish">finish</button>
    <br>
    <br>
</div>
    
</template>

<script>
import {postBid, finishAuction} from '../services/auction'
export default {
    props:{
        item:{
            required: true,
            type: Object
        },
        user: {
          required: false,
          type: Object
        },
        onChange: {
          required: true,
          type: Function,
        }
    },
    data(){
        return{
            currentBid: 0,
        } 
    },
    methods:{
        async finish() {
          await finishAuction(localStorage.getItem('accessToken'), this.item.id);
          this.onChange();
          alert('Leilao finalizado com sucesso!');
        },

        async makeBid() {
          try {
            await postBid(localStorage.getItem('accessToken'), {
              id: this.item.id,
              price: parseFloat(this.currentBid),
            });
            this.currentBid = '';
            this.onChange();
            alert('Lance adicionado com sucesso!');
          } catch (err) {
            console.log(err);
            const errCode = err.response &&
              err.response.data &&
              err.response.data.code;
            switch (errCode) {
              case 'INVALID_PRICE':
                alert("Seu lance deve ser maior que o lance anterior!");
                break;
              case 'INSUFFICIENT_FUNDS':
                alert('Saldo insuficiente para realizar o lance.');
                break;
            }
          }
        }
    }
    
}
</script>

<style scoped>
.item{
    background-color: #12b74e69;
    width: 60%;
    margin: 0 auto;

}

button{
    background-color: #333;
    color: white;
    height: 30px;
    font-size: 15px;
        border-radius: 5px;
}

button:hover{
    background-color: #111;
    cursor: pointer;
}

input{
    height: 30px;
    width: 300px;
    border-radius: 8px;
}
</style>


