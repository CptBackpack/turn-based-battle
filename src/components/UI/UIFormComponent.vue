<script>

export default {
    props: {
        action: String,
        text: String,
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
        <h3 class="text-2xl font-bold text-center"> {{ this.text }}</h3>
        <form action="" class="text-black">
            <div class="mt-4">
                <slot></slot>
            </div>
        </form>
    </div>
</template>