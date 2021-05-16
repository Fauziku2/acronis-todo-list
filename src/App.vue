<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  methods: {
    ...mapActions('todos', ['init'])
  },
  created () {
    this.init()
  },
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #f2f3f8;
}
</style>
