<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>Chaos Tracker</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn text to="/">Game</v-btn>
                <v-btn text to="/rules">Rules</v-btn>
                <v-btn text to="/about">About</v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Vuetify from 'vuetify'

    export default
    {
        vuetify: new Vuetify(),
        data()
        {
            return {
            };
        },
        methods:
        {
        }
    };
</script>

<style>
</style>
