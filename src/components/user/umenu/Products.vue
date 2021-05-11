<template>
       
  <div class="content">
      <h1>Want to shop the products we use? Click the category you are interested in</h1>
                <div class="skincare">
                    <a href="">
                        <img src="@/components/user/img/skincare2.png" title="insert title" width="333px" alt="insert description here"></a>
                               
                    </div>
                   
                <div class="makeup">
                    <a href="">
                        <img src="@/components/user/img/makeup2.png" title="insert title" width="333px" alt="insert description here"></a>
                      
                    </div>
                    
            </div>
              

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