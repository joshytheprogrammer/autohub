<script setup>
definePageMeta({
  title: 'Contact Us'
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const subjects = [
  'General Inquiry',
  'Buying a Vehicle',
  'Selling a Vehicle',
  'Technical Support',
  'Report a Problem',
  'Partnership Opportunity',
  'Press & Media',
  'Other'
]

const loading = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  loading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  loading.value = false
  submitted.value = true
}

const contactInfo = [
  {
    icon: 'i-lucide-mail',
    title: 'Email',
    value: 'support@autohub.com',
    link: 'mailto:support@autohub.com'
  },
  {
    icon: 'i-lucide-phone',
    title: 'Phone',
    value: '1-800-AUTO-HUB',
    link: 'tel:1-800-288-6482'
  },
  {
    icon: 'i-lucide-map-pin',
    title: 'Address',
    value: '123 Auto Drive, San Francisco, CA 94102',
    link: 'https://maps.google.com'
  }
]

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM EST' },
  { day: 'Saturday', time: '10:00 AM - 6:00 PM EST' },
  { day: 'Sunday', time: '12:00 PM - 5:00 PM EST' }
]

const faqs = [
  {
    question: 'How do I list my vehicle for sale?',
    answer: 'Simply create an account, click "Sell Your Car", and follow the step-by-step listing process. You can add photos, set your price, and publish in minutes.'
  },
  {
    question: 'Is there a fee for listing?',
    answer: 'Basic listings are free! We also offer premium listing options that give your vehicle more visibility for a small fee.'
  },
  {
    question: 'How do I contact a seller?',
    answer: 'On any listing page, you\'ll find a "Contact Seller" button. You can send messages directly through our secure platform.'
  },
  {
    question: 'Are the vehicles verified?',
    answer: 'We verify seller identities and offer optional vehicle history reports. We recommend always inspecting a vehicle in person before purchase.'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-24">
      <div class="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          Have a question or need help? We're here for you. Reach out and our team will get back to you as soon as possible.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <UCard>
              <template #header>
                <h2 class="text-2xl font-bold text-highlighted">Send us a Message</h2>
                <p class="text-muted mt-1">Fill out the form below and we'll respond within 24 hours.</p>
              </template>

              <div v-if="submitted" class="text-center py-12">
                <div class="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <UIcon name="i-lucide-check-circle" class="size-8 text-success" />
                </div>
                <h3 class="text-xl font-semibold text-highlighted mb-2">Message Sent!</h3>
                <p class="text-muted mb-6">Thank you for reaching out. We'll get back to you soon.</p>
                <UButton @click="submitted = false; form.name = ''; form.email = ''; form.subject = ''; form.message = ''">
                  Send Another Message
                </UButton>
              </div>

              <form v-else class="space-y-6" @submit.prevent="handleSubmit">
                <div class="grid md:grid-cols-2 gap-6">
                  <UFormField label="Your Name" required>
                    <UInput
                      v-model="form.name"
                      placeholder="John Doe"
                      icon="i-lucide-user"
                      required
                      class="w-full"
                    />
                  </UFormField>

                  <UFormField label="Email Address" required>
                    <UInput
                      v-model="form.email"
                      type="email"
                      placeholder="you@example.com"
                      icon="i-lucide-mail"
                      required
                      class="w-full"
                    />
                  </UFormField>
                </div>

                <UFormField label="Subject" required>
                  <USelectMenu
                    v-model="form.subject"
                    :items="subjects"
                    placeholder="Select a subject"
                    class="w-full"
                  />
                </UFormField>

                <UFormField label="Message" required>
                  <UTextarea
                    v-model="form.message"
                    placeholder="How can we help you?"
                    :rows="6"
                    required
                    class="w-full"
                  />
                </UFormField>

                <UButton type="submit" size="lg" :loading="loading" icon="i-lucide-send">
                  Send Message
                </UButton>
              </form>
            </UCard>
          </div>

          <!-- Contact Info Sidebar -->
          <div class="space-y-6">
            <!-- Contact Details -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold text-highlighted">Contact Information</h3>
              </template>
              <div class="space-y-4">
                <a
                  v-for="info in contactInfo"
                  :key="info.title"
                  :href="info.link"
                  class="flex items-start gap-4 p-3 rounded-lg hover:bg-elevated transition-colors"
                >
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <UIcon :name="info.icon" class="size-5 text-primary" />
                  </div>
                  <div>
                    <div class="font-medium text-highlighted">{{ info.title }}</div>
                    <div class="text-sm text-muted">{{ info.value }}</div>
                  </div>
                </a>
              </div>
            </UCard>

            <!-- Business Hours -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold text-highlighted">Business Hours</h3>
              </template>
              <div class="space-y-3">
                <div v-for="hour in hours" :key="hour.day" class="flex justify-between">
                  <span class="text-muted">{{ hour.day }}</span>
                  <span class="font-medium text-highlighted">{{ hour.time }}</span>
                </div>
              </div>
            </UCard>

            <!-- Social Links -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold text-highlighted">Follow Us</h3>
              </template>
              <div class="flex gap-3">
                <UButton
                  color="neutral"
                  variant="soft"
                  icon="i-lucide-facebook"
                  size="lg"
                  square
                  to="https://facebook.com"
                  target="_blank"
                />
                <UButton
                  color="neutral"
                  variant="soft"
                  icon="i-lucide-twitter"
                  size="lg"
                  square
                  to="https://twitter.com"
                  target="_blank"
                />
                <UButton
                  color="neutral"
                  variant="soft"
                  icon="i-lucide-instagram"
                  size="lg"
                  square
                  to="https://instagram.com"
                  target="_blank"
                />
                <UButton
                  color="neutral"
                  variant="soft"
                  icon="i-lucide-linkedin"
                  size="lg"
                  square
                  to="https://linkedin.com"
                  target="_blank"
                />
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-elevated">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-highlighted mb-4">Frequently Asked Questions</h2>
          <p class="text-muted max-w-2xl mx-auto">
            Quick answers to common questions. Can't find what you're looking for? Send us a message!
          </p>
        </div>
        <div class="max-w-3xl mx-auto">
          <UAccordion :items="faqs.map((faq, i) => ({ label: faq.question, content: faq.answer, value: String(i) }))" />
        </div>
      </div>
    </section>
  </div>
</template>
