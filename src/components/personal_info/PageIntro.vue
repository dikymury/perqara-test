<template>
  <div class="page-intro">
    <div class="page-intro-text">
      <div class="page-intro-head">
        <h2>{{ props.data.title }}</h2>
        <div class="page-intro-image-mob">
          <img alt="personal info mobile" :src="props.data.image_mobile" />
        </div>
      </div>
      <p>{{ props.data.desc }}</p>
    </div>
    <div class="page-intro-image">
      <img alt="personal info" :src="props.data.image" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
</script>
