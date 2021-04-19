<template>
    <div>
        <nav class="adminpanel navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="/admin">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="main-navigation">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" >
                            <router-link class="nav-link" to="/admin/posts/addpost" >
                            <a>Add Post</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/" >
                            <a>Admin</a>
                            </router-link>
                        </li>
                        <li class="nav-item" >
                            <router-link class="nav-link" to="/" >
                            <a>Admin</a>
                            </router-link>
                        </li>
                        <li class="nav-item" >
                            <router-link class="nav-link" to="/" >
                            <a>Admin</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>