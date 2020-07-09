<template>
    <span class="countDownClass">
        {{ countDown }}
    </span>
</template>

<script>
    export default {
        data() {
            return {
                countDown : 10
            }
        },
        created() {
           this.countDownTimer()
        },
        methods: {
            countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                } else {
                    this.$emit('timeIsOut', true)
                }
            }
        }
    }
</script>

<style scoped>
.countDownClass {
    font-size: 5rem;
    color: aliceblue;
    display: block;
}
</style>