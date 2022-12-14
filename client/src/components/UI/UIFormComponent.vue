<script>

export default {
    props: {
        action: String,
        text: String,
        id: String,
    },

    data() {
        {
            return {

            }
        }
    },

    created() {

    },

    methods: {

    }
}
</script>

<template>
    <div class="px-2 py-2">
        <div class="flex justify-center">
        </div>
        <h3 class="text-2xl font-bold text-center"> {{ this.text }} </h3>
        <form :action="this.action" class="text-black" :id = "this.id">
            <div class="mt-4">
                <slot></slot>
            </div>
        </form>
    </div>
</template>