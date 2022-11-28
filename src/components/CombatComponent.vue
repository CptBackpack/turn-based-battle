<script setup>
import $ from 'jquery';
import 'remixicon/fonts/remixicon.css';
import { Combat } from "./Combat/combat";
import UIButton from "./UI/UIButtonComponent.vue";
</script>


<template>
    <div class="grid grid-cols-2 gap-4 h-80">
        <div id="player" class="bg-gray-800 flex justify-start">
            137x320 player
        </div>
        <div id="enemy" class="bg-gray-800 flex justify-end">
            137x320 enemy
        </div>
    </div>

    <div class="mt-4 grid grid-rows-2 gap-4 md:grid-cols-2 min-h-40">
        <div id="actions" class="py-1 px-2 bg-gray-800 order-2 md:order-1">
            <ul class ="list-none">
                <li v-for="item in commands" :key="item.id" class = "inline">
                    <UIButton :text="item.name" :type="item.type" @click="this.action(item.type)" v-if = "item.id != 'break'" />
                    <br v-if="item.id == 'break'" />
                </li>
            </ul>
        </div>

        <div id="log" class="py-2.5 px-5 bg-gray-800 order-1 md:order-2 max-h-28 overflow-y-scroll">
        </div>
    </div>
</template>

<script>
const CombatInstance = new Combat();

export default {
    data() {
        return {
            commands: {},
        }
    },
    mounted: function () {
        this.getElements();
        this.commands = CombatInstance.setup();

    },
    methods: {
        action: function (type) {
           this.log(CombatInstance.action(type)['log']);
        },
        getElements: function () {
            this.actionsElement = $('#actions');
            this.logElement = $('#log');
            this.playerElement = $('#player');
            this.enemyElement = $('#enemy');

            // this.logElement.html('');
            // this.actionsElement.html('');
            // this.playerElement.html('');
            // this.enemyElement.html('');
        },
        log: function(log) {
            log.forEach((item) => {
                this.logElement.append(item).append('<br />');
            }); 
        }
    },
}
</script>
<style scoped>

</style>
