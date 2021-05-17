<template>
  <ul>
    <li v-if="$route.name === 'about'">
      <router-link id="home" to="/">Home</router-link>
    </li>
    <li v-if="$route.name === 'home'">
      <router-link id="about" to="/about">About</router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  height: 70px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffffff;
}

li {
  display: flex;
  height: 100%;
  align-items: center;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a {
  text-decoration: none;
  color: #5174b1;
}

li:hover {
  background-color: #dee5ef;
}
</style>