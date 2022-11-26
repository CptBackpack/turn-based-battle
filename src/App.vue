<script setup>
import Navigation from "./components/NavigationComponent.vue";
import { RouterView } from "vue-router";
</script>

<script>

export default {
  mounted(){
    console.log(import.meta.env.VITE_FOO);
    document.title = "Home " + import.meta.env.VITE_APP_TITLE;
  }
}
</script>

<template>
  <Navigation />
  <div class="mt-20 mx-auto w-3/4">
    <RouterView />
  </div>
</template>

