import Admin from './components/admin/Admin';
import AddPost from './components/admin/posts/AddPost';
import EditPost from './components/admin/posts/EditPost';
import RemovePost from './components/admin/posts/RemovePost';
import About from './components/guest/menu/About';
import Contact from './components/guest/menu/Contact';
import Reviews from './components/guest/menu/Reviews';
import Home from './components/guest/menu/Home';
import Profil from './components/user/umenu/Profil';
import Products from './components/user/umenu/Products';
import Skincare from './components/user/umenu/Skincare';
import Makeup from './components/user/umenu/Makeup';
import Testimonials from './components/user/umenu/Testimonials';
import Contactu from './components/user/umenu/Contactu';
import Settings from './components/admin/Settings';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AddUser from './components/users/AddUser.vue';
import EditUser from './components/users/EditUser.vue';
import ShowUsers from './components/users/ShowUsers.vue';
import UsersList from './components/users/UsersList.vue';
import TestimonialsAdmin from './components/admin/TestimonialsAdmin';
import Messages from './components/admin/Messages';
import User from './components/admin/User';

//importojme gjithe ato komponenta qe do i regjistrojme si routes



export const routes = [
    { path: '/admin', name: 'admin', component: Admin },
    { path: '/admin/testimonials/', name: 'testimonialsadmin', component: TestimonialsAdmin },
    { path: '/admin/messages/', name: 'messages', component: Messages },
    { path: '/admin/user/', name: 'user', component: User },
    { path: '/admin/settings/', name: 'settings', component: Settings },
    { path: '/admin/posts/addpost', name: 'addpost', component: AddPost },
    { path: '/admin/posts/edit/:id', name: 'editpost', component: EditPost },
    { path: '/admin/posts/removepost', name: 'removepost', component: RemovePost },
    { path: '/guest/menu/about', name: 'about', component: About },
    { path: '/guest/menu/contact', name: 'contact', component: Contact },
    { path: '/guest/menu/reviews', name: 'reviews', component: Reviews },
    { path: '/guest/menu/home', name: 'home', component: Home },
    { path: '/user/umenu/profil', name: 'profil', component: Profil },
    { path: '/user/umenu/products', name: 'products', component: Products },
    { path: '/user/umenu/skincare', name: 'skincare', component: Skincare },
    { path: '/user/umenu/makeup', name: 'makeup', component: Makeup },
    { path: '/user/umenu/testimonials', name: 'testimonials', component: Testimonials },
    { path: '/user/umenu/contactu', name: 'contactu', component: Contactu },
    { path: '/auth/login', name: 'login', component: Login },
    { path: '/auth/register', name: 'register', component: Register },
    {path:'/users/show-user/:id',name:'ShowUsers', component: ShowUsers},
    {path:'/users/add-user',name:'AddUser', component: AddUser},
    {path:'/users/edit-user/:id',name:'EditUser', component: EditUser},
    {path:'/users/users-list', name:'UsersList', component:UsersList},
]