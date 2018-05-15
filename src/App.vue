<template>
  <div id="app">
    <router-view/>
    <notifications group="foo" position="top center"/>
  </div>
</template>

<style lang="scss">
  html, body, #app, .public-layout {
    height: 100%;
  }

  #app {
    font-size: 1rem;
    font-family: "Open Sans", Arial, Helvetica, Verdana, sans-serif;
  }

  .vue-notification {
    padding: 1.1rem;
    margin-top: 3rem;
    font-size: 1.25rem;
    width: 31.25rem;
  }
</style>
