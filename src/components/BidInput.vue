<template>
<div class="item">
    <h3>{{item.name}}</h3>
    <p>Current bid: {{item.currentBid}}</p>
    <input type="number" name="" id="" placeholder="Place your bid here" v-model.lazy="currentBid">
    <button @click="makeBid">make a bid</button>
    <br>
    <br>
</div>
    
</template>

<script>
export default {
    props:{
        item:{
            required: true,
            type: Object
        }
    },
    data(){
        return{
            currentBid: ""
        }
    },

    methods:{

        makeBid(){
            if(this.currentBid <= this.item.currentBid){
                alert("Seu lance deve ser maior que o lance anterior!")
            } else {
                console.log("lance enviado para a API")
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


