import Home from './components/home/Home.vue'
import About from './components/about/About.vue'

export const routes = [
    {path: '', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/about', component: About}
]