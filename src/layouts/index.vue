<script setup lang="ts">
import Navbar from './Navbar/index.vue';

defineOptions({
  name: 'Layout',
});
</script>

<template>
  <div class="font-chinese antialiased">
    <div class="min-h-screen">
      <Navbar />
      <div class="p6">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
