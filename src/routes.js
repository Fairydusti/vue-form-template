import Userinfo from './components/form-page1.vue'
import Otherinfo from './components/form-page2.vue'
import IceCreaminfo from './components/form-page3.vue'
import Home from './components/home.vue'
export const routes =[
	{
		path:'/',
		component: Home
	},
	{ 
		path: '/user',
		component: Userinfo
	},
 	{ 
		path: '/mail',
		component: Otherinfo
	},
	{
		path: '/icecream',
		component: IceCreaminfo
	}
];