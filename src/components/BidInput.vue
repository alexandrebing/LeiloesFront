<template>
<div class="item">
    <h3>{{item.id}} - {{item.title}}</h3>
    <p>Current bid: {{item.price}}</p>
    <input type="number" name="" id="" placeholder="Place your bid here" v-model.lazy="currentBid">
    <button @click="makeBid">make a bid</button>
    <br>
    <br>
</div>
    
</template>

<script>
import {postBid} from '../services/auction'
export default {
    props:{
        item:{
            required: true,
            type: Object
        }
    },
    data(){
        return{
            currentBid: "",
            accessToken: localStorage.getItem('accessToken') || "(no token)"
        }
    },
    
    mounted(){
        
    },
    
    methods:{

        makeBid(){
            if(this.currentBid <= this.item.price){
                alert("Seu lance deve ser maior que o lance anterior!")
            } else {
                const data = {
                    id: this.item.id,
                    price: this.currentBid
                }

                postBid(this.accessToken, data)
                .then( res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
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


