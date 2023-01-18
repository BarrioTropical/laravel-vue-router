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
        method:{
            
        }
    }
</script>

<style lang="scss" scoped>

</style>