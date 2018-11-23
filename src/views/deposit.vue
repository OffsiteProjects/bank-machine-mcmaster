<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <h1 class="red">To Where</h1>
    <button class="physical-btn accountBox">TD Bank Account - 170192 - $88.31</button>
    <button class="physical-btn accountBox">RBC Account - 445683 - $15,324.43</button>
    <button class="physical-btn accountBox">Uncle Joe - 987321 - $34,222.21</button>
    <button v-on:click="submit" class="btn submit-btn btn-success physical-btn checkmark">&#10003</button>
  </div>
</template>

<script>
module.exports = {
  methods: {
    submit () {
      this.$router.push('/insertCash') 
    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>