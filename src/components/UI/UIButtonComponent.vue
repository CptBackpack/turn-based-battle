<script>

export default {
    props: {
        text: String,
        type: String,
    },

    data() {
        {
            return {
                typeColor: 'bg-gray-600 hover:bg-gray-700 active:bg-gray-800',
            }
        }
    },

    created() {
        switch (this.type) {
            case "warning":
                this.typeColor = "bg-red-600 hover:bg-red-700 active:bg-red-800";
                break;
            case "general":
            default:
                this.typeColor = "bg-gray-600 hover:bg-gray-700 active:bg-gray-800";
                break;

        }
    }
}
</script>

<template>
    <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium outline-3 rounded-lg border leading-tight uppercase shadow-md
        text-white hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out"
        :class = "this.typeColor" v-html="text">

    </button>
</template>