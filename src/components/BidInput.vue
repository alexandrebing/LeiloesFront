<template>
<div class="item">
    <h3>{{item.title}}</h3>
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
            accessToken: sessionStorage.getItem(accessToken) || ""
        }
    },
    
    mounted(){
        console.log(this.accessToken)
    },
    
    methods:{

        makeBid(){
            const itemPrice = this.item.price
            if(this.currentBid <= this.item.price){
                alert("Seu lance deve ser maior que o lance anterior!")
            } else {
                console.log("lance enviado para a API")

                const data = {
                    id: this.item.id,
                    price: this.currentBid
                }

                postBid(data)
                .then( res => {
                    console.log(res)
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


