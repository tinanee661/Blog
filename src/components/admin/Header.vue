<template>
        <nav class="adminpanel navbar navbar-expand-lg">
            <div class="container">
            
                <div class="collapse navbar-collapse" id="main-navigation">
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
                            <router-link class="nav-link" to="/admin/posts/editpost" >
                            <a>Edit Post</a>
                            </router-link>
                        </li>
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/admin/posts/removepost" >
                            <a>Remove Post</a>
                            </router-link>
                        </li>
                        <li class="nav-item" id="navadmin">
                            <router-link class="nav-link" to="/" >
                            <a>Remove User</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>


<style lang="css" scoped>

    .nav-link {
        background-color: rgba(182, 134, 142, 0.979);
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