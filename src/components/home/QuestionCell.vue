<template>
    <div>
        CELL = {{toEmit}}
        <input type="text" v-model="toEmit">
        <button v-on:click="emitData">Emit</button>
        {{question}}
    </div>
</template>

<script>
export default {
    props: {
        question: String
    },
    data() {
        return {
            toEmit: ''
        }
    },
    methods: {
        emitData() {
            this.$emit('questionEvent', this.toEmit)
        }
    }
}
</script>