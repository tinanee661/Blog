<template>
    <div>
        <nav class="adminpanel navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="main-navigation">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" >
                    <router-link class="nav-link" to="/test" >
                    <a>Home</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/" >
                    <a>Reviews</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/" >
                    <a>Contact</a>
                    </router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/" >
                    <a>About</a>
                    </router-link>
                </li>
                
                </ul>
                </div>
            </div>
        </nav>
    <div class="introduction">
        <div>
        <h1><b>Welcome.</b></h1>
        <div class="text">
        <p > Everything you need to know about
                    the beauty world & trends. Makeup reviews, tutorials, beauty tips & so much more.</p>
                    <strong>Log in or sign in to get started</strong>
              </div>
             <div class="cta">
                <button class="cta-select" onclick="">Sign Up</button>
                <button class="cta-add" onclick="">Log In</button>
             </div>
           <div class="cover">
            <img src="img///coverphoto.png" alt="coverphoto.png" />
        </div>     
    </div>
 </div>
             

</template>
