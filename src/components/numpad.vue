<style>
  .numpad {
    width: 320px;
    padding: 0px;
  }
  .numpad .btn {
    width: 100px;
    height: 100px;
    font-size: 36px;
    margin: 10px;
  }
  .numpad input {
    width: 320px;
    height: 60px;
    margin: 0px;
    font-size: 36px;
    text-align: right; 
    pointer-events: none;
  }
</style>

<template>
  <div class="container numpad">
    <div class="row">
      <input v-bind:value="formatCents(input)" v-on:input="press" type="text" class="form-control" />
    </div>
    <div v-for="row in rows" class="row">
        <div v-for="el in row" class="btn-group">
          <button v-on:click="press(el)" class="btn physical-btn btn-primary">{{el}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data () {
    return {
      rows: [[1,2,3], [4,5,6], [7,8,9], ['<', 0, 'X']],
      input: ''
    }
  },
  props: ['pin-format'],
  methods: {
    formatCents (cents) {
      if (this.pinFormat==='true'){
        return (new Array(cents.length)).fill('•').join('')
      }
      else if (cents.length === 0) {
        return '0.00'
      } 

      else if (cents.length <= 2) {
        return '0.00'.slice(0,-cents.length) + cents
      } 

      else {
        return (cents / 100).toFixed(2);
      }
    },
    press (el) {
      if (el === '<') {
        this.input = this.input.slice(1)
      } else if (el === 'X') {
        this.input = ''
      } else {
        if (this.pinFormat && this.input.length >= 4) return
        this.input = el + this.input
      }
    }
  }
}
</script>