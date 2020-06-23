<template>
    <div class="component-container">
        <label for="playerNumber">Teilnehemernummer:</label>
        <input type="number" class="form-control" v-model="players" style="margin-bottom: 0.5rem;">
        <span v-if="showError"><p class="text-danger">Inkorektes Nummer</p></span>
        <button class="btn btn-primary" v-on:click="submitPlayers" style="float: right;">Einreichen</button>
        <div style="clear: both;"></div>
    </div>
</template>

<script>
import { eventBus } from '../../main.js'

export default {
    data() {
        return {
            players: undefined,
            showError: false
        }
    },
    methods: {
        submitPlayers() {
            if (!this.players || this.players < 1) {
                this.showError = true
            } else {
                this.showError = false
                console.log(this.players);
                eventBus.$emit('playerSelection', this.players)
            }
        }
    }
}
</script>

<style scoped>
label {
  font-size: 20px;
}

.component-container {
  background-color: #cff0ff;
  border-radius: 8px;
  padding: 1rem;
  min-width: 14rem;
}
</style>