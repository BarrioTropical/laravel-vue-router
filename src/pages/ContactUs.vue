<template>
    <section>
    <div class="row">
        <div class="col-12">
        <h1 class="mt-5 mb-3">
            Contáctanos
        </h1>
        <ContactForm />
        </div>
        <div>
        <h3>¿Donde nos vemos?</h3>
        <p>Carrer de Bailèn, 08009 - Barcelona, España</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.9040309133165!2d2.1674489509820107!3d41.397890479161326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a38dcc8e8be1%3A0xac481c8ac4f6fc60!2sBarrio%20Tropical!5e0!3m2!1sit!2ses!4v1674226590902!5m2!1sit!2ses" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>



    </section>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
    export default {
        name: 'ContactUs',
        components: {
            ContactForm
        }
    }
</script>

<style lang="scss" scoped>

</style>