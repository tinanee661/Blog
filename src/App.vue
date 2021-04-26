<template>
    <div>
        <app-Header-Admin v-if="isAdmin"></app-Header-Admin>
        <app-Header v-else></app-Header>
       

                <!--<h1 v-highlight="'red'">Routing</h1>
                <p >Hello World</p>
                <h3>Local Directive</h3>
                <p>{{text | toUpperCase | to-lowercase}}</p> -->
                
        <router-view></router-view>
        
        <app-Footer-Admin v-if="isAdmin"></app-Footer-Admin>
        <app-Footer v-else></app-Footer>
    </div>
</template>

<script>
/* eslint-disable */
    import HeaderAdmin from './components/admin/Header.vue';
    import FooterAdmin from './components/admin/Footer.vue';
    import Header from './components/guest/Header.vue';
    import Footer from './components/guest/Footer.vue';
    
    export default {
        data(){
            return{
                text:'Hello World',
                isAdmin: true
            }
        },filters:{
            toUpperCase(value){
                return value.toUpperCase();
            }
        },
        components:{
            appHeader:Header,
            appFooter:Footer,
            appHeaderAdmin:HeaderAdmin,
            appFooterAdmin:FooterAdmin,
        },directives:{
            'local-hightlight':{
                bind(el, binding, vnode){
                el.style.color='blue';
            }
        }
    }
    }
</script>

<style>
    @import '../src/assets/style.css';
</style>
