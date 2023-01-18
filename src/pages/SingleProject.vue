<template>
    <section v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.content }}</p>
    <img :src="`{{ store.imageBasePath }}$(project.cover_image)`" class="card-img-top" :alt="project.title">
    <p>{{ project.content }}</p>
    <div v-if="project.category">
    <h5>Category: {{ project.category.name }}</h5>
    </div>
    <div v-if="project.tag && project.tags.length">
    <h5>Tag</h5>
    <div>
    <span v-for="(tag, index) in projects.tags" :key="index" class="badge text-bg-info">{{tag.name}}</span>
    </div>
    </div>
    </section>
    <section v-else>Loading</section>
</template>

<script>
    import axios from 'axios';
    import {store} from '../store';
    export default {
        name: 'SingleProject',
        data(){
            return{
            store,
            project: null,
            } 
        }, 
        methods:{
            getProjects(){
                axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((response)=>{
                    //console.log(response.data.results);
                    if(response.data.success){
                        this.project = response.data.results;
                    }else{
                        //console.log(this.$router);
                        this.$router.push({name: 'not-found'})
                    }
                })
            },
            
        },
        mounted(){
            this.getProjects();
        }
    }
</script>

<style lang="scss" scoped>

</style>