<script setup lang="ts">
import ThemeChange from './components/ThemeChange/index.vue';
import LocalesChange from './components/LocalesChange/index.vue';

import UnoCSSIconButton from '~/components/Icon/UnoCSSIconButton.vue';

defineOptions({
  name: 'Navbar',
});
</script>

<template>
  <div
    class="sticky top-0 z-30 flex h-16 w-full justify-center text-base-content opacity-90 backdrop-blur transition-all duration-100"
  >
    <nav class="navbar w-full">
      <div class="flex flex-1 md:gap-1 lg:gap-2">
        <RouterLink
          to="/"
          aria-current="page"
          aria-label="Homepage"
          class="btn-ghost btn px-2"
        >
          <div
            class="inline-flex text-lg text-primary transition-all duration-200 md:text-3xl"
          >
            <span class="text-primary">A<span class="lowercase">ct</span></span>
            <span class="text-base-content"><span class="lowercase">space</span></span>
          </div>
        </RouterLink>
      </div>
      <div>
        <ThemeChange />
        <LocalesChange />
        <span
          class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
          data-tip="原始碼"
        >
          <span class="flex-none items-center">
            <a
              aria-label="Github"
              target="_blank"
              href="https://github.com/Gefanxe/actspace"
              class="btn-ghost drawer-button btn-square btn normal-case"
            >
              <UnoCSSIconButton icon="i-mdi-github" />
            </a>
          </span>
        </span>
      </div>
    </nav>
  </div>
</template>
