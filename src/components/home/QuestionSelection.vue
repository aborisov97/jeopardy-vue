<template>
    <div class="component-container">
        <p>Kategorie: {{selectedQuestion}}</p>
        <ul>
            <li v-for="question of questions" :key="question" v-on:click="submitQuestionCategory(question)" class="question-list-item">{{question}}</li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../../main.js'

export default {
    data() {
        return {
            questions: ['Deutschland', 'Sport', 'Natur'],
            selectedQuestion: ''
        }
    },
    methods: {
        submitQuestionCategory(question) {
            this.selectedQuestion = question
            console.log(question);
            eventBus.$emit('questionSelection', this.selectedQuestion)

        }
    }
}
</script>

<style scoped>
p {
  font-size: 20px;
}

li {
  font-size: 18px;
}
.question-list-item:hover {
  transform: translateY(-3px);
  color: #79690f;
  cursor: pointer;
}

.component-container {
  background-color: #cff0ff;
  border-radius: 8px;
  padding: 1rem;
  min-width: 14rem;
}
</style>