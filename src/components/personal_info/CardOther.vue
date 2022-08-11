<template>
  <div class="card-other">
    <router-link to="#">
      <header class="co-header">
        <h2 class="co-title">{{ props.data.title }}</h2>
        <div class="co-desc" v-if="props.data.desc">{{ props.data.desc }}</div>
      </header>
    </router-link>
    <div class="co-content">
      <div class="co-item" v-for="(x, i) in props.data.items" :key="i">
        <router-link :to="x.link" class="co-item-link">
          <div class="co-contain">
            <div
              v-if="x.icon"
              :class="[x.icon ? x.icon : '']"
              class="cicon cicon-24"
            ></div>
            <div class="coc-desc">
              <div class="coc-title" v-if="x.title">{{ x.title }}</div>
              <div class="coc-subtitle" v-if="x.subtitle">{{ x.subtitle }}</div>
            </div>
          </div>
          <div class="co-actions">
            <i class="feather icon-chevron-right"></i>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
</script>
