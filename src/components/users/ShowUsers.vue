<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit user
        <b-link href="#/users-list">(user List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{user.name}}
        </template>
        <template slot="lead">
          name: {{user.name}}<br>
          Description: {{user.description}}<br>
          email: {{user.email}}<br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="edituser(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteuser(key)">Delete</b-btn>
      </b-jumbotron>
      
    </b-col>
    
  </b-row>
</template>

<script>
/*eslint-disable */

import firebase from '../../Firebase'
import router from '@/router'

export default {
  name: 'Showuser',
  data () {
    return {
      key: '',
      user: {}
    }
  },
//created perdoret per me ekzekutu automatikisht kodin ose queryn ne momentin qe komponenta bohet render!
created () {
    const ref = firebase.firestore().collection('users').doc(route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.user = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    edituser (id) {
     router.push({
        name: 'EditUser',
        params: { id: id }
      })
    },
    deleteuser (id) {
      firebase.firestore().collection('users').doc(id).delete().then(() => {
       router.push({
          name: 'UsersList'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>
