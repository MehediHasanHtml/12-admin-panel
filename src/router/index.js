import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import ProductData from '../views/Product.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Contact from '../views/Contact.vue'

const routes = [{
        path: '/',
        name: Home,
        component: Home

    },
    {
        path: '/product',
        name: ProductData,
        component: ProductData

    },
    {
        path: '/product/:id',
        name: ProductDetails,
        component: ProductDetails,
        name: 'product'

    },
    {
        path: '/contact',
        name: Contact,
        component: Contact

    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router