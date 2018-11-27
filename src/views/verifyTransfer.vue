<style>

</style>

<template>
<div>
  <h1 class="big-title">{{msg}}</h1>
   <div class="row">
      <div class="col-sm-12">

        <h2 class="sub-title">Transfer {{"$" +(this.$route.params.amount/100).toFixed(2)}} from {{this.$route.params.fromAccount.slice(0,this.$route.params.fromAccount.lastIndexOf("-")-1)}} to {{this.$route.params.toAccount.slice(0,this.$route.params.toAccount.lastIndexOf("-")-1)}}?</h2>

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
      this.$router.push({name: 'success', params: {balance: this.$route.params.fromAccount.slice(0,this.$route.params.fromAccount.lastIndexOf("-")-1) + ' has a balance of $' + String((Number(this.$route.params.fromAccount.slice(this.$route.params.fromAccount.lastIndexOf("-")+3).replace(',',''))-Number((this.$route.params.amount/100).toFixed(2))).toFixed(2)) + '. '+this.$route.params.toAccount.slice(0,this.$route.params.toAccount.lastIndexOf("-")-1) + ' has a balance of $' + String((Number(this.$route.params.toAccount.slice(this.$route.params.toAccount.lastIndexOf("-")+3).replace(',',''))+Number((this.$route.params.amount/100).toFixed(2))).toFixed(2)) , Message: 'You have successfully transferred $' + (this.$route.params.amount/100).toFixed(2)+ ' from account: '+ this.$route.params.fromAccount.slice(0,this.$route.params.fromAccount.lastIndexOf("-")-1) + ' to account: '+ this.$route.params.toAccount.slice(0,this.$route.params.toAccount.lastIndexOf("-")-1) + '!'}}) 
    },
    cancel () {
      this.$router.push('/main-menu') 
    }
  },
  data () {
    return {
      msg: 'Are You Sure?'
    }
  }
}
</script>