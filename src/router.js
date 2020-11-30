import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function importComponent(path) {
    return () => import(`./components/${path}.vue`)
}

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "admin",
            meta: {title: 'Admin'},
            component: importComponent('DashboardLayout'),
            children: [
                //Account
                {
                    path: "/account",
                    name: "Account",
                    meta: {title: 'Account'},
                    component: importComponent('DataMaster/Account'),
                },
                // Products
                {
                    path:"/products",
                    name: "Products",
                    meta: {title: 'Products'},
                    component: importComponent('DataMaster/Products'),
                },
                // Transaction
                {
                    path:"/transaction",
                    name: "Transaction",
                    meta: {title: 'Transaction'},
                    component: importComponent('DataMaster/Transaction'),
                },
                // Location
                {
                    path:"/location",
                    name: "location",
                    meta: {title: 'Location'},
                    component: importComponent('DataMaster/Location'),
                },
            ]
        },
        //login
        {
            path: "/login",
            name: "login",
            meta: {title: 'Login'},
            component: importComponent('Login'),
        },
        {
            path: '*',
            redirect: '/'
        },
    ],
});

//mengeset judul
router.beforeEach((to, from, next)=> {
    document.title = to.meta.title
    if(!localStorage.getItem('token') && to.meta.name!=='login')
        next({title: 'Login'})
    else
        next()
});

export default router;