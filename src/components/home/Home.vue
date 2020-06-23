<template>
    <div>

        <div class="p-grid" style="padding: 2rem;">
        <div class="p-col-4" style="text-align: center;">
            <div style="text-align: left; margin-bottom: 1rem;"><PlayerSelection></PlayerSelection></div>
            <div style="text-align: left; margin-bottom: 1rem;"><QuestionSelection></QuestionSelection></div>
            <div style="text-align: left;">
            <button class="btn btn-primary"
             v-bind:class="{ disabled: !(validPlayerNumber && validQuestionCategory) }"
             v-on:click="startGame">SPIEL STARTEN</button>
            <p v-if="!(validPlayerNumber && validQuestionCategory)" class="text-danger">Geben Sie bitte alle Felden an!</p>
            </div>
        </div>
        <div class="p-col-8" style="text-align: right;">
            <Jeopardy v-if="startedGame" :playerCount="playerCount"></Jeopardy>
        </div>
        </div>

    </div>
</template>

<script>
import Jeopardy from './Jeopardy.vue'
import QuestionSelection from './QuestionSelection.vue'
import PlayerSelection from './PlayerSelection.vue'
import { eventBus } from '../../main.js'

export default {
    name: 'Home',
    components: {Jeopardy, QuestionSelection, PlayerSelection},
    data() {
        return {
            validPlayerNumber: false,
            validQuestionCategory: false,
            startedGame: false,
            playerCount: Number
        }
    },
    created() {
        eventBus.$on('playerSelection', data => {
            this.validPlayerNumber = true
            this.playerCount = data;
            console.log('arrived => ', data)
        })
        eventBus.$on('questionSelection', data => {
            this.validQuestionCategory = true
            console.log('arrived => ', data)
        })
    },
    methods: {
        startGame() {
            this.startedGame = true;
        }
    }
}
</script>>