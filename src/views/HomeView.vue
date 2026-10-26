<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <section>
    <p class="eyebrow">01 / HOME</p>
    <h1>Hello, <span>world.</span></h1>
    <p>Every great idea starts somewhere. This one starts with a simple hello.</p>
    <RouterLink class="button" to="/about">Get to know us ↗</RouterLink>
  </section>
</template>
