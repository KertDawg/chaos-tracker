<template>
    <v-layout row wrap justify-center align-top>
        <v-card md6 class="HomeSection" max-width="600">
            <v-card-title>
                World
            </v-card-title>
            <v-card-text>
                <p>Roll: {{CurrentWorld.Roll}}</p>
                <p>Name: {{CurrentWorld.Name}}</p>
                <p>Description: {{CurrentWorld.Description}}</p>
                <v-btn @click="RollWorld()">Roll!</v-btn>
            </v-card-text>
        </v-card>
        <v-card md6 class="HomeSection" max-width="600">
            <v-card-title>
                Event
            </v-card-title>
            <v-card-text>
                <p>Roll: {{CurrentEvent.Roll}}</p>
                <p>Name: {{CurrentEvent.Name}}</p>
                <p>Description: {{CurrentEvent.Description}}</p>
                <v-btn @click="RollEvent()">Roll!</v-btn>
            </v-card-text>
        </v-card>
    </v-layout>
</template>

<script>
    import WorldJ from "../data/World.json";
    import EventJ from "../data/Event.json";

    export default {
        data() {
            return {
                WorldRoll: "",
                EventRoll: "",
                World: WorldJ,
                Event: EventJ,
                CurrentWorld: {},
                CurrentEvent: {}
            };
        },
        computed:
        {
        },
        watch: {
        },
        mounted() {
        },
        methods: {
            RollWorld: function ()
            {
                var r;
                
                
                r = this.Percentile();

                this.CurrentWorld = this.World.find(function (e) {
                    return e.Roll === r;
                });
            },

            RollEvent: function ()
            {
                var r;
                
                
                r = this.Percentile();

                this.CurrentEvent = this.Event.find(function (e) {
                    return e.Roll === r;
                });
            },

            Percentile: function ()
            {
                return Math.floor((Math.random() * 100) + 1);
            }
        }
    };
</script>

<style scoped>
    div.HomeSection
    {
        margin-left: 16px;
        margin-right: 16px;
    }
</style>
