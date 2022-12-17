<script setup>
import 'remixicon/fonts/remixicon.css';
</script>


<template>
    <div class="">
        PROFYAH
    </div>
</template>

<script>


export default {
    mounted: function () {
        this.$store.dispatch('user/getData').then(
                () => {
                    // TODO : this is for profile   
 
                },
                error => {
                    console.log('error');
                    this.loading = false;
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );

        // this.$store.dispatch('user/refreshTest').then(
        //     (response) => {
        //         console.log(response);
        //     },
        //     (error) => {
        //         console.log(object);
        //     }
        // );
    },
    methods: {

    },
}
</script>
<style scoped>

</style>
