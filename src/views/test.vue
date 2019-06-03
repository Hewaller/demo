<template>
  <div></div>
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

<style>
</style>
