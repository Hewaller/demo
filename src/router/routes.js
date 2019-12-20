import Vue from "vue";
import Home from "@/views/Home";
import TextScroll from "@/views/TextScroll.vue";
import Sort from "@/views/Sort";
import Music from "@/views/Music";
import DownloadZip from "@/views/DownloadZip";
const isDev = process.env.NODE_ENV === "development";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/scroll",
    name: "scroll",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Scroll.vue")
  },
  {
    path: "/sort",
    name: "sort",
    component: Sort,
    meta: {
      title: "数组排序"
    }
  },
  {
    path: "/music",
    name: "music",
    component: Music,
    meta: {
      title: "音乐播放器"
    }
  },
  {
    path: "/DownloadZip",
    name: "DownloadZip",
    component: DownloadZip,
    meta: {
      title: "zip打包下载"
    }
  },
  {
    path: "/CssFilter",
    name: "CssFilter",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/CssFilter"),
    meta: {
      title: "css滤镜效果"
    }
  }
];

if (isDev) {
  // 开发环境引入测试页面
  routes.push({
    path: "/textScroll",
    name: "textScroll",
    meta: {
      title: "textScroll",
      needLogin: true
    },
    component: TextScroll
  });
}

export default routes;
