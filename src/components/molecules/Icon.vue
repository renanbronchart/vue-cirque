<template>
  <i class='material-icons' :class='extraClass' :style='{color: color}'>{{name}}</i>
</template>

<script>
  export default {
    props: ['extraClass', 'color', 'name'],
    data () {
      return {}
    }
  }
</script>
