<template>
  <div class="container">
    <div class="left">left</div>
    <div class="right">
      <div :class="{'fixed-aside':fixed}" class="box">fsas</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: false
    }
  },
  mounted() {
    this.listenScroll()
  },
  methods: {
    listenScroll() {
      window.addEventListener('scroll', this.winScroll)
      console.log('456')
    },
    winScroll() {
      const scrollTop = document.documentElement.scrollTop
      console.log(scrollTop)
      this.fixed = !!(scrollTop > 80)
    }
  }
}
</script>

<style>
.container {
  width: 1160px;
  margin: 0 auto;
  position: relative;
}
.left {
  width: 850px;
  box-sizing: border-box;
  height: 10000px;
  background-color: #f8f8f8;
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 290px;
}
.box {
  width: 290px;
  height: 290px;
  background-color: aquamarine;
}
.fixed-aside {
  position: fixed;
  width: 290px;
  z-index: 100;
  transition: top 0.3s;
}
</style>
