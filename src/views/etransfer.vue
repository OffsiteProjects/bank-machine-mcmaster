<style>
  .red {
    color: red;
  }
</style>

<template><div>
  <h1 class="red">Select a recipient</h1>
    <div class="buttonBox">
      <button v-on:click="submit" class="btn btn-success physical-btn checkmark">&#10003</button>
    </div>
  </div>
</template>

<script>
module.exports = {
  methods: {
    submit () {
      this.$router.push('/etransferAmount') 
    }
  },
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>