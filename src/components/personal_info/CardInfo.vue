<template>
  <div class="card-info">
    <header>
      <h2>{{ props.data.title }}</h2>
      <p v-html="props.data.desc" v-if="props.data.desc"></p>
    </header>
    <div class="card-info-list">
      <div class="card-il-item" v-for="(x, i) in props.data.items" :key="i">
        <router-link :to="x.link" class="card-ili-link">
          <div class="card-ili-content">
            <div
              :class="x.image ? 'card-ili-title-photo' : ''"
              class="card-ili-title"
            >
              <h3>{{ x.label }}</h3>
            </div>
            <div class="card-ili-contain">
              <div
                :class="x.image ? 'card-ili-notval' : ''"
                class="card-ili-val"
              >
                <span v-for="(c, y) in x.content" :key="y">{{ c }}</span>
              </div>
              <div class="card-ili-action">
                <div class="card-ili-image" v-if="x.image">
                  <img :src="x.image" :alt="x.lebel" />
                  <div class="cicon cicon-20 cicon-camera"></div>
                </div>
                <i v-else class="feather icon-chevron-right"></i>
              </div>
            </div>
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
