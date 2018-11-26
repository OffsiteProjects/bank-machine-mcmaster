<style>

</style>

<template><div>
  <h1 class="big-title">{{msg}}</h1>
   <div class="row">
      <div class="col-sm-12">
        <h2 class="sub-title">E-Transfer {{"$" +(this.$route.params.amount/100).toFixed(2)}} to {{this.$route.params.payTo}} from Chequing Account?</h2>
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
      this.$router.push({name: 'success', params: { Message: 'You have successfully E-transferred $' + (this.$route.params.amount/100).toFixed(2)+ ' to recipient: '+ this.$route.params.payTo + '!'}}) 
    }
  },
  data () {
    return {
      msg: 'Are you sure?'
    }
  }
}
</script>