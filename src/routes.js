import HelloWorld from './components/HelloWorld.vue'
import Landing from './components/Landing.vue'
import Users from './components/Users.vue'


export default[
    {path:'/', component: Landing},
    {path:'/log', component: HelloWorld},
    {path:'/user', component: Users},
    
]