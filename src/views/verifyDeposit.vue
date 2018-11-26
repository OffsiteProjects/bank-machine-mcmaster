<style>
  .red {
    color: red;
  }
  h1, h2{
    text-align: center;
  }
</style>

<template>
  <div>
    <h1 class="big-title">{{msg}}</h1>
    <div class="row">
      <div class="col-sm-12">
        <h2 class="sub-title">Deposit $20.00 into {{this.$route.params.account}}?</h2>
      </div>
      <div class="buttonBox">
        <button v-on:click="submit" class="btn btn-success physical-btn checkmark">&#10003</button>
      </div>

      <div class="buttonBox">
        <button v-on:click="cancel" class="btn btn-danger physical-btn checkmark">X</button>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  methods: {
    submit () {
      this.$router.push({name: 'success', params: { Message: 'You have successfully deposited $20.00 into account: '+ this.$route.params.account + '!'}}) 
    },
    cancel () {
      this.$router.push('/retrieveCash') 
    }
  },
  data () {
    return {
      msg: 'Are you sure?'
    }
  }
}
</script>