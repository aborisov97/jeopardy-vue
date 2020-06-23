<template>
    <div>
        {{ eventsArray | json}}
        JEOPARDY
        <div><QuestionCell @questionEvent="addOne" :question="'Who am i?'"></QuestionCell></div>
        <div><QuestionCell @questionEvent="addOne" :question="'Who are u?'"></QuestionCell></div>
        <div><QuestionCell @questionEvent="addOne" :question="'Who are we?'"></QuestionCell></div>
        <div><QuestionCell @questionEvent="addOne" :question="'Who are they?'"></QuestionCell></div>
    </div>
</template>

<script>
import QuestionCell from './QuestionCell.vue'


export default {
    name: 'jeopardy',
    components: {
        QuestionCell
    },
    filters: {
        json: value => { return JSON.stringify(value) }

    },
    data() {
        return {
            eventsArray: []
        }
    },
    methods: {
        addOne(data) {
            this.eventsArray.push(data)
        }
    }
}
</script>