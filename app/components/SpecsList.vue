<script setup>
defineProps({
  specs: {
    type: Object,
    required: true
  }
})

const formatLabel = (key) => {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div 
      v-for="(value, key) in specs" 
      :key="key"
      class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
    >
      <span class="text-gray-500 dark:text-gray-400 text-sm">{{ formatLabel(key) }}</span>
      <span class="font-medium text-gray-900 dark:text-white">{{ value }}</span>
    </div>
  </div>
</template>
