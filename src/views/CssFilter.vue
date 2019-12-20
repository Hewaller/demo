<template>
  <div>
    <div class="bg shadow"></div>
    <section class="container">
      <!-- i am lhyt -->
    </section>
    <section style="filter: contrast(20); background-color: #000">
      <div class="light"></div>
    </section>
    <section style="filter: contrast(20); background-color: #000">
      <div class="container"></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// 毛玻璃
// .bg,
// .container::before {
//   background-image: url("../assets/images/img1.jpg");
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-attachment: fixed;
// }
// .bg {
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   position: absolute;
//   z-index: -1;
// }

// .container::before {
//   content: "";
//   filter: blur(20px);
//   z-index: -1;
// }

// .container {
//   background: rgba(0, 0, 0, 0.5);
//   color: #fff;
//   font-size: 30px;
//   /* 用transform会悲剧哦 */
//   left: calc(50% - 250px);
//   top: calc(50% - 200px);
// }

// .container,
// .container::before {
//   width: 500px;
//   height: 400px;
//   position: absolute;
//   border-radius: 8px;
// }

// 模糊阴影
// .shadow,
// .shadow::before {
//   width: 500px;
//   height: 400px;
//   background: url("../assets/images/img1.jpg") no-repeat;
//   background-size: cover;
// }
// .shadow {
//   position: relative;
// }
// .shadow::before {
//   content: "";
//   display: block;
//   position: absolute;
//   filter: blur(20px);
//   z-index: -1;
//   top: 20px;
//   left: 20px;
// }

// 自动颜色变换
// @keyframes auto_change_color {
//   from {
//     filter: hue-rotate(0);
//   }

//   to {
//     filter: hue-rotate(360deg);
//   }
// }
// .container {
//   background-image: url("../assets/images/img1.jpg");
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   animation: auto_change_color 5s linear infinite;
// }

// 从抽象到具象

// @keyframes shadow_move {
//   from {
//     top: 400px;
//     left: 400px;
//     filter: blur(20px);
//   }

//   to {
//     top: 0;
//     left: -250px;
//     filter: blur(0);
//   }
// }

// @keyframes container_move {
//   from {
//     top: 0;
//     filter: blur(20px);
//     left: 0;
//   }

//   to {
//     top: 200px;
//     left: 400px;
//     filter: blur(0);
//   }
// }

// @keyframes body_contrast {
//   from {
//     filter: contrast(20);
//   }

//   to {
//     filter: contrast(1);
//   }
// }

// .shadow,
// .shadow::before {
//   width: 250px;
//   height: 400px;
//   background: url("../assets/images/img1.jpg") no-repeat;
//   background-size: cover;
// }
// .shadow {
//   position: relative;
//   animation: container_move 20s infinite ease;
//   background-position-x: -250px;
// }
// .shadow::before {
//   content: "";
//   display: block;
//   position: absolute;
//   z-index: -1;
//   animation: shadow_move 20s infinite ease;
// }

// body {
//   animation: body_contrast 20s infinite ease;
// }

@keyframes lighting {
  from {
    filter: brightness(0);
  }

  to {
    filter: brightness(100%);
  }
}

@keyframes light {
  from {
    filter: brightness(100%);
  }

  to {
    filter: brightness(300%);
  }
}
.light {
  background: url("../assets/images/light.jpg ") no-repeat;
  width: 463px;
  height: 400px;
  animation: lighting 0.5s linear infinite;
}
.container {
  background-image: url("../assets/images/img3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 300px;
  animation: light 0.5s linear infinite;
  position: absolute;
  left: 250px;
}
</style>
