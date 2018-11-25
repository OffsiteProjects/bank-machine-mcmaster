<style>
  .red {
    color: red;
  }
</style>

<template><div class="row">
    <div class="column col-lg-12 centered">
   <h2>Receipt printed</h2>
   <router-link tag="button" to="/main-menu" class="physical-btn btn-primary btn">Continue</router-link>
  </div></div>
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