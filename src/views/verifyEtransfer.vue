<style>
  .red {
    color: red;
  }
</style>

<template><div>
  <h1 class="red">{{msg}}</h1>
   <div class="row">
      <div class="col-sm-12">
        <h2>E-Transfer {{"$" +(this.$route.params.amount/100).toFixed(2)}} to {{this.$route.params.payTo}}?</h2>
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