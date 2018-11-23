<style>
  .red {
    color: red;
  }
</style>

<template><div>
  <h1 class="red">How Much</h1>
   <div class="buttonBox">
      <button v-on:click="submit" class="btn btn-success physical-btn checkmark">&#10003</button>
    </div>
  </div>
</template>

<script>
module.exports = {
  methods: {
    submit () {
      this.$router.push('/verifyTransfer') 
    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>