<script>
    export default{
        name: 'AppHeader',
        data(){
            return{
                menuItems: [
                    {
                        label: 'home',
                        routeName: 'home'
                    },
                    {
                        label: 'proyectos',
                        routeName: 'projects'
                    },
                    {
                        label: 'quienes somos',
                        routeName: 'about'
                    },
                    {
                        label: 'contacto',
                        routeName: 'contact'
                    },
                ]
            }
        }
    }
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid container">
    <a class="navbar-brand text-white" href="/">barrio tropical</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(item, index in menuItems" :key="index">
            <router-link :to="{name : item.routeName}" active-class="active" class="nav-link text-white">
          {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
</template>



<style lang="scss" scoped>

</style>