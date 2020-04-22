<template>
  <div class=''>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    </div>
  
</template>

<script>
import NavBar from '@components/common/navibar/NavBar.vue'
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    NavBar,
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
}
</style>
