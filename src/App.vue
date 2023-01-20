<script>
import AppHeader from './components/HeaderComponent.vue';
import AppFooter from './components/FooterComponent.vue';

  export default {
    name: 'App',
    components:{
      AppHeader,
      AppFooter,
    }
  }
</script>


<template>
  <AppHeader></AppHeader>
  <main class="container-fluid">
    <router-view></router-view>
  </main>
  <AppFooter></AppFooter>
</template>



<style lang="scss" scoped>

</style>