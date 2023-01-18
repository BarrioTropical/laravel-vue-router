<script>
import AppHeader from './components/HeaderComponent.vue';

  export default {
    name: 'App',
    components:{
      AppHeader
    }
  }
</script>


<template>
  <AppHeader></AppHeader>
  <main class="container">
    <router-view></router-view>
  </main>
</template>



<style lang="scss" scoped>

</style>