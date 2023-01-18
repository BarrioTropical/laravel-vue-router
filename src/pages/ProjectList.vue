<template>
    <div>
        <section>
            <h1>Lista dei post</h1>
            <div class="row">
            <div class="col-12 col-md-4" v-for="(project, index) in projects" :key="index">
                <div class="card" style="width: 18rem;">
                <img :src="`{{ store.imageBasePath }}$(project.cover_image)`" class="card-img-top" :alt="project.title">
                 <div class="card-body">
                <h5 class="card-title">{{project.title}}</h5>
                <p class="card-text">{{ truncateContent(project.content)}}</p>
                <router-link class="btn btn-primary" :to="{name: 'single-project', params:{slug: project.slug}}">
                    Vedi i progetti
                </router-link>
                </div>
                </div>
            </div>
            </div>
            
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    import {store} from '../store';
    export default {
        name: 'ProjectList',
        data(){
            return {
                store,
                projects: [],
                contentMaxLen: 100,
            }
        },
        methods:{
            getProjects(){
                axios.get(`${this.store.apiBaseUrl}/projects`).then((response)=>{
                    console.log(response.data.results);
                    this.projects = response.data.results.data;
                })
            },
            truncateContent(text){
                if(Text.length > this.contentMaxLen){
                    return text.substr(0, this.contentMaxLen) + '....';
                } return text;
            },
        },
        mounted(){
            this.getProjects();
        },
    }
</script>

<style lang="scss" scoped>

</style>