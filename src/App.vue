<template>
  <div id="app">

    <nav class="navbar navbar-light">
      <img src="./assets/logo.png" style="width: 50px;">
      <img src="./assets/jeopardy.png" style="width: 150px;">
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarsExample01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
@import "./assets/primeflex.css";

.navbar {
  z-index: 500;
  background-color: #bfdbf8;
}

.wrapper {
  width: 90%;
  margin: 0 auto;
}

#app {
  background-color: #eeeeeec9;
  margin: 0;
  padding: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
