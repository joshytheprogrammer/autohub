<script setup>
const filters = reactive({
  make: '',
  model: '',
  minPrice: undefined,
  maxPrice: undefined,
  minYear: undefined,
  maxYear: undefined,
  transmission: [],
  fuelType: [],
  condition: []
})

const makes = ['Toyota', 'Mercedes-Benz', 'Subaru', 'Nissan', 'Honda', 'BMW', 'Audi', 'Volkswagen', 'Land Rover', 'Ford', 'Mazda', 'Mitsubishi']
const transmissions = ['Automatic', 'Manual', 'CVT']
const fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric']
const conditions = ['New', 'Used', 'Foreign Used', 'Locally Used']

const emit = defineEmits(['update:filters'])

watch(filters, (newFilters) => {
  emit('update:filters', newFilters)
}, { deep: true })
</script>

<template>
  <div class="space-y-6">
    <!-- Make & Model -->
    <div class="space-y-4">
      <h3 class="font-semibold text-gray-900 dark:text-white">Vehicle Details</h3>
      <UFormField label="Make">
        <USelectMenu v-model="filters.make" :items="makes" placeholder="Select Make" class="w-full" />
      </UFormField>
      <UFormField label="Model">
        <UInput v-model="filters.model" placeholder="Model (e.g. Corolla)" />
      </UFormField>
    </div>

    <USeparator />

    <!-- Price Range -->
    <div class="space-y-4">
      <h3 class="font-semibold text-gray-900 dark:text-white">Price Range (NGN)</h3>
      <div class="flex gap-2">
        <UInput v-model="filters.minPrice" type="number" placeholder="Min" class="w-full" />
        <UInput v-model="filters.maxPrice" type="number" placeholder="Max" class="w-full" />
      </div>
    </div>

    <USeparator />

    <!-- Year Range -->
    <div class="space-y-4">
      <h3 class="font-semibold text-gray-900 dark:text-white">Year of Manufacture</h3>
      <div class="flex gap-2">
        <UInput v-model="filters.minYear" type="number" placeholder="From" class="w-full" />
        <UInput v-model="filters.maxYear" type="number" placeholder="To" class="w-full" />
      </div>
    </div>

    <USeparator />

    <!-- Transmission -->
    <div class="space-y-4">
      <h3 class="font-semibold text-gray-900 dark:text-white">Transmission</h3>
      <div class="space-y-2">
        <UCheckbox v-for="type in transmissions" :key="type" v-model="filters.transmission" :value="type" :label="type" />
      </div>
    </div>

    <USeparator />

    <!-- Fuel Type -->
    <div class="space-y-4">
      <h3 class="font-semibold text-gray-900 dark:text-white">Fuel Type</h3>
      <div class="space-y-2">
        <UCheckbox v-for="type in fuelTypes" :key="type" v-model="filters.fuelType" :value="type" :label="type" />
      </div>
    </div>
    
    <USeparator />

    <!-- Condition -->
    <div class="space-y-4">
      <h3 class="font-semibold text-gray-900 dark:text-white">Condition</h3>
      <div class="space-y-2">
        <UCheckbox v-for="cond in conditions" :key="cond" v-model="filters.condition" :value="cond" :label="cond" />
      </div>
    </div>
  </div>
</template>
