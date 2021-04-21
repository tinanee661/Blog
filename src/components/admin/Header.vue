<template>
        <nav class="adminpanel navbar navbar-expand-lg ">
            <div class="container-fluid">
            
                <div class="collapse navbar-collapse" id="main-navigation">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item" >
                            <router-link class="nav-link" to="/admin" >
                            <a>Home</a>
                            </router-link>
                        </li>
                        <li class="nav-item" >
                            <router-link class="nav-link" to="/admin/posts/addpost" >
                            <a>Add Post</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/admin/posts/editpost" >
                            <a>Edit Post</a>
                            </router-link>
                        </li>
                        <li class="nav-item" >
                            <router-link class="nav-link" to="/admin/posts/removepost" >
                            <a>Remove Post</a>
                            </router-link>
                        </li>
                        <li class="nav-item" >
                            <router-link class="nav-link" to="/" >
                            <a>Remove User</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>