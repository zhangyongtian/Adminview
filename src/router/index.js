import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
	{
		path:"/admin",
		name:"admin",
		component:()=>import('@/views/Admin.vue'),
		children:[
			{
				path:"",
				name:"useradmin",
				component:()=>import('@/components/CommentAdmin/CommentAdmin.vue'),
			},
			{
				path:"aticle",
				name:"aticle",
				component:()=>import('@/components/Aticleadmin/Aticleadmin.vue'),
			},
			{
				path:"publicizeaticle",
				name:"publicizeaticle",
				component:()=>import('@/components/publicizeaticle/publicizeaticle.vue'),
			}
		]
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
	let remebermeadmin=window.localStorage.getItem("remebermeadmin");
  if(to.path == '/'||remebermeadmin){
    next();
  }else{
    alert('您还没有登录，请先登录');
    next('/');
  }
})
export default router
