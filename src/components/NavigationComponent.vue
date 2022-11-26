<script setup>
import { RouterLink } from "vue-router";

</script>


<template>
  <div class="bg-slate-700">
    <nav class="fixed w-full bottom-0 md:bottom-auto md:top-0">
      <div class="bg-gray-900">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <div class="flex items-center"><a class="inline-flex items-center mr-8" href="#"><span
                  class="text-2xl text-white"></span><span
                  class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase hidden md:block"></span></a>
              <ul class="flex items-center space-x-8">
                <li class="">
                  <RouterLink to = "/" class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400" href="#">
                    Home
                  </RouterLink>
                  </li>
                <li class="">
                  <RouterLink to = "/about" class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400" href="#">
                    About
                  </RouterLink>
                </li>            
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

</style>
