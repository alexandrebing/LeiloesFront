<template>
<div class="item">
    <h3>{{item.name}} - {{item.currentBid}}</h3>
    <input type="number" name="" id="" placeholder="make your bid" v-model.lazy="currentBid">
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
            currentBid: 0
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
background-color: #8080802e
}
</style>


