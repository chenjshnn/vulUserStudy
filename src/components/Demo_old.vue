<template>
  <div class="container1">
    <div class="question-header">
      <h2>{{ `Question ${questionIndex + 1}:` }}</h2>
      <div class="timer">{{ `Time: ${minutes}:${seconds}` }}</div>
    </div>
    <div class="container2">
      <p class="question-title"> Please find the source github file for this CVE link: <a :href="question.title" target="_blank">{{question.title}}</a> </p>
      <p class="question-title"> Related Repository: <a :href="question.recommendated" target="_blank">{{question.recommendated}}</a></p>
      <p class="question-title"> Related Files: </p>
      <ul>
        <li v-for="item in question.recommendatedFiles" :key="item.id"> <a :href="item" target="_blank">{{item}}</a> </li>
      </ul>
      
      <ReportTuple :able-edit="ableEdit" :key="'answer'" :name="'answer'" :ref="'reportTuples'"/>
      <hr>
      <button @click="freezeTimer" class="next-button">Continue</button>
    </div>

    <div class="container2" v-if="showRatings">
      <p class="question-title" > Please rate your confidence and usefulness.</p>
      <Ratings :key="'ratings'" :ref="'ratings'"/>
      <hr>
      <!-- <button @click="addQuestion" :disabled="!ableEdit">+</button> -->
    </div>

    <div class="container3">
      <button @click="nextQuestion" class="next-button">Next</button>
    </div>
  </div>
</template>

<script>
import ReportTuple from './ReportTuple.vue'
import Ratings from './Ratings.vue'
import { saveAs } from 'file-saver';

export default {
  name: "Demo",
  components: {
    ReportTuple,
    Ratings,
  },
  data() {
    return {
      questionIndex: 0,
      minutes: 10,
      seconds: 0,
      ableEdit: true,
      answers: {},
      finalStoredData:{},
      showRatings: false,
      timer: null,
      questions: [
        {
          title: 'https://nvd.nist.gov/vuln/detail/CVE-2018-6188 ',
          // options: ['amd processor is better', 'intel processor is better', 'they are equal', 'hard to say']
          recommendated: 'https://github.com/chenjshnn',
          recommendatedFiles: ['1','2'],
        },
        {
          title: 'https://nvd.nist.gov/vuln/detail/CVE-2012-1208',
          recommendated: "https://github.com/chenjshnn",
          recommendatedFiles: ['1','2'],
        },
      ],
    }
  },
  created() {},
  computed: {
    question() {
      return this.questions[this.questionIndex]
    },
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--
        } else if (this.minutes > 0) {
          this.minutes--
          this.seconds = 59
        } else {
          // Time is up
          this.ableEdit = false
        }
      }, 1000)
    },
    // addQuestion() {
    //   // Code to add a new question
    //   this.tupleIndex += 1;
    //   this.createAnswer(this.tupleIndex);
    // },

    resetParameters() {
      this.minutes = 10;
      this.seconds = 0;
      this.tupleIndex = 1;
      this.ableEdit = true;
      this.answers = {};
      this.$refs['reportTuples'].resetParameters();
      this.$refs['ratings'].resetParameters();
      this.ableEdit = true;
      this.showRatings = false;
      
      this.startTimer();
      // this.createAnswer(this.tupleIndex);
    },
    
    freezeTimer(){
      clearInterval(this.timer);
      this.ableEdit = false;
      this.showRatings = true;
      console.log(this.$refs)
      console.log(this.$refs['reportTuples'].answer)
      this.answers['answer'] = this.$refs['reportTuples'].answer
      console.log('Answers:' + this.answers)
      this.finalStoredData['answers_'+(this.questionIndex+1)] = {'github_link':this.answers['answer'], 'min':9-this.minutes,
        'sec':60-this.seconds}
    },
    
    nextQuestion(){
      console.log(this.$refs)
      this.answers['confidence'] = this.$refs['ratings'].selectedOption_confidence
      this.answers['usefulness'] = this.$refs['ratings'].selectedOption_usefulness
      console.log(this.answers)
      this.finalStoredData['answers_'+(this.questionIndex+1)]['confidence'] = this.answers['confidence']
      this.finalStoredData['answers_'+(this.questionIndex+1)]['usefulness'] = this.answers['usefulness']


      if (this.questionIndex < this.questions.length -1) {
        this.questionIndex += 1;
        this.resetParameters()
      } else {
        this.saveAsJSON();
        this.$router.push('/thanks');
      }
      
    },
    saveAsJSON() {
      const data = JSON.stringify(this.finalStoredData, null, 2);
      const filename = this.$route.params.name + '.json';
      const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, filename);
    }

  },
  mounted() {
    this.startTimer();
  }
}
</script>

<style scoped>
.container1 {
  width: 66.67%;
  margin: auto;
}
.container2 {
  width: 90%;
  margin: auto;
  text-align: left;
  font-size: 1.2rem;
}
.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question-title {
  margin-bottom: 1.5rem;
}
.timer {
  font-size: 1.2rem;
}
.container3 {
  display: flex;
  width: 100%;
  margin-top: 1.5rem;
}
.next-button {
  margin-left: auto;
}
</style>