<template>
    <div class="question-window">
        <div class="question">
            {{ selectedQuestion.question }}
        </div>

        <div class="answer">
            <input type="text" class="form-control" v-model="answer">
        </div>
        <button v-if="windowIsActive" class="btn btn-info" @click="submitAnswer()">Einreichen</button>

        <Countdown v-if="windowIsActive" @timeIsOut="windowIsActive = false"></Countdown>

        <hr>
        <div v-if="!windowIsActive" class="right-answer">
            Richtige Antwort:
            {{ selectedQuestion.answer }}
            <button class="btn btn-info" @click="back()">Zurück</button>
        </div>
    </div>
</template>

<script>
import Countdown from './Countdown.vue'

export default {
    components: {
        Countdown
    },
    props: {
        'selectedQuestion': Object
    },
    data() {
        return {
            windowIsActive: true,
            answer: ''
        }
    },
    methods: {
        submitAnswer() {
          if (this.answer === this.selectedQuestion.answer) {
            this.$emit('questionAnswered', this.selectedQuestion.value)
          } else {
            this.windowIsActive = false
          }
        },
        back() {
            this.$emit('questionAnswered', 0)
        }
    }
}
</script>

<style scoped>
.question-window {
  background-color: cadetblue;
  width: 33rem;
  height: 30rem;
  font-size: large;
  float: right;
  margin-right: 5rem;
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
  display: inherit;
    margin-left: 13rem;
    margin-top: 3rem;
}

.question {
  padding-top: 2rem;
  font-size: 2rem;
}

.right-answer {
  font-size: 2rem;
  color: snow;
}
</style>