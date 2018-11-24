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
    <h1 class="red">{{msg}}</h1>

    <div class="row">
      <div class="col-sm-12">
        <h2>Withdraw {{"$" +(this.$route.params.amount/100).toFixed(2)}} from {{this.$route.params.account}}?</h2>
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
      this.$router.push({name: 'success', params: { Message: 'You have successfully withdrawn $' + (this.$route.params.amount/100).toFixed(2)+ ' from account: '+ this.$route.params.account + '!'}}) 
    },
    cancel () {
      this.$router.push('/main-menu') 
    }
  },
  data () {
    return {
      msg: 'Are you sure?'
    }
  }
}
</script>