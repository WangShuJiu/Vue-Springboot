<!-- src/components/Header.vue -->
<template>
    <header>
      <h1>My Vue App</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  /* eslint-disable vue/multi-word-component-names */

  export default {
    name: 'Header'
  }
  </script>
  
  <style>
  header {
    background-color: #42b983;
    color: white;
    padding: 10px;
  }
  
  nav a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
  }
  </style>
  