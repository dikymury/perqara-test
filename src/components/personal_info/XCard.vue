<template>
  <div class="card-xcard">
    <div class="card-xcard-wrap">
      <div class="card-xc-content">
        <router-link to="#">
          <header class="card-xc-withicons">
            <div class="card-xcc-detail">
              <h2>{{ props.data.title }}</h2>
              <div class="card-xcard-contain">
                <div class="card-xc-text">{{ props.data.desc }}</div>
              </div>
            </div>
            <div class="card-xc-icon" v-if="props.data.image">
              <img :alt="props.data.title" :src="props.data.image" />
            </div>
          </header>
        </router-link>
      </div>
      <div class="card-xc-footer">
        <router-link :to="props.data.link">
          <div class="card-xcf-link">{{ props.data.label_link }}</div>
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
