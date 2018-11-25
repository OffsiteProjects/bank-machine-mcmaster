<style>
  .red {
    color: red;
  }
</style>

<template>  
<div class="row">
    <div class="column col-lg-12 centered">
   <h2>Would you like a receipt?</h2>
    <router-link tag="button" to="/prettyReceipt" class="physical-btn btn-primary btn">Yes</router-link>
   <router-link tag="button" to="/" class="physical-btn btn-danger btn">No</router-link>
  </div>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      msg: 'Foo'
    }
  }
}
</script>