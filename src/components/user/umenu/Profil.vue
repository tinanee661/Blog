<template>
    <div class="main-container">
        <div class="content">
            <form enctype="multipart/form-data">
                <label for="">EMRI: </label> <br>
                <input type="text" id="emri" name="emri" required v-model="currentProfil.emri">
                <label for="">MBIEMRI: </label> <br>
                <input type="text" id="mbiemri" name="mbiemri" required v-model="currentProfil.mbiemri">
                 <label for="">EMAIL: </label> <br>
                <input type="email" id="email" name="email" required v-model="currentProfil.email">
               

                <input type="button" name="submit" id="submit" value="Update" @click="updatePost()">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentProfil: {
                emri: '',
                mbiemri: '',
                email: '',
             
            }
        }
    },

    mounted() {
        this.axios.get('/profiles/'+this.$route.params.id)
            .then(response => {
                this.currentProfil = response.data;
            });
    },

    methods: {
        updateProfil(){
            this.axios.put('/profils/'+this.$route.params.id, this.currentProfil)
            .then(res => {
                window.location.href = '/user/';
                console.log(res)
            }).catch(e=>{
                console.log(e)

                console.log('FAILURE!!')
            });
        }
    },
}
</script>

<style lang="css">

</style>