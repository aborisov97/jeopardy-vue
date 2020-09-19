<template>
         
<div class="final-question-window">
  <div class="question">
    {{ finalQuestion.question ? finalQuestion.question : '' }}
  </div>

  <div class="answer">
    <input id="finalInput" type="password" class="form-control" v-model="currentPlayerAnswer">
    <div class="wager">Spieler {{playerCount}}</div>
    <div class="wager">Wette: {{wagerAmount}}</div>
    <input type="range" max="1000" v-model="wagerAmount">
  </div>
  <button id="finalSubmit" class="btn btn-info stayAway" @click="submitPlayerAnswer()">Einreichen</button>
  <button id="finale" v-bind:class="playersLength > 0 ? 'disabled' : ''" class="btn btn-info" @click="back()">Finale</button>
</div>

</template>

<script>
export default {
    props: {
        'finalQuestion': Object,
        'players': []
    },
    data() {
        return {
            wagerAmount: 200,
            playerCount: 1,
            currentPlayerAnswer: '',
            answers: [],
            playersLength: undefined,
            oneTimer: true,
        }
    },
    methods: {
        submitPlayerAnswer() {
            if (this.oneTimer) {
                this.playersLength = this.players.length;
                console.log(this.playersLength);
                // setup forever to false
                this.oneTimer = false;
            }
            if (this.playersLength > 0) {
                if (this.players[this.playerCount - 1].score < this.wagerAmount) {
                    alert('Wager must not be over the score');
                } else {
                    this.answers.push(
                    {
                        correct: this.currentPlayerAnswer === this.finalQuestion.answer,
                        playerNumber: this.playerCount++,
                        wager: this.wagerAmount
                    });
                    this.playersLength--;
                    console.log('FINAL QUESTION COMPONETN hey im here -> ', this.playersLength);
                    this.currentPlayerAnswer = '';
                    this.wagerAmount = 0;
                    // eslint-disable-next-line no-self-assign
                    this.playerCount > 3 ? this.playerCount = 3 : this.playerCount = this.playerCount;
                }
            }
            console.log(this.answers);
        },
        back() {
            this.$emit('finalQuestionAnswered', this.answers)
        }
    }
}
</script>

<style scoped>
.final-question-window {
  background-color: #48ad80;
  width: 33rem;
  height: 30rem;
  font-size: large;
  float: right;
  margin-right: 8rem;
  text-align: center;
}

.form-control {
    margin-top: 2rem;
    width: 90%;
    display: initial;
    font-size: 2rem;
}

.btn {
  font-size: 1.5rem;
  margin-top: 1rem;
}

.question {
  padding-top: 2rem;
  font-size: 2rem;
}

.stayAway {
  margin-right: 2.2rem;
}

.wager {
  font-size: 1.5rem;
  color: aliceblue;
}

</style>