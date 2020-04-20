<template>
  <div class='navi-bar'>
    <div class="left"><slot name="left"></slot></div>
    <div class="center" name="center"><slot></slot></div>
    <div class="right" name="right"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'navi-bar',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
  }
  .left, .right{
    width: 60px;
  }
  .center {
    flex: 1;
  }
  
</style>
