<template>
  <div>
    <div v-for="(item, index) in arr" :key="index">{{ item }}</div>
    <button @click="sort">排序</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [12, 34, 12, 34]
    };
  },
  methods: {
    sort() {
      // this.arr = this.indexOf(this.arr)
      // this.arr = this.sortUnique(this.arr)
      // this.arr = this.filter(this.arr)
      this.arr = this.mapArr(this.arr);
    },
    // 挨个找元素
    indexOf(arr = []) {
      const res = [];
      arr.forEach(item => {
        if (res.indexOf(item) === -1) {
          //!res.includes(item)
          res.push(item);
        }
      });
      return res;
    },
    // 排序后去重
    sortUnique(arr = []) {
      const res = [];
      let str = "";
      arr.sort().forEach((item, i) => {
        console.log(item, str, "13");
        if (!i || str !== item) {
          res.push(item);
        }
        str = item;
      });
      console.log(res);
      return res;
    },
    filter(arr = []) {
      // return arr.filter((item, index, arr) => {
      //   return arr.indexOf(item) === index
      // })
      return arr.sort().filter((item, index, arr) => {
        return !index || item !== arr[index - 1];
      });
    },
    setArr(arr = []) {
      // Set 是值的集合，类似于数组，但是每个值都是唯一的
      return [...new Set(arr)];
    },
    mapArr(arr = []) {
      const seen = new Map();
      // Map 是一个键值对集合，先检查有没有这哥属性，没有就添加尽这个集合中
      return arr.filter(item => !seen.has(item) && seen.set(item, 1));
    }
  }
};
</script>

<style lang="scss" scoped></style>
