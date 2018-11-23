<style>
  .red {
    color: red;
  }
</style>

<template><div>
   Would you like a receipt?
    <router-link tag="button" to="/prettyReceipt" class="btn">Yes</router-link>
   <router-link tag="button" to="/" class="btn">No</router-link>
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