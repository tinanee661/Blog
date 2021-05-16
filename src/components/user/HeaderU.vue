<template>
    <div>
    <div class="main-container">
        <div class="main">
           
            <div class="links">
             <ul>
                <li><a href="src\components\user\umenu\Blog.vue"><i class="fas fa-home"></i>Home</a></li>
             </ul>

                <li><a href="src\components\user\umenu\Products.vue">Products</a>
                    <ul>
                        <li><a href="src\components\user\umenu\Skincare.vue">Skincare</a></li>
                        <li><a href="src\components\user\umenu\Makeup.vue">Makeup</a></li>
                    </ul>
                </li>
                <li><a href="src\components\user\umenu\Testimonials.vue">Testimonials</a>
                </li>

                <li><a href="src\components\user\umenu\Contactu.vue">Contact</a></li>
                <li><a href="src\components\user\umenu\Profil.vue">Profile</a>
                </li>
            </div>
            <div class="search">
                <form action="displaysearch.php" method="POST" id="form">
                <input type="text" id="search" placeholder=" Search..." name="search" style="border-radius:15px; ">
                <div id='button'>
                <button name="submit" id="searchbttn" style="background-color:transparent; border:none; margin:0px 30px;"><img src='' /></button>
                </div>
            </form>
            </div>
                
            
          
            <div class="logo-container"> 
            <img src="" alt="logo.png" />
            </div>
            <div class="logout"> <button class="logOut" onclick="">Log Outt</button></div>
           
        </div>
    
    </div>
    </div>
</template>
