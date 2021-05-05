import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import moment from 'moment'

// import * as firebase from "firebase";
//fajlli routes importohet te kjo pjese dhe ne at file kemi deklaruar routat e ndryshem se cila route te cila komponent dergon gjate klikut
import { routes } from './routes';
//vue router e instalojme me npm install vue-router pastaj e thirrim ne main.js me import VueRouter from 'vue-router'

import store from "./store";
//regjistrimi i filterit global per zvogelimin e shkronjave
Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});
Vue.filter('human-date', function(value) {
    return moment(value).fromNow();
});

const instanceAxios = axios.create({
    baseURL: 'http://localhost:4000',
});
Vue.prototype.axios = instanceAxios

//regjistrimi i direktives globable highlight 
Vue.directive('highlight', {

    /* eslint-disable */
    bind(el, binding, vnode) {
        //el.style.backgroundColor='blue';
        //el.style.backgroundColor=binding.value;
        if (binding.arg == 'background') {
            el.style.backgroundColor = binding.value;
        } else {
            el.style.color = binding.value;
        }
    }
});


// const configOptions = {
//     apiKey: "AIzaSyB5Rm3187ezAUsGZvcK2hVN_X9gVM99BlY",
//     authDomain: "vuejs-http-c77c5.firebaseapp.com",
//     databaseURL: "https://vuejs-http-c77c5.firebaseio.com",
//     projectId: "vuejs-http-c77c5",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: ""
// };

// firebase.initializeApp(configOptions);

// firebase.auth().onAuthStateChanged(user => {
//     store.dispatch("fetchUser", user);
// });

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})