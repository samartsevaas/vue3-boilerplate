<script setup lang="ts">
import TheHeader from "/@components/TheHeader.vue";
import TheAside from "/@components/TheAside.vue";
import TheMain from "/@components/TheMain.vue";
</script>

<template>
  <section class="application-layout">
    <the-aside class="application-layout__aside" />
    <the-header class="application-layout__header" />
    <the-main class="application-layout__main" />
  </section>
</template>

<style lang="scss" scoped>
@use "/@styles/layouts/dashboard.scss" as *;

.application-layout {
  @extend .dashboard !optional;
}
</style>
