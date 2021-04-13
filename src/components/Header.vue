<template>
<div>
    <nav class="main navbar navbar-expand-lg navbar-light">
    
      
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="links navbar-nav">
           
              <router-link class="nav-link" to="/" >
                <a>Home</a>
                </router-link>
              <router-link class="nav-link" to="/about" >
                <a>Reviews</a>
              </router-link>
              <router-link class="nav-link" to="/dashboard" >
                <a>Contact</a>
              </router-link>
              <router-link class="nav-link" to="/user" >
                <a>About</a>
              </router-link>
              <router-link class="nav-link" to="/contact" >
                <a>Contact</a>
              </router-link>
          </div>
        </div>

    </nav>
</div>

<!--
<ul class="nav nav-pills">
  <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
  <router-link to="/about" tag="li" active-class="active"><a>About</a></router-link>
  <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
  <router-link to="/useredit" tag="li" active-class="active"><a>User</a></router-link>
</ul> -->


</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
};
</script>