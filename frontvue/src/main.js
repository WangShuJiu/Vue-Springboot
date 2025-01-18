// src/main.js
import { createApp } from 'vue'  // 使用 createApp 来创建 Vue 应用
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'  // 导入 Vue Router 的新 API
import Home from './views/Home.vue'
import About from './views/About.vue'

// 配置路由
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

// 创建 Vue Router 实例
const router = createRouter({
  history: createWebHistory(),  // 使用 createWebHistory 创建历史记录模式
  routes
})

// 创建 Vue 应用并挂载
const app = createApp(App)
app.use(router)  // 注册 router 插件
app.mount('#app')  // 挂载到页面
