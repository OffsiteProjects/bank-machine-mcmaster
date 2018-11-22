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
    let listener = window.addEventListener('click', () => {
      window.removeEventListener('click', listener)
      this.$router.push('/verifyDeposit') 
    })
  }
}
</script>