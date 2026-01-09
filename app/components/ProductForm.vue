<script setup>
const steps = [
  { label: 'Details', icon: 'i-lucide-info' },
  { label: 'Specs', icon: 'i-lucide-clipboard-list' },
  { label: 'Photos', icon: 'i-lucide-image' },
  { label: 'Review', icon: 'i-lucide-check-circle' }
]

const currentStep = ref(0)
const loading = ref(false)

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

const makes = ['Toyota', 'Mercedes-Benz', 'Subaru', 'Nissan', 'Honda', 'BMW', 'Audi', 'Volkswagen', 'Ford', 'Hyundai', 'Kia', 'Land Rover']
const transmissions = ['Automatic', 'Manual', 'CVT', 'Tiptronic']
const fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric', 'Plug-in Hybrid']
const conditions = ['New', 'Used', 'Foreign Used', 'Locally Used']

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const submitForm = async () => {
  loading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
  navigateTo('/account/products')
}

// Validation basics
const isStep1Valid = computed(() => {
  return formData.title && formData.make && formData.model && formData.year && formData.price
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <!-- Stepper -->
    <div class="mb-10">
      <div class="relative">
        <div class="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -z-10 rounded-full"></div>
        <div 
          class="absolute top-1/2 left-0 h-0.5 bg-primary -z-10 rounded-full transition-all duration-300"
          :style="{ width: `${(currentStep / (steps.length - 1)) * 100}%` }"
        ></div>
        
        <div class="flex justify-between">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            class="flex flex-col items-center gap-3 cursor-pointer group"
            @click="index < currentStep ? currentStep = index : null"
          >
            <div 
              class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm"
              :class="[
                currentStep >= index 
                  ? 'border-primary bg-primary text-white scale-110' 
                  : 'border-gray-200 dark:border-gray-700 bg-elevated text-muted hover:border-primary-300 dark:hover:border-primary-700'
              ]"
            >
              <UIcon :name="step.icon" class="w-5 h-5" />
            </div>
            <span 
              class="text-xs font-semibold tracking-wide transition-colors duration-300" 
              :class="currentStep >= index ? 'text-primary' : 'text-muted'"
            >
              {{ step.label }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div class="grid lg:grid-cols-3 gap-8 ">
      <!-- Main Form Area -->
      <div class="lg:col-span-2 space-y-6">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform opacity-0 translate-y-2"
          enter-to-class="transform opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform opacity-100 translate-y-0"
          leave-to-class="transform opacity-0 -translate-y-2"
        >
          <!-- Step 1: Basic Info -->
          <UCard v-if="currentStep === 0" class="ring-1 ring-gray-200 dark:ring-gray-800 shadow-lg">
            <template #header>
              <h2 class="text-xl font-bold text-highlighted flex items-center gap-2">
                <UIcon name="i-lucide-car" class="w-5 h-5 text-primary" />
                Vehicle Information
              </h2>
              <p class="text-sm text-muted mt-1">Start with the basics of your vehicle.</p>
            </template>
            
            <div class="space-y-6">
              <UFormField label="Listing Title" required help="e.g. 2018 Toyota Land Cruiser Prado TX-L">
                <UInput 
                  v-model="formData.title" 
                  placeholder="Enter a descriptive title" 
                  size="lg"
                  icon="i-lucide-type"
                />
              </UFormField>

              <div class="grid md:grid-cols-2 gap-6">
                <UFormField label="Make" required>
                  <USelectMenu 
                    v-model="formData.make" 
                    :items="makes" 
                    placeholder="Select Make"
                    size="lg"
                    icon="i-lucide-award"
                  />
                </UFormField>
                <UFormField label="Model" required>
                  <UInput 
                    v-model="formData.model" 
                    placeholder="Enter Model" 
                    size="lg"
                    icon="i-lucide-car-front"
                  />
                </UFormField>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <UFormField label="Year of Manufacture" required>
                  <UInput 
                    v-model="formData.year" 
                    type="number" 
                    placeholder="e.g. 2020" 
                    size="lg"
                    icon="i-lucide-calendar"
                  />
                </UFormField>
                <UFormField label="Price (NGN)" required>
                  <UInput 
                    v-model="formData.price" 
                    type="number" 
                    placeholder="0.00" 
                    size="lg"
                    icon="i-lucide-banknote"
                  />
                </UFormField>
              </div>
            </div>
          </UCard>

          <!-- Step 2: Specifications -->
          <UCard v-else-if="currentStep === 1" class="ring-1 ring-gray-200 dark:ring-gray-800 shadow-lg">
            <template #header>
              <h2 class="text-xl font-bold text-highlighted flex items-center gap-2">
                <UIcon name="i-lucide-sliders-horizontal" class="w-5 h-5 text-primary" />
                Specifications & Details
              </h2>
              <p class="text-sm text-muted mt-1">Provide more specific details about the vehicle.</p>
            </template>

            <div class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <UFormField label="Transmission" required>
                  <USelectMenu 
                    v-model="formData.transmission" 
                    :items="transmissions" 
                    placeholder="Select" 
                    size="lg"
                    icon="i-lucide-settings-2"
                  />
                </UFormField>
                <UFormField label="Fuel Type" required>
                  <USelectMenu 
                    v-model="formData.fuelType" 
                    :items="fuelTypes" 
                    placeholder="Select" 
                    size="lg"
                    icon="i-lucide-fuel"
                  />
                </UFormField>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <UFormField label="Condition" required>
                  <USelectMenu 
                    v-model="formData.condition" 
                    :items="conditions" 
                    placeholder="Select" 
                    size="lg"
                    icon="i-lucide-sparkles"
                  />
                </UFormField>
                <UFormField label="Mileage (km)" required>
                  <UInput 
                    v-model="formData.mileage" 
                    type="number" 
                    placeholder="0" 
                    size="lg"
                    icon="i-lucide-gauge"
                  />
                </UFormField>
              </div>

              <UFormField label="Location" required>
                <UInput 
                  v-model="formData.location" 
                  placeholder="e.g. Abuja, FCT" 
                  size="lg"
                  icon="i-lucide-map-pin"
                />
              </UFormField>

              <UFormField label="Description">
                <UTextarea 
                  v-model="formData.description" 
                  placeholder="Describe the condition, features, and history of the vehicle..." 
                  :rows="6"
                  class="resize-none"
                />
              </UFormField>
            </div>
          </UCard>

          <!-- Step 3: Photos -->
          <UCard v-else-if="currentStep === 2" class="ring-1 ring-gray-200 dark:ring-gray-800 shadow-lg">
            <template #header>
              <h2 class="text-xl font-bold text-highlighted flex items-center gap-2">
                <UIcon name="i-lucide-image" class="w-5 h-5 text-primary" />
                Vehicle Photos
              </h2>
              <p class="text-sm text-muted mt-1">Upload high-quality photos. The first photo will be the cover.</p>
            </template>

            <ImageUploader v-model="formData.images" />
          </UCard>

          <!-- Step 4: Review -->
          <div v-else-if="currentStep === 3" class="space-y-6">
            <UCard class="ring-1 ring-gray-200 dark:ring-gray-800 shadow-lg border-l-4 border-l-primary">
              <div class="flex items-start gap-6">
                <div class="hidden sm:block w-32 h-24 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shrink-0">
                  <img 
                    v-if="formData.images.length > 0" 
                    :src="formData.images[0].preview" 
                    class="w-full h-full object-cover"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center text-muted">
                    <UIcon name="i-lucide-image" class="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-highlighted mb-1">{{ formData.title }}</h3>
                  <div class="text-xl font-bold text-primary mb-3">NGN {{ Number(formData.price).toLocaleString() }}</div>
                  <div class="flex flex-wrap gap-2">
                    <UBadge color="gray" variant="soft">{{ formData.year }}</UBadge>
                    <UBadge color="gray" variant="soft">{{ formData.make }}</UBadge>
                    <UBadge color="gray" variant="soft">{{ formData.model }}</UBadge>
                    <UBadge color="gray" variant="soft">{{ formData.condition }}</UBadge>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard class="ring-1 ring-gray-200 dark:ring-gray-800 shadow-lg">
              <template #header>
                <h3 class="text-lg font-semibold text-highlighted">Details Summary</h3>
              </template>
              <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                <div class="col-span-1">
                  <dt class="text-sm font-medium text-muted">Location</dt>
                  <dd class="mt-1 text-sm text-highlighted flex items-center gap-1">
                    <UIcon name="i-lucide-map-pin" class="w-4 h-4 text-gray-400" />
                    {{ formData.location }}
                  </dd>
                </div>
                <div class="col-span-1">
                  <dt class="text-sm font-medium text-muted">Mileage</dt>
                  <dd class="mt-1 text-sm text-highlighted flex items-center gap-1">
                    <UIcon name="i-lucide-gauge" class="w-4 h-4 text-gray-400" />
                    {{ Number(formData.mileage).toLocaleString() }} km
                  </dd>
                </div>
                <div class="col-span-1">
                  <dt class="text-sm font-medium text-muted">Transmission</dt>
                  <dd class="mt-1 text-sm text-highlighted">{{ formData.transmission }}</dd>
                </div>
                <div class="col-span-1">
                  <dt class="text-sm font-medium text-muted">Fuel Type</dt>
                  <dd class="mt-1 text-sm text-highlighted">{{ formData.fuelType }}</dd>
                </div>
                <div class="col-span-2">
                  <dt class="text-sm font-medium text-muted">Description</dt>
                  <dd class="mt-1 text-sm text-highlighted whitespace-pre-wrap bg-elevated p-3 rounded-md">{{ formData.description || 'No description provided.' }}</dd>
                </div>
              </dl>
            </UCard>

            <UAlert 
              icon="i-lucide-shield-check"
              color="primary"
              variant="subtle"
              title="Ready to publish?"
              description="Your listing will be reviewed by our team to ensuring quality standards. This usually takes less than 2 hours."
            />
          </div>
        </Transition>

        <!-- Navigation Buttons -->
        <div class="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-800">
          <UButton 
            v-if="currentStep > 0" 
            variant="ghost" 
            color="gray"
            size="lg"
            icon="i-lucide-arrow-left"
            @click="prevStep"
          >
            Back
          </UButton>
          <div v-else></div> <!-- Spacer -->

          <UButton 
            v-if="currentStep < steps.length - 1" 
            color="primary" 
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            @click="nextStep"
          >
            Next Step
          </UButton>
          <UButton 
            v-else 
            color="primary" 
            size="lg"
            trailing-icon="i-lucide-check"
            :loading="loading"
            @click="submitForm"
          >
            Publish Listing
          </UButton>
        </div>
      </div>

      <!-- Helper Sidebar -->
      <div class="lg:col-span-1 space-y-6">
        <UCard class="bg-primary-50 dark:bg-primary-950/20 ring-1 ring-primary-200 dark:ring-primary-900">
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-lightbulb" class="text-primary-600 w-5 h-5" />
              <h3 class="font-semibold text-primary-900 dark:text-primary-100">Selling Tips</h3>
            </div>
          </template>
          <ul class="space-y-3">
            <li v-if="currentStep === 0" class="text-sm text-primary-800 dark:text-primary-200 flex gap-2">
              <UIcon name="i-lucide-check-circle-2" class="w-4 h-4 shrink-0 mt-0.5" />
              <span>Use a clear, concise title including Year, Make, and Model.</span>
            </li>
            <li v-if="currentStep === 0" class="text-sm text-primary-800 dark:text-primary-200 flex gap-2">
              <UIcon name="i-lucide-check-circle-2" class="w-4 h-4 shrink-0 mt-0.5" />
              <span>Research market prices to set a competitive asking price.</span>
            </li>
            
            <li v-if="currentStep === 1" class="text-sm text-primary-800 dark:text-primary-200 flex gap-2">
              <UIcon name="i-lucide-check-circle-2" class="w-4 h-4 shrink-0 mt-0.5" />
              <span>Be honest about the condition to build trust with buyers.</span>
            </li>
            
            <li v-if="currentStep === 2" class="text-sm text-primary-800 dark:text-primary-200 flex gap-2">
              <UIcon name="i-lucide-check-circle-2" class="w-4 h-4 shrink-0 mt-0.5" />
              <span>Take photos in good lighting, preferably outdoors during the day.</span>
            </li>
            <li v-if="currentStep === 2" class="text-sm text-primary-800 dark:text-primary-200 flex gap-2">
              <UIcon name="i-lucide-check-circle-2" class="w-4 h-4 shrink-0 mt-0.5" />
              <span>Include interior, exterior, and detailed shots of any features.</span>
            </li>

             <li class="text-sm text-primary-800 dark:text-primary-200 flex gap-2">
              <UIcon name="i-lucide-shield" class="w-4 h-4 shrink-0 mt-0.5" />
              <span>Never share personal financial information or passwords.</span>
            </li>
          </ul>
        </UCard>
      </div>
    </div>
  </div>
</template>
