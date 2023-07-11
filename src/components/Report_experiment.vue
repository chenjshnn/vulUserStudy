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
      <p v-if="showError" :style="{ color: 'red' }"> Please fill in this field. Input "Don't know" if you can't find it </p>
      <hr>
      <button @click="freezeTimer" class="next-button">Continue</button>
    </div>

    <div class="container2" v-if="showRatings">
      <p class="question-title" > Please rate your confidence and usefulness.</p>
      <p v-if="showRatingError" :style="{ color: 'red' }"> Please select an option. </p>
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
      showError: false,
      showRatingError: false,
      flag_timeout: false,
      questions: [
        {
          title: 'https://nvd.nist.gov/vuln/detail/CVE-2014-9828',
          // options: ['amd processor is better', 'intel processor is better', 'they are equal', 'hard to say']
          recommendated: 'https://github.com/ImageMagick/ImageMagick/tree/f1f2089e79bcf5714cefba7cdc47049b4ac53c6b',
          recommendatedFiles: ['https://github.com/ImageMagick/ImageMagick/blob/f1f2089e79bcf5714cefba7cdc47049b4ac53c6b/ChangeLog'],
        },
        {
          title: 'https://nvd.nist.gov/vuln/detail/CVE-2017-13024',
          recommendated: "https://github.com/the-tcpdump-group/tcpdump/tree/17f0687292c52893d16f55660f6b11b81ada153f",
          recommendatedFiles: ['https://github.com/the-tcpdump-group/tcpdump/blob/17f0687292c52893d16f55660f6b11b81ada153f/print-mobility.c'],
        },
        
        {
          title: 'https://nvd.nist.gov/vuln/detail/CVE-2006-6333',
          recommendated: "https://github.com/torvalds/linux/tree/c7f570a5eca59575572ee231390df727df207bda",
          recommendatedFiles: ['https://github.com/torvalds/linux/blob/c7f570a5eca59575572ee231390df727df207bda/drivers/net/tokenring/ibmtr.c'],
        },

        
        {
          title: 'https://nvd.nist.gov/vuln/detail/CVE-2015-4050',
          recommendated: "https://github.com/symfony/symfony/tree/def7ceb01acf32e872da4d74ddada2838ae7bf40",
          recommendatedFiles: ['https://github.com/symfony/symfony/blob/def7ceb01acf32e872da4d74ddada2838ae7bf40/src/Symfony/Component/HttpKernel/EventListener/ProfilerListener.php'],
        },
        
        {
          title: 'https://nvd.nist.gov/vuln/detail/CVE-2017-12867',
          recommendated: "https://github.com/simplesamlphp/simplesamlphp/tree/2deaa334191a74152b0be83938da7efccbdc4d79",
          recommendatedFiles: ['https://github.com/simplesamlphp/simplesamlphp/blob/2deaa334191a74152b0be83938da7efccbdc4d79/lib/SimpleSAML/Auth/TimeLimitedToken.php'],
        },
        
        {
          title: 'https://nvd.nist.gov/vuln/detail/CVE-2005-3356',
          recommendated: "https://github.com/torvalds/linux/tree/82c9df820112c6286a8e8fbe482e94b65b49062c",
          recommendatedFiles: ['https://github.com/torvalds/linux/blob/82c9df820112c6286a8e8fbe482e94b65b49062c/ipc/mqueue.c'],
        },
        
        {
          title: 'https://nvd.nist.gov/vuln/detail/CVE-2021-22880 ',
          recommendated: "https://github.com/rails/rails/tree/bddb2c9b193c976dbe6a9a1358479d1792931986",
          recommendatedFiles: 'https://github.com/rails/rails/blob/bddb2c9b193c976dbe6a9a1358479d1792931986/activerecord/test/cases/adapters/postgresql/serial_test.rb',
        },
        
        {
          title: 'https://nvd.nist.gov/vuln/detail/CVE-2017-10379 ',
          recommendated: "https://github.com/mysql/mysql-server/tree/197d0fbb2912a94bac39cffa2c4252d1bd14a469",
          recommendatedFiles: ['https://github.com/mysql/mysql-server/blob/197d0fbb2912a94bac39cffa2c4252d1bd14a469/client/mysql.cc'],
        },
        {
          title: 'https://nvd.nist.gov/vuln/detail/CVE-2021-21841',
          recommendated: "https://github.com/gpac/gpac/tree/70607fc71a671cf48a05e013a4e411429373dce7",
          recommendatedFiles: ['https://github.com/gpac/gpac/blob/70607fc71a671cf48a05e013a4e411429373dce7/src/isomedia/box_code_base.c'],
        },
        // {
        //   title: 'https://nvd.nist.gov/vuln/detail/',
        //   recommendated: "",
        //   recommendatedFiles: [''],
        // },
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
          this.flag_timeout = true
        }
      }, 1000)
    },
    // addQuestion() {
    //   // Code to add a new question
    //   this.tupleIndex += 1;
    //   this.createAnswer(this.tupleIndex);
    // },

    resetParameters() {
      this.minutes = 5;
      this.seconds = 0;
      this.tupleIndex = 1;
      this.ableEdit = true;
      this.answers = {};
      this.$refs['reportTuples'].resetParameters();
      this.$refs['ratings'].resetParameters();
      this.ableEdit = true;
      this.showRatings = false;
      this.flag_timeout = false;
      
      this.startTimer();
      // this.createAnswer(this.tupleIndex);
    },
    
    freezeTimer(){

      this.answers['answer'] = this.$refs['reportTuples'].answer

      this.formErrors = [];
      if (this.answers['answer'].trim().length === 0  && !this.flag_timeout){
        this.showError = true;
        return;
      }
      this.showError = false;
      clearInterval(this.timer);
      this.ableEdit = false;
      this.showRatings = true;
      console.log(this.$refs)
      console.log(this.$refs['reportTuples'].answer)
      console.log('Answers:' + this.answers)
      this.finalStoredData['answers_'+(this.questionIndex+1)] = {'github_link':this.answers['answer'], 'min':9-this.minutes,
        'sec':60-this.seconds}
    },
    
    nextQuestion(){
      console.log(this.$refs)
      this.answers['confidence'] = this.$refs['ratings'].selectedOption_confidence
      this.answers['usefulness'] = this.$refs['ratings'].selectedOption_usefulness

      if (!this.answers['confidence'] || !this.answers['usefulness']){
        this.showRatingError = true;
        return;
      }
      this.showRatingError = false;
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
p, li {
  word-wrap: break-word;
}
</style>