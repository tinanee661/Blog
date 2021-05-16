<template>
        <nav class="adminpanel navbar navbar-expand-lg" :style="'background-color: '+this.getCookie(this.cookieName)">
            <div class="container">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/admin" >
                            <a>Home</a>
                            </router-link>
                        </li>
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/admin/posts/addpost" >
                            <a>Add Post</a>
                            </router-link>
                        </li>
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/admin/user" >
                            <a>Users</a>
                            </router-link>
                        </li>
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/admin/testimonials" >
                            <a>Testimonials</a>
                            </router-link>
                        </li>
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/admin/messages" >
                            <a>Messages</a>
                            </router-link>
                        </li>
                    </ul>

                    <router-link class="nav-link" to="/admin/settings/" >
                        <img src="@/components/admin/img/settings.png" style="height: 26px;"/>
                    </router-link>
                </div>
            </div>
        </nav>
</template>


<style lang="css" scoped>

    .nav-link {
        color: black;
        font-size: 20px;
        margin-right: 0 !important;
        padding: 0px 25px !important;
    }

    .nav-link a::after {
        content: '';
        width: 0px;
        height: 1px;
        display: block;
        background: black;
        transition: 300ms;
    }

    .nav-link a:hover::after {
        width: 100%;
    }
</style>