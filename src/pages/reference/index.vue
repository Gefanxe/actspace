<script setup lang="ts">
defineOptions({
  name: 'Reference',
});

interface ReferenceList {
  id: number;
  title: string;
  updateAt: string;
  links: Links[];
}

interface Links {
  id: number;
  name: string;
  href: string;
  updateAt: string;
}

const referenceList: ReferenceList[] = [
  {
    id: 1,
    title: '學習參考資料',
    updateAt: '2023-07-26',
    links: [
      {
        id: 1,
        name: 'Developer Roadmaps',
        href: 'https://roadmap.sh/',
        updateAt: '2023-07-26',
      },
    ],
  },
  {
    id: 2,
    title: '好用的開源後台前端專案',
    updateAt: '2019-12-12',
    links: [
      {
        id: 1,
        name: 'vue-element-admin',
        href: 'https://github.com/PanJiaChen/vue-element-admin',
        updateAt: '2019-12-12',
      },
      {
        id: 2,
        name: 'vue-typescript-admin-template',
        href: 'https://github.com/Armour/vue-typescript-admin-template',
        updateAt: '2019-12-12',
      },
      {
        id: 3,
        name: 'Quasar',
        href: 'https://quasar.dev/',
        updateAt: '2022-06-10',
      },
    ],
  },
];
</script>

<template>
  <div v-for="item in referenceList" :key="item.id" class="pb-4">
    <h1 class="text-xl tooltip tooltip-right pb-4" :data-tip="item.updateAt">
      {{ item.title }}
    </h1>
    <ul class="indent-4">
      <li v-for="sItem in item.links" :key="sItem.id" class="pb-2">
        <a class="tooltip tooltip-right indent-0" :data-tip="sItem.updateAt" :href="sItem.href" target="_blank">
          {{ sItem.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
