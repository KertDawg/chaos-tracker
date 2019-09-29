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
                <v-btn @click="ShowWorldSet = true">Set...</v-btn>
            </v-card-text>
            <v-overlay absolute :value="WorldOverlay">
                Rollin' dem dice...
            </v-overlay>
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
                <v-btn @click="ShowEventSet = true">Set...</v-btn>
            </v-card-text>
            <v-overlay absolute :value="EventOverlay">
                Rollin' dem dice...
            </v-overlay>
        </v-card>
        <v-dialog v-model="ShowWorldSet" persistent max-width="400">
            <v-card>
                <v-card-text>
                    <v-form class="PaddingTop">
                        <v-text-field v-model="SetWorldValue" outlined hint="Set the World roll..." label="World Roll" :rules="[rules.required, rules.percentile]"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="SetWorld()">Set</v-btn>
                    <v-btn @click="ShowWorldSet = false;">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="ShowEventSet" persistent max-width="400">
            <v-card>
                <v-card-text>
                    <v-form class="PaddingTop">
                        <v-text-field v-model="SetEventValue" outlined hint="Set the Event roll..." label="Event Roll" :rules="[rules.required, rules.percentile]"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="SetEvent()">Set</v-btn>
                    <v-btn @click="ShowEventSet = false;">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
                CurrentEvent: {},
                ShowWorldSet: false,
                ShowEventSet: false,
                SetWorldValue: 0,
                SetEventValue: 0,
                rules: {
                    required: value => !!value || "This is required.",
                    percentile: value => ((parseInt(value) < 101) && (parseInt(value) > 0) && (parseFloat(value) % 1 == 0)) ? true : "This must be an integer between 1 and 100."
                },
                WorldOverlay: false,
                EventOverlay: false
            };
        },
        computed:
        {
        },
        watch: {
        },
        mounted()
        {
            this.LoadRolls();
        },
        created: function ()
        {
        },
        methods: {
            SaveRolls: function ()
            {
                window.localStorage.setItem("Rolls", JSON.stringify({ WorldRoll: this.CurrentWorld.Roll, EventRoll: this.CurrentEvent.Roll }));
            },

            LoadRolls: function ()
            {
                var r;


                if (window.localStorage.getItem("Rolls"))
                {
                    r = JSON.parse(window.localStorage.getItem("Rolls"));

                    if (r.WorldRoll !== "")
                    {
                        this.WorldRoll = r.WorldRoll;
                        this.SetWorldValue = r.WorldRoll;
                        this.CurrentWorld = this.World.find(function (e)
                        {
                            return parseInt(e.Roll) === parseInt(r.WorldRoll);
                        });

                        this.EventRoll = r.EventRoll;
                        this.SetEventValue = r.EventRoll;
                        this.CurrentEvent = this.Event.find(function (e)
                        {
                            return parseInt(e.Roll) === parseInt(r.EventRoll);
                        });
                    }
                    else
                    {
                        this.WorldRoll = "";
                        this.EventRoll = "";
                    }
                }
            },

            RollWorld: function ()
            {
                var r;
                var self;


                this.WorldOverlay = true;
                self = this;
                setTimeout(function ()
                {
                    r = self.Percentile();

                    self.SetWorldValue = r;
                    self.CurrentWorld = self.World.find(function (e)
                    {
                        return parseInt(e.Roll) === r;
                    });

                self.SaveRolls();
                    self.WorldOverlay = false;
                }, 1000);
            },

            SetWorld: function ()
            {
                var target;


                target = this.SetWorldValue;

                this.CurrentWorld = this.World.find(function (e) {
                    return parseInt(e.Roll) === parseInt(target);
                });

                this.ShowWorldSet = false;
                this.SaveRolls();
            },

            RollEvent: function ()
            {
                var r;
                var self;


                this.EventOverlay = true;
                self = this;
                setTimeout(function ()
                {
                    r = self.Percentile();

                    self.SetEventValue = r;
                    self.CurrentEvent = self.Event.find(function (e)
                    {
                        return parseInt(e.Roll) === parseInt(r);
                    });

                    self.SaveRolls();
                    self.EventOverlay = false;
                }, 1000);
            },

            SetEvent: function ()
            {
                var target;


                target = this.SetEventValue;

                this.CurrentEvent = this.Event.find(function (e) {
                    return parseInt(e.Roll) === parseInt(target);
                });

                this.ShowEventSet = false;
                this.SaveRolls();
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

    form.PaddingTop
    {
        padding-top: 16px;
    }
</style>
