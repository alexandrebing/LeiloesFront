<template>
    <div>
        <ul>
            <li>
                <a href="/home">Leilões</a>    
            </li>
            <li>
                <a href="/new-auction">Novo Leilão</a>
            </li>
            <LI>
                <a href="/">Sair</a>
            </LI>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
  width: 33.3333%;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>
