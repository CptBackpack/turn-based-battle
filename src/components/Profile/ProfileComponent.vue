<script setup>
import 'remixicon/fonts/remixicon.css';
import api from "../../services/api";

import EventBus from "../../common/EventBus";

</script>


<template>
    <div class="">
        PROFYAH
    </div>
</template>

<script>


export default {
    mounted: function () {
        api.get("/test", {}).then((response) => {
            // console.log(response);
            console.log(response.data);

            if(response.data['disconnect'] == 'true') EventBus.dispatch("logout");
        });

        /**
         * error => {
                this.content =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

                if (error.response && error.response.status === 403) {
                EventBus.dispatch("logout");
                }
            }
         */
    },
    methods: {

    },
}
</script>
<style scoped>

</style>
