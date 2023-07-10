// import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router';
import Welcome_experiments from '@/components/Welcome_experiments.vue'
import Welcome_control from '@/components/Welcome_control.vue'
import Report_control from "@/components/Report_control";
import Report_experiment from "@/components/Report_experiment";
import Thanks from "@/components/Thanks";
import Demo_control from "@/components/Demo_control";
import Demo_experiment from "@/components/Demo_experiment";

Vue.use(VueRouter)

const routes = [
    {
        path: '/experiments',
        name: 'welcome_experiment',
        component: Welcome_experiments
    },
    {
        path: '/experiments/report/:name',
        name: 'report_experiment',
        component: Report_experiment
    },
    {
        path: '/thanks',
        name: 'thanks',
        component: Thanks
    },
    {
        path: '/experiments/demo/:name',
        name: 'demo_experiment',
        component: Demo_experiment
    },
    {
        path: '/control',
        name: 'welcome_control',
        component: Welcome_control
    },
    {
        path: '/control/report/:name',
        name: 'report_control',
        component: Report_control
    },
    // {
    //     path: '/thanks',
    //     name: 'thanks',
    //     component: Thanks
    // },
    {
        path: '/control/demo/:name',
        name: 'demo_control',
        component: Demo_control
    },
]

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })


const router = new VueRouter({
    routes,
})

export default router

// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title
//     next()
// })
