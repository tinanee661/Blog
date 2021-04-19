import HelloWorld from './components/HelloWorld';
import Admin from './components/admin/Admin';
//importojme gjithe ato komponenta qe do i regjistrojme si routes



export const routes = [
    { path: '/about', name: 'home', component: HelloWorld },
    { path: '/admin', name: 'admin', component: Admin },

]