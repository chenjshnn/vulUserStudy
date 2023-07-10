<template>
  <div class="question-details">
    <p>Source Github File Link:</p>
    <div class="form-group">
      <label>
        <textarea rows="3" v-model="answer" :disabled="!ableEdit" ></textarea>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportTuple",
  props: {
    ableEdit: {
      type:Boolean,
      required: true
    },
  },
  data() {
    return {
      answer: "",
    }
  },
  methods: {
    resetParameters() {
      this.answer = "";
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