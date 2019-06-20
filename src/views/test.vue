<template>
  <div class="box">
    <p class="animate">1文字滚动的内容1</p>
    <p class="animate">2文字滚动的内容2</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, [3, 4]],
      obj: { a: 1, b: 2, c: { d: 3, f: 4 } }
    }
  },
  mounted() {
    this.restCopy() // 结构拷贝
  },
  methods: {
    restCopy() {
      const { arr, obj } = this
      const [...newArr] = [...arr]
      const newObj = { ...obj }
      newArr[0] = 'test'
      newArr[2][1] = 789789
      newObj['c']['f'] = 123456
      console.log(newArr, arr)
      console.log(newObj, obj)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.box {
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ff6700;
  overflow: hidden;
}

.animate {
  padding-left: 20px;
  font-size: 12px;
  color: #000;
  display: inline-block;
  white-space: nowrap;
  animation: 10s wordsLoop linear infinite normal;
}

@keyframes wordsLoop {
  0% {
    transform: translateX(200px);
    -webkit-transform: translateX(200px);
  }
  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}

@-webkit-keyframes wordsLoop {
  0% {
    transform: translateX(200px);
    -webkit-transform: translateX(200px);
  }
  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}
</style>
