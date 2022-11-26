<script setup>
import 'remixicon/fonts/remixicon.css';
import { Combat } from "./Combat/combat"; 
import UIButton from "./UI/UIButtonComponent.vue";
</script>


<template>
   
</template>

<script>
const CombatInstance = new Combat();

export default {
    mounted: () => {
        CombatInstance.setup(CombatInstance);
    },
    methods: {
        action: (type) => {
            CombatInstance.action(type);
        }
    }
}
</script>
<style scoped>

</style>
