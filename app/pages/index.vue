<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const items = ref<TabsItem[]>([
  {
    label: 'Account',
    icon: 'i-lucide-user',
    content: 'This is the account content.'
  },
  {
    label: 'Password',
    icon: 'i-lucide-lock',
    content: 'This is the password content.'
  }
])
</script>
<template>
  <section>
    <div class="container">
      <h1 class="text-primary">
        Considerând că ignorarea și disprețuirea drepturilor omului au
      </h1>
      <h2>
        Considerând că ignorarea și disprețuirea drepturilor omului au
      </h2>
      <h3>
        Considerând că ignorarea și disprețuirea drepturilor omului au
      </h3>
      <h4>
        Considerând că ignorarea și disprețuirea drepturilor omului au
      </h4>
      <h5>
        Considerând că ignorarea și disprețuirea drepturilor omului au
      </h5>
      <h1>Enter your credentials to access your account.</h1>
      <UTabs :items="items" class="w-full" color="brand"/>
    </div>

  </section>
</template>
<style scoped></style>