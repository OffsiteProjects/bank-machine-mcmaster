<style>
  .red {
    color: red;
  }
</style>

<template>
  <div>
    <div class="row text-center">
      <div class="col-sm">
        <h2>Insert Cash</h2>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-sm">
        <img src="assets/card.jpeg"/>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {

  mounted () {
    const self = this
    function route () {
      window.removeEventListener('click', route)
      //self.$router.push('/verifyDeposit')
      self.$router.push({name: 'verifyDeposit', params: { account: self.$route.params.account }})  
    }
    window.addEventListener('click', route)
  }
}
</script>