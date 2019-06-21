<template>
  <div>
    <h1>Bem vindo ao gerenciador de leiloes</h1>
    <input v-model="username" type="text" id="username" placeholder="Usuário">
    <input v-model="password" type="password" id="password" placeholder="Senha">
    <button @click="validate">Entrar</button>
  </div>
</template>

<script>
import * as auth from '../services/auth';

export default {
  data () {
    return {
      username: '',
      password: '',
    };
  },
  mounted() {
    if (localStorage.getItem('accessToken')) {
      this.$router.push('/home');
    }
  },
  methods:{
    async validate() {
      try {
        const response = await auth.createToken(this.username, this.password);
        localStorage.setItem('accessToken', response.data.token);
        this.$router.push('/home');
      } catch (err) {
        const errCode = err.response &&
          err.response.data &&
          err.response.data.code;
        switch (errCode) {
          case 'NOT_AUTHORIZED': 
            alert('Credenciais invalidas');
            break;
        }
      }
    }
  }  
}
</script>

<style>

</style>
