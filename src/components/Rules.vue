<template>
    <v-layout row wrap justify-center align-top>
        <v-card max-width="800">
            <v-card-title>
                Rules for Chaos Magic
            </v-card-title>
            <v-card-text>
                <p>
                    Decide on one of the colored dice to be the "tens" and the other one to be the "ones." When rolled, you will now be able to get a number between 1 and 100. We will call this D% from now on.
                </p>
                <p>
                    Decide who goes first. That player rolls D% and checks the number to the corresponding World on the World Chart. Whatever World is rolled, that World stays in effect for the rest of the game. This World affects both players and cannot be destroyed, unless an Event is rolled that changes the World.
                </p>
                <p>
                    Play magic like you normally would, with one exception. At the beginning of each player's upkeep, that player rolls D%. Check this number with the corresponding Event on the Event Chart. That player then immediately resolves that Event by picking the target(s), if applicable. If there is no possible legal target, or the Event can't resolve for some reason, that Event is ignored.
                </p>
                <p>
                    If the Event, "Change the World, reroll on World Chart" is rolled, reroll and check the result on the World Chart. Replace the original World with the newly rolled World.  
                </p>
            </v-card-text>
        </v-card>
    </v-layout>
</template>

<script>
    export default
        {
            data()
            {
                return {
                };
            },
            computed:
            {
            },
            watch: {
            },
            mounted()
            {
            },
            methods: {
            }
        };
</script>

<style scoped>
</style>
