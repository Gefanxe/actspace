<script setup lang="ts">
// import Hero from './components/Hero.vue';
// import StoreTest from './components/StoreTest.vue';

defineOptions({
  name: 'Home',
});
</script>

<template>
  <div>
    <RouterLink
      to="/reference"
      aria-current="page"
      aria-label="Reference"
      class="btn-ghost btn px-2 text-[20px]"
    >
      參考資料
    </RouterLink>
  </div>
</template>

<style scoped></style>
