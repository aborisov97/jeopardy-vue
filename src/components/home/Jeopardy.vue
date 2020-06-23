<template>
<div>
    <table class="table">
        <tr v-for="(row, id) of rows" :key="id">
            <template v-for="(question, index) of questions">
                <td v-if="index <= row && index >= row - 3"  :key="index">
                    <QuestionCell :question="question" @clicked="showQuestionWindow($event)"></QuestionCell>
                </td>
            </template>
        </tr>
    </table>


    <div class="centeredField">
            <p class="currentRoundName">{{ round === 1 ? 'Jeopardy!' : round === 2 ? 'Double Jeopardy!' : 'Final Jeopardy!' }}</p>
            <p class="currentPlayerParagraph">Aktueller Spieler: <span v-if="currentPlayer" style="color: saddlebrown;">{{ currentPlayer }}</span></p>
        <div>
            <template v-for="(player, idx) of players">
                <p class="playerListItem" :key="idx">{{player.playerNumber}}: {{player.score}}</p>
            </template>

            <span>
                <h1>Der Gewinner ist Spieler {{winner}}!</h1>
                <button class="btn btn-danger">PLAY AGAIN</button>
                <p class="text-danger">END OF ROUND</p>
                <button class="btn btn-info">NEXT ROUND</button>
            </span>
        </div>
    </div>

</div>
</template>

<script>
import QuestionCell from './QuestionCell.vue'

export default {
    name: 'jeopardy',
    props: {
        'playerCount': String
    },
    data() {
        return {
          rows: [3, 7, 11, 15],
          round: 1,
          currentPlayer: undefined,
          winner: undefined
        }
    },
    computed: {
        players: function () {
            const result = [];
            for (let i = 0 ; i < Number(this.playerCount) ; i++) {
                result.push({playerNumber: `Spieler ${i + 1}`, score: 0, myTurn: i === 0 ? true : false, winner: false})
            }
            return result
        },
        questions: function () {
            return [
{question: "Wie heißt die Hauptstadt von Deutschland",answer: "München",value: 100},
{question: "In welchem Teil Europas befindet sich Deutschland_",answer: "Central Europa",value: 100},
{question: "Wie viel mal hat DE die Fußballweltmeisterschaft gewonnen?",answer: "3",value: 100},
{question: "Wie viel mal hat DE die Fußballweltmeisterschaft gewonnen?",answer: "3",value: 100},
{question: "Wie viel mal hat DE die Fußballweltmeisterschaft gewonnen?",answer: "3",value: 200},
{question: "Wie viel mal hat DE die Fußballweltmeisterschaft gewonnen?",answer: "3",value: 200},
{question: "Wie viel mal hat DE die Fußballweltmeisterschaft gewonnen?",answer: "3",value: 200},
{question: "Wie viele Einwohner hat Deutschland?",answer: "82 Mio",value: 200},
{question: "Wie viele Einwohner hat Deutschland?",answer: "82 Mio",value: 300},
{question: "Wie viele Einwohner hat Deutschland?",answer: "82 Mio",value: 300},
{question: "Wie viele Einwohner hat Deutschland?",answer: "82 Mio",value: 300},
{question: "123131", answer: "sandaime",value: 300},
{question: "Welche ist die größte Insel Deutschlands?",answer: "Rügen",value: 400},
{question: "Welche ist die größte Insel Deutschlands?",answer: "Rügen",value: 400},
{question: "Welche ist die größte Insel Deutschlands?",answer: "Rügen",value: 400},
{question: "Welche ist die größte Insel Deutschlands?",answer: "Rügen",value: 400}]
        }
    },
    components: {
        QuestionCell
    },
    methods: {
        showQuestionWindow(event) {
            console.log('showQuestionWindow -> ', event);
        }
    }
}
</script>


<style scoped>
table td, table th {
  padding: 1.75rem !important;
  border-left: 2px solid black !important;
  border-right: 2px solid black !important;
  border-top: 1px solid #5562c7 !important;
}

table {
  max-width: 40rem;
  background-color: #5562c7;
  height: 30rem;
  float: right;
  margin-right: -4rem;
}

tr {
  border: 1px solid #5562c7;
}

.currentRoundName {
  font-family: cursive;
  color: coral;
  font-size: 30px;
}

.centeredField {
  text-align: center;
}

.currentPlayerParagraph {
  font-size: 18px;
}

.playerListItem {
  font-size: 18px;
}

.playerListItem:hover {
  transform: translateY(-3px);
  color: #79690f;
  cursor: pointer;
}
</style>