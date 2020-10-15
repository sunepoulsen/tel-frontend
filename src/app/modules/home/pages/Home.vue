<template>
  <div class="home p-grid p-justify-center">
    <div class="p-col-5">
      <img alt="Vue logo" src="@/assets/logo.png">
      <HomeContent msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HomeContent from '@/app/modules/home/components/HomeContent.vue'

export default {
  name: 'Home',
  components: {
    HomeContent: HomeContent
  }
}
</script>
