
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="link-home">Home</router-link> |
      <router-link to="/basket"><ui-icon name="basket" width="24px" height="24px" fill="#777" /></router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/css/global.scss";
#app {
  background-color: #f0f0f0;
  min-height: 100vh;

  #nav {
    display: flex;
    width: 200px;
    justify-content: space-around;
    padding-top: 40px;

    .link-home {
      color: #777;
      font-family: cursive;
    }
  }

  .products {
    width: 80%;
    margin: 0 auto;
    border: 2px solid fuchsia;
    padding: 20px;

    .counter {
      border: solid cornflowerblue;
      padding: 3px;
      width: 35%;
      text-align: center;
    }
  }
}
</style>
