<script setup lang="ts">
  import { useSeoMetadata } from '~/composables/useSeoMeta';

  useSeoMetadata({
    title: 'Placeholder',
    description: 'Placeholder',
    ogImage: '/images/og-meta.jpg',
    ogType: 'website',
    twitterCard: 'summary',
  });
</script>
<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
