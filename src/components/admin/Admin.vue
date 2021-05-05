<template>
    <div>
        <div class="row mb-2">
            <div class="col-md-6" v-for="(post, index) in posts" :key="index">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">World</strong>
                        <h3 class="mb-0" v-text="post.title"></h3>

                        <div class="mb-1 text-muted">{{post.updated_date | human-date}}</div>
                        <p class="card-text mb-auto" v-text="post.description"></p>
                        <a href="#" class="stretched-link">Continue reading</a>
                    </div>

                    <div class="col-auto d-none d-lg-block">
                        <img :src="`http://localhost:4000/posts/${post.image}`" class="img-thumbnail">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            posts: [],
        }
    },

    methods: {
        fetchPosts(){
            this.axios('/posts/')
                .then(response => {
                    this.posts = response.data;
                })
        }
    },

    mounted() {
        this.fetchPosts();
    },
}
</script>


<style lang="css">
    /* @media (min-width: 768px){
        .h-md-250 {
            height: 250px;
        }
    } */
</style>