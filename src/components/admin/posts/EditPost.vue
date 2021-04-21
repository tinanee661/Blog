<template>
    
       <div class="main-container">
    
    
        <div class="content">
            
            <form action="addblogdb.php" method="POST" enctype="multipart/form-data">
            <label for="">TITLE: </label> <br>
            <input type="text" id="title" name="title" required>
            <label for="">Image: </label> <br>
            <input type="file" id="imagepath" name="imagepath" required>
            <label for="">DESCRIPTION: </label> <br>
            <textarea  id="text" name="text" cols="30" rows="5" required></textarea>
            <label for="">DESIGN: </label> <br>
            <input type="number" id="design" name="design" required>
            <label for="">Product Link: </label> <br>
            <input type="text" id="product_link" name="product_link" required>

            <input type="submit" name="submit" id="submit">
         </form>
         </div>
     </div>
   

</template>
<style lang="css">

    

</style>