<template>
  <div class="question-details">
    <p>Confidence</p>
    <div class="form-group selections">
      <label>
        <input type="radio" v-model="selectedOption_confidence" :value="1" :disabled="false" :name="'answer-option-confidence'">
        1
      </label>
      <label>
        <input type="radio" v-model="selectedOption_confidence" :value="2" :disabled="false" :name="'answer-option-confidence'">
        2
      </label>
      <label>
        <input type="radio" v-model="selectedOption_confidence" :value="3" :disabled="false" :name="'answer-option-confidence'">
        3
      </label>
      <label>
        <input type="radio" v-model="selectedOption_confidence" :value="4" :disabled="false" :name="'answer-option-confidence'">
        4
      </label>
      <label>
        <input type="radio" v-model="selectedOption_confidence" :value="5" :disabled="false" :name="'answer-option-confidence'">
        5
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ratings_control",
  props: {},
  data() {
    return {
      selectedOption_confidence: null,
    }
  },
  methods: {
    resetParameters() {
      this.selectedOption_confidence = null;
    }
  }
}
</script>

<style scoped>

.question-details {
  margin-top: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group textarea{
  width: 45rem;
  max-width: 100%;
}
.selections label{
  margin-right: 4rem;
}
</style>