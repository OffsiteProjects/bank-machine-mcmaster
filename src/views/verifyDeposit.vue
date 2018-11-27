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
        <h2 class="sub-title">Deposit $20.00 into {{this.$route.params.account.slice(0,this.$route.params.account.lastIndexOf("-")-1)}}?</h2>
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
      this.$router.push({name: 'success', params: { balance: this.$route.params.account.slice(0,this.$route.params.account.lastIndexOf("-")-1) + ' has a balance of $' + String((Number(this.$route.params.account.slice(this.$route.params.account.lastIndexOf("-")+3).replace(',',''))+20).toFixed(2)), Message: 'You have successfully deposited $20.00 into account: '+ this.$route.params.account.slice(0,this.$route.params.account.lastIndexOf("-")-1) + '!'}}) 
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