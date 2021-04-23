<template>
  
  <div class="containerC">
   
    <div class="containersC">
      <p> <br>
        We are always improving so give us your feedback.
      <br>
    So don't hesitate to contact us.</p>

      <div class="contentC">
        
     
        <div class="formC">
          
      
          <form onsubmit= "return validate()" action="db/contactdb.php" id="form" method="POST">
            <label for="fname">Name</label><br>
            <input type="text" id="fname" name="firstname" placeholder=" First Name"> <br>
            <label for="lname">Email</label><br>
            <input type="text" id="emailc" name="email" placeholder="Email"><br>
            <label for="subject">Subject</label><br>
            <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px" required></textarea><br>
            <input type="submit" value="Submit" id="submitc" name="submit">
          </form>

        </div>
        <div class="mapC">
       
            <a href="skincare.php">
                        <img src="@/components/guest/img/contactlogo.png" title="insert title" width="350px" height="350px"alt="insert description here"></a>
                             
        </div>
      </div>
    </div>
  </div>
</template>