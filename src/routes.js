import { createWebHistory, createRouter } from "vue-router";
import Home from './pages/Home.vue'
import GetStarted from './pages/GetStarted.vue'
import AboutUs from './pages/AboutUs.vue'
import LogIn from './pages/LogIn.vue'
import HowItWorks from './pages/HowItWorks.vue'
import ViewProducts from './pages/ViewProducts.vue'
import ViewProductGroups from './pages/ViewProductGroups.vue'
import cart from './components/cart.vue'
import OrderInformation from './pages/OrderInformation.vue'

const routes =[
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name:'GetStarted',
        path: '/GetStarted',
        component: GetStarted
    },
    {
        name:'AboutUs',
        path: '/AboutUs',
        component: AboutUs
    },
    {
        name: 'LogIn',
        path: '/Login',
        component: LogIn
    },
    {
        name: 'HowItWorks',
        path: '/HowItWorks',
        component: HowItWorks
    },
    {
        name: 'ViewProducts',
        path: '/ViewProducts',
        component: ViewProducts
    },
    {
        name: 'ViewProductGroups',
        path: '/ViewProductGroups',
        component: ViewProductGroups
    },
    {
        name: 'cart',
        path: '/cart',
        component: cart
    },
    {
        name: 'OrderInformation',
        path: '/OrderInformation',
        component: OrderInformation
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;