<template>
  <div id="app">
    <transition :name="`vux-pop-${direction}`">
      <keep-alive include="test">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!-- <v-console/> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      direction: state => state.app.direction
    })
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
