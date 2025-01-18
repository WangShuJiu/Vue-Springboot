<!-- src/App.vue -->
<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Global styles */
#app {
  font-family: 'Arial', sans-serif;
}

footer {
  margin-top: 20px;
  text-align: center;
  padding: 10px;
  background-color: #f8f8f8;
}
</style>
