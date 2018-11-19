<style>
  .numpad {
    width: 300px;
    padding: 0px;
  }
  .numpad .btn {
    width: 100px;
    height: 100px;
    border-radius: 0;
    border: solid black 1px;
    box-shadow: none !important;
    font-size: 36px;
  }
  .numpad input {
    width: 300px;
    height: 60px;
    margin: 0px;
    font-size: 36px;
    text-align: right; 
  }
</style>

<template>
  <div class="container numpad">
    <div class="row">
      <input v-bind:value="formatCents(input)" v-on:input="press" type="number" class="form-control" />
    </div>
    <div v-for="row in rows" class="row">
        <div v-for="el in row" class="btn-group">
          <button v-on:click="press(el)" class="btn btn-primary">{{el}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rows: [[1,2,3], [4,5,6], [7,8,9], ['<', 0, 'X']],
      input: ''
    }
  },
  methods: {
    formatCents (cents) {
      if (cents.length === 0) {
        return '0.00'
      } if (cents.length <= 2) {
        return '0.00'.slice(0,-cents.length) + cents
      } else {
        return (cents / 100).toFixed(2);
      }
    },
    press: function (el) {
      if (el === '<') {
        this.input = this.input.slice(1)
      } else if (el === 'X') {
        this.input = ''
      } else {
        this.input = el + this.input
      }
    }
  }
}
</script>