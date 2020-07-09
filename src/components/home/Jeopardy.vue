<template>
<div>
    <table class="table" v-if="!isSelectedQuestion && round !== 3">
        <tr v-for="(row, id) of rows" :key="id">
            <template v-for="(question, index) of questions">
                <td v-if="index <= row && index >= row - 3"  :key="index">
                    <QuestionCell :question="question" @clickedCell="showQuestionWindow($event)"></QuestionCell>
                </td>
            </template>
        </tr>
    </table>

    <QuestionWindow v-if="isSelectedQuestion" :selectedQuestion="selectedQuestion" @questionAnswered="calculatePoints($event)"></QuestionWindow>


    <div class="centeredField">
            <p class="currentRoundName">{{ round === 1 ? 'Jeopardy!' : round === 2 ? 'Double Jeopardy!' : 'Final Jeopardy!' }}</p>
            <p class="currentPlayerParagraph">Aktueller Spieler: <span v-if="currentPlayer" style="color: saddlebrown;">{{ currentPlayer }}</span></p>
        <div>
            <template v-for="(player, idx) of players">
                <p class="playerListItem" :key="idx">{{player.playerNumber}}: {{player.score}}</p>
            </template>

            <span v-if="endRound">
                <h1 v-if="endGame" >Der Gewinner ist Spieler {{winner}}!</h1>
                <button v-if="endGame" class="btn btn-danger" @click="refresh()">PLAY AGAIN</button>
                <p v-if="round !== 3" class="text-danger">END OF ROUND</p>
                <button v-if="round !== 3" class="btn btn-info" @click="nextRound()">NEXT ROUND</button>
            </span>
        </div>
    </div>

</div>
</template>

<script>
import QuestionCell from './QuestionCell.vue'
import QuestionWindow from './QuestionWindow.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.initializeApp(
    {
         apiKey: 'AIzaSyD0bbDR0F8YoafRuZkGgbVYF1xlhi29N8o',
    authDomain: 'diplom-ar.firebaseapp.com',
    databaseURL: 'https://diplom-ar.firebaseio.com',
    projectId: 'diplom-ar',
    storageBucket: 'diplom-ar.appspot.com',
    messagingSenderId: '320932284587'
    }).firestore()

const questionsDB = db.collection('questions');

export default {
    name: 'jeopardy',
    props: {
        'playerCount': String,
        'selectedQuestionCategory': String
    },
    watch: {
        selectedQuestionCategory: {
            immediate: true,
            handler(selectedQuestionCategory) {
                this.$bind('questions', questionsDB.where('category', '==', selectedQuestionCategory).where('round', '==', 'Jeopardy!'))
            },
        },
        round: {
            handler(round) {
                this.$bind('questions', questionsDB.where('category', '==', this.selectedQuestionCategory).where('round', '==', round))
            }
        }
    },
    data() {
        return {
          rows: [3, 7, 11, 15],
          round: 1,
          endRound: false,
          endGame: false,
          currentPlayer: undefined,
          winner: undefined,
          selectedQuestion: {},
          isSelectedQuestion: false,
          questions: []
        }
    },
    created() {
        console.log(this.questions);
        console.log(this.selectedQuestionCategory);
    },
    computed: {
        players: function () {
            const result = [];
            for (let i = 0 ; i < Number(this.playerCount) ; i++) {
                result.push({playerNumber: `Spieler ${i + 1}`, score: 0, myTurn: i === 0 ? true : false, winner: false})
            }
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.currentPlayer = result[0].playerNumber
            return result
        },
    },
    components: {
        QuestionCell,
        QuestionWindow
    },
    methods: {
        showQuestionWindow(question) {
            this.selectedQuestion = question;
            this.isSelectedQuestion = true;
        },
        calculatePoints(event) {
            for (let i = 0 ; i < this.players.length ; i++) {
              if (this.players[i].myTurn) {
                this.players[i].score += event;
                this.players[i].myTurn = false;
                 if (i === this.players.length - 1) {
                  this.players[0].myTurn = true;
                  this.currentPlayer = this.players[0].playerNumber;
                 } else {
                  this.players[i + 1].myTurn = true;
                  this.currentPlayer = this.players[i + 1].playerNumber;
                 }
                this.selectedQuestion.answer = 'answered';
                break;
              }
            }
            this.isSelectedQuestion = false;
            this.checkForRoundEnd();
        },
        checkForRoundEnd() {
          this.endRound = true;
          this.questions.forEach(question => {
            if (question.answer !== 'answered') {
                this.endRound = false;
            }
          });
        },
        nextRound() {
            if (this.round !== 3) {
             this.round++;
            }
            if (this.round === 2) {
             this.loadRoundTwoQuestions();
            } else {
             this.loadFinalJeopardy();
            }
            this.endRound = false;
        },
        loadRoundTwoQuestions() {
            this.round = 'Double Jeopardy!'
        },
        loadFinalJeopardy() {
            console.log('round 3');
        },
        refresh() {
            window.location.reload();
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