import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	// 改成自己的路径
// https://vitepress.dev/reference/site-config
base: "/zynq_study/"
export default defineConfig({
  title: "开始狠狠学习吧小伙子",
  description: "A VitePress Site",
  themeConfig: {
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', items:[
        {text:'首页',link:"/"},
        {text:'markdown示例',link:"/markdown-examples"},
      ] ,
    },
      { text: 'ZYNQ项目', items:[
        {text:'PL端',link:"/ZYNQ/zynq_pl"},
        {text:'PS端',link:"/ZYNQ/zynq_ps"},
      ] ,
    },
    ],


    sidebar: { 
      "/ZYNQ/zynq_pl": set_sidebar("/ZYNQ/zynq_pl"),
      "/ZYNQ/zynq_ps": set_sidebar("/ZYNQ/zynq_ps"),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dashboard' }
    ],
    footer:{
      copyright:"由官雨龙在2025年倾力打造"

    }
  }
})
