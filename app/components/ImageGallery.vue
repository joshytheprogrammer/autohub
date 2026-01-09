<script setup >

const props = defineProps({
  images: []
})

const activeIndex = ref(0)

const activeImage = computed(() => props.images[activeIndex.value]);
</script>

<template>
  <div class="space-y-4">
    <!-- Main Image -->
    <div class="relative aspect-4/3 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
      <img 
        :src="activeImage" 
        alt="Product Image" 
        class="h-full w-full object-cover transition-all duration-300"
      />
      
      <!-- Navigation Arrows -->
      <div class="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
        <UButton 
          icon="i-heroicons-chevron-left" 
          color="white" 
          variant="solid" 
          class="rounded-full shadow-lg"
          :disabled="activeIndex === 0"
          @click="activeIndex--"
        />
        <UButton 
          icon="i-heroicons-chevron-right" 
          color="white" 
          variant="solid" 
          class="rounded-full shadow-lg"
          :disabled="activeIndex === images.length - 1"
          @click="activeIndex++"
        />
      </div>
    </div>

    <!-- Thumbnails -->
    <div class="flex gap-4 overflow-x-auto pb-2 snap-x">
      <button 
        v-for="(image, index) in images" 
        :key="index"
        class="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all snap-start"
        :class="activeIndex === index ? 'border-primary-500 ring-2 ring-primary-500/50' : 'border-transparent opacity-70 hover:opacity-100'"
        @click="activeIndex = index"
      >
        <img :src="image" class="h-full w-full object-cover" />
      </button>
    </div>
  </div>
</template>
