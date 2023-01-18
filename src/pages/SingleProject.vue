<template>
    <section>
    <h1></h1>
    </section>
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
                    console.log(response.data.results);
                    if(response.data.success){
                        this.project = response.data.results;
                    }else{
                        console.log(this.$router);
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