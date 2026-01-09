<script setup>
import { useDropZone } from '@vueuse/core'

const props = defineProps({
  modelValue: []
})

const emit = defineEmits(['update:modelValue'])

const dropZoneRef = ref()
const previews = ref([])

const onDrop = (files) => {
  if (!files) return
  const newFiles = [...props.modelValue, ...files]
  emit('update:modelValue', newFiles)
  generatePreviews(files)
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: ['image/jpeg', 'image/png', 'image/webp']
})

const onFileSelect = (e) => {
  const input = e.target
  if (input.files) {
    onDrop(Array.from(input.files))
  }
}

const removeFile = (index) => {
  const newFiles = [...props.modelValue]
  newFiles.splice(index, 1)
  emit('update:modelValue', newFiles)
  
  const newPreviews = [...previews.value]
  newPreviews.splice(index, 1)
  previews.value = newPreviews
}

const generatePreviews = (files) => {
  files.forEach(file => {
    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) {
        previews.value.push(e.target.result)
      }
    }
    reader.readAsDataURL(file)
  })
}
</script>

<template>
  <div class="space-y-4">
    <!-- Drop Zone -->
    <div 
      ref="dropZoneRef"
      class="border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer"
      :class="isOverDropZone ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-300 dark:border-gray-700 hover:border-primary-400'"
      @click="$refs.fileInput.click()"
    >
      <input 
        ref="fileInput"
        type="file" 
        multiple 
        accept="image/*" 
        class="hidden" 
        @change="onFileSelect"
      />
      <div class="flex flex-col items-center gap-2">
        <UIcon name="i-heroicons-cloud-arrow-up" class="w-10 h-10 text-gray-400" />
        <p class="text-gray-600 dark:text-gray-300 font-medium">
          Click to upload or drag and drop
        </p>
        <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
      </div>
    </div>

    <!-- Preview Grid -->
    <div v-if="previews.length > 0" class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div 
        v-for="(preview, index) in previews" 
        :key="index" 
        class="relative group aspect-4/3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
      >
        <img :src="preview" class="h-full w-full object-cover" />
        <button 
          class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          @click.stop="removeFile(index)"
        >
          <UIcon name="i-heroicons-x-mark" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>
