import HelloWorld from './components/HelloWorld';
import Admin from './components/admin/Admin';
import AddPost from './components/admin/posts/AddPost';
import EditPost from './components/admin/posts/EditPost';
import RemovePost from './components/admin/posts/RemovePost';
//importojme gjithe ato komponenta qe do i regjistrojme si routes



export const routes = [
    { path: '/about', name: 'home', component: HelloWorld },
    { path: '/admin', name: 'admin', component: Admin },
    { path: '/admin/posts/addpost', name: 'addpost', component: AddPost },
    { path: '/admin/posts/editpost', name: 'editpost', component: EditPost },
    { path: '/admin/posts/removepost', name: 'removepost', component: RemovePost },

]