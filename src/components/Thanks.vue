<template>
  <div class="thanks">
    <p v-html="thanks1"></p>
    <p v-html="thanks2"></p>
  </div>
</template>

<script>
export default {
  name: "Thanks",
  data () {
    return {
      thanks1: "Thanks for participation. I don't have time to write a proper backend, so instead, the result is downloaded to your local side.",
      thanks2: "Please send it to me via Wechat, or to <a href='mailto:u5871153@anu.edu.au'>U5871153@anu.edu.au</a> :)"
    }
  }
}
</script>

<style scoped>
.thanks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  font-size: 1.3rem;
}
</style>