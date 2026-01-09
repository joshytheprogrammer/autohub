<script setup>
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])

const fileInput = ref(null)

const onFileSelect = (e) => {
  const files = Array.from(e.target.files || [])
  if (files.length === 0) return
  
  // Create object URLs for preview
  const newFiles = files.map(file => ({
    file,
    preview: URL.createObjectURL(file),
    name: file.name,
    size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
  }))

  emit('update:modelValue', [...props.modelValue, ...newFiles])
}

const removeFile = (index) => {
  const newFiles = [...props.modelValue]
  // Revoke object URL to avoid memory leaks
  if (newFiles[index].preview) {
    URL.revokeObjectURL(newFiles[index].preview)
  }
  newFiles.splice(index, 1)
  emit('update:modelValue', newFiles)
}

const triggerInput = () => {
  fileInput.value?.click()
}
</script>

<template>
  <div class="space-y-6">
    <!-- Drop Zone / Upload Button -->
    <div 
      class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors cursor-pointer group"
      @click="triggerInput"
    >
      <input 
        ref="fileInput"
        type="file" 
        multiple 
        accept="image/*" 
        class="hidden" 
        @change="onFileSelect"
      />
      <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <UIcon name="i-lucide-camera" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </div>
      <h3 class="text-lg font-semibold text-highlighted mb-1">Click to upload photos</h3>
      <p class="text-sm text-muted">SVG, PNG, JPG or GIF (max. 5MB each)</p>
    </div>

    <!-- Previews -->
    <div v-if="modelValue.length > 0" class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="(file, index) in modelValue" :key="index" class="relative group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-elevated">
        <div class="aspect-square">
          <img :src="file.preview" class="w-full h-full object-cover" />
        </div>
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <UButton 
            icon="i-lucide-trash-2" 
            color="red" 
            variant="solid" 
            size="xs"
            square
            @click.stop="removeFile(index)"
          />
        </div>
        <div class="p-2 text-xs truncate text-muted">
          {{ file.name }}
        </div>
      </div>
    </div>
  </div>
</template>
