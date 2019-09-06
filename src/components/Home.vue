<template>
    <v-layout row wrap justify-center align-top>
        <v-card md4>
            <v-card-title>
                Rolls
            </v-card-title>
            <v-card-text>
                Roll
            </v-card-text>
        </v-card>
        <v-card md4>
            <v-card-title>
                World
            </v-card-title>
            <v-card-text>
                Roll...
            </v-card-text>
        </v-card>
        <v-card md4>
            <v-card-title>
                Event
            </v-card-title>
            <v-card-text>
                Roll...
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
                Event: EventJ
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
        }
    };
</script>

<style scoped>
</style>
