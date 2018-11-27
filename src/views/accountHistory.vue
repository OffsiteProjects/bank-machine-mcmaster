<style>
th, td {
    padding: 15px;
}

</style>

<template>
  <div class="row">
    <div class="column col-lg-12 centered">

      <h1 class="big-title">Transactions</h1>
      <h2 class="sub-title">Account: {{this.$route.params.account}}</h2>
      <div align="center"> 
      <table border="1px solid black" >
        <tr>
        <th> Transaction </th>
        <th>      Amount      </th>
        <th> New Account Balance </th>
        </tr>
        <tr>
        <td padding="15px"> No Frills </td>
        <td align="right"> - $ 30.27 </td>
        <td align="right">  $ 100.00 </td>
        </tr>
        <tr>
        <td padding="15px"> Shoppers Drug Mart </td>
        <td align="right"> - $ 5.00 </td>
        <td align="right"> $ 130.27 </td>
        </tr>
        <tr>
        <td padding="15px"> Pay Day </td>
        <td align="right"> $ 100 </td>
        <td align="right"> $ 135.27 </td>
        </tr>
      </table>
      </div>
      <router-link tag="button" to="/main-menu" class="btn btn-primary btn-main">Done</router-link>
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