<template>
  <div class="center-flex column-flex">
    <button
      class="btn"
      v-for="item in routeData"
      :key="item.name"
      @click="$router.push(item.name)"
    >{{item.meta && item.meta.title || item.name}}</button>
  </div>
</template>

<script>
import routes from '@/router/routes'

export default {
  components: {
  },
  data() {
    return {
      data: routes
    }
  },
  computed: {
    routeData() {
      return this.data.filter(item => item.name && !['debug'].includes(item.name))
    }
  }
}
</script>

<style scoped lang='scss'>
.btn {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  a {
    color: #f8f8f8;
  }
}
</style>
