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
//importojme gjithe ato komponenta qe do i regjistrojme si routes



export const routes = [
    { path: '/admin', name: 'admin', component: Admin },
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
]