<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit user
        <router-link :to="{ name: 'ShowUsers', params: { id: key } }">(Show User Data)</router-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="nameGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter name">
            <b-form-input id="name" v-model.trim="user.name"></b-form-input>
          </b-form-group>
          <b-form-group id="descGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Description">
              <b-form-textarea id="description"
                         v-model="user.description"
                         placeholder="Enter something"
                         :rows="2"
                         :max-rows="6">{{user.description}}</b-form-textarea>
          </b-form-group>
          <b-form-group id="emailGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter email">
            <b-form-input id="email" v-model.trim="user.email"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Update</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
/*eslint-disable */

import firebase from '../../Firebase'
import router from '@/router'

export default {
  name: 'Edituser',
  data () {
    return {
      key: this.$route.params.id,
      user: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('users').doc(route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.user = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('users').doc(this.$route.params.id);
      updateRef.set(this.user).then((docRef) => {
        this.key = ''
        this.user.name = ''
        this.user.description = ''
        this.user.email = ''
      router.push({ name: 'ShowUsers', params: { id: this.$route.params.id }})
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
