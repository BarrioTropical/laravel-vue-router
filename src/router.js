import {createRouter, createWebHistory} from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import NotFound from './pages/NotFound.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about-us',
            name: 'AboutUs',
            component: AboutUs,
        },
        {
            path: '/contact-us',
            name: 'ContactUs',
            component: ContactUs,
        },
        {
            path: '/*',
            name: 'not-found',
            component: NotFound,
        },
        {
            path: '/project-list',
            name: 'ProjectList',
            component: ProjectList,
        },
        {
            path: '/projects/:slug',
            name: 'SingleProject',
            component: SingleProject,
        },

    ]
});

export {router};

