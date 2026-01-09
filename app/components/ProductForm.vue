<script setup >
import { z } from 'zod'

const steps = [
  { label: 'Basic Info', icon: 'i-heroicons-information-circle' },
  { label: 'Specifications', icon: 'i-heroicons-clipboard-document-list' },
  { label: 'Photos', icon: 'i-heroicons-photo' },
  { label: 'Review', icon: 'i-heroicons-check-circle' }
]

const currentStep = ref(0)

const formData = reactive({
  title: '',
  price: undefined,
  make: '',
  model: '',
  year: undefined,
  mileage: undefined,
  transmission: '',
  fuelType: '',
  condition: '',
  location: '',
  description: '',
  images: []
})

const makes = ['Toyota', 'Mercedes-Benz', 'Subaru', 'Nissan', 'Honda', 'BMW', 'Audi', 'Volkswagen']
const transmissions = ['Automatic', 'Manual', 'CVT']
const fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric']
const conditions = ['New', 'Used', 'Foreign Used', 'Locally Used']

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const submitForm = () => {
  console.log('Submitting form', formData)
  // TODO: API call
  navigateTo('/account/products')
}
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <!-- Stepper -->
    <div class="flex justify-between mb-8 relative">
      <div class="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
      <div 
        v-for="(step, index) in steps" 
        :key="index"
        class="flex flex-col items-center gap-2 bg-white dark:bg-gray-900 px-2"
      >
        <div 
          class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors"
          :class="currentStep >= index ? 'border-primary-500 bg-primary-50 text-primary-600 dark:bg-primary-900/20' : 'border-gray-300 text-gray-400'"
        >
          <UIcon :name="step.icon" class="w-5 h-5" />
        </div>
        <span class="text-xs font-medium" :class="currentStep >= index ? 'text-primary-600' : 'text-gray-500'">{{ step.label }}</span>
      </div>
    </div>

    <UCard>
      <!-- Step 1: Basic Info -->
      <div v-if="currentStep === 0" class="space-y-6">
        <h2 class="text-xl font-bold">Vehicle Information</h2>
        
        <UFormField label="Listing Title" help="e.g. 2018 Toyota Prado TX-L">
          <UInput v-model="formData.title" placeholder="Enter title" />
        </UFormField>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UFormField label="Make">
            <USelectMenu v-model="formData.make" :items="makes" placeholder="Select Make" />
          </UFormField>
          <UFormField label="Model">
            <UInput v-model="formData.model" placeholder="Enter Model" />
          </UFormField>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UFormField label="Year of Manufacture">
            <UInput v-model="formData.year" type="number" placeholder="YYYY" />
          </UFormField>
          <UFormField label="Price (NGN)">
            <UInput v-model="formData.price" type="number" placeholder="0.00" />
          </UFormField>
        </div>
      </div>

      <!-- Step 2: Specifications -->
      <div v-if="currentStep === 1" class="space-y-6">
        <h2 class="text-xl font-bold">Specifications</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UFormField label="Transmission">
            <USelectMenu v-model="formData.transmission" :items="transmissions" placeholder="Select" />
          </UFormField>
          <UFormField label="Fuel Type">
            <USelectMenu v-model="formData.fuelType" :items="fuelTypes" placeholder="Select" />
          </UFormField>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UFormField label="Condition">
            <USelectMenu v-model="formData.condition" :items="conditions" placeholder="Select" />
          </UFormField>
          <UFormField label="Mileage (km)">
            <UInput v-model="formData.mileage" type="number" placeholder="0" />
          </UFormField>
        </div>

        <UFormField label="Location">
          <UInput v-model="formData.location" placeholder="e.g. Abuja, Westlands" />
        </UFormField>

        <UFormField label="Description">
          <UTextarea v-model="formData.description" placeholder="Describe your vehicle..." :rows="4" />
        </UFormField>
      </div>

      <!-- Step 3: Photos -->
      <div v-if="currentStep === 2" class="space-y-6">
        <h2 class="text-xl font-bold">Upload Photos</h2>
        <p class="text-sm text-gray-500">Add high-quality photos to attract more buyers.</p>
        <ImageUploader v-model="formData.images" />
      </div>

      <!-- Step 4: Review -->
      <div v-if="currentStep === 3" class="space-y-6">
        <h2 class="text-xl font-bold">Review Listing</h2>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-4">
          <div class="flex justify-between">
            <span class="text-gray-500">Title</span>
            <span class="font-medium">{{ formData.title }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Price</span>
            <span class=" font-bold text-primary-600">NGN {{ formData.price }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Make/Model</span>
            <span class="font-medium">{{ formData.make }} {{ formData.model }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Images</span>
            <span class="font-medium">{{ formData.images.length }} photos selected</span>
          </div>
        </div>

        <UAlert 
          icon="i-heroicons-shield-check"
          color="green"
          variant="soft"
          title="Ready to post?"
          description="Your listing will be reviewed by our team before going live."
        />
      </div>

      <template #footer>
        <div class="flex justify-between">
          <UButton 
            v-if="currentStep > 0" 
            variant="ghost" 
            @click="prevStep"
          >
            Back
          </UButton>
          <div v-else></div> <!-- Spacer -->

          <UButton 
            v-if="currentStep < steps.length - 1" 
            color="primary" 
            @click="nextStep"
          >
            Next Step
          </UButton>
          <UButton 
            v-else 
            color="primary" 
            @click="submitForm"
          >
            Post Listing
          </UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>
