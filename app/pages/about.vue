<script setup>
definePageMeta({
  title: 'About Us'
})

const stats = [
  { label: 'Active Listings', value: '50,000+' },
  { label: 'Happy Customers', value: '10,000+' },
  { label: 'Years in Business', value: '8+' },
  { label: 'Cities Covered', value: '200+' }
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://i.pravatar.cc/300?img=1',
    bio: 'Former automotive executive with 15 years of industry experience.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://i.pravatar.cc/300?img=3',
    bio: 'Tech veteran who previously led engineering at major startups.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Operations',
    image: 'https://i.pravatar.cc/300?img=5',
    bio: 'Operations specialist focused on customer satisfaction.'
  },
  {
    name: 'David Kim',
    role: 'Head of Marketing',
    image: 'https://i.pravatar.cc/300?img=8',
    bio: 'Digital marketing expert with a passion for automotive.'
  }
]

const values = [
  {
    icon: 'i-lucide-shield-check',
    title: 'Trust & Transparency',
    description: 'We believe in honest dealings. Every listing is verified, and we provide complete vehicle history reports.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Customer First',
    description: 'Our customers are at the heart of everything we do. We\'re committed to making car buying and selling simple.'
  },
  {
    icon: 'i-lucide-lightbulb',
    title: 'Innovation',
    description: 'We continuously improve our platform with cutting-edge technology to provide the best experience.'
  },
  {
    icon: 'i-lucide-heart-handshake',
    title: 'Community',
    description: 'We\'re building more than a marketplace—we\'re creating a community of automotive enthusiasts.'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-linear-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-24">
      <div class="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About AutoHub</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          We're on a mission to revolutionize the way people buy and sell vehicles. 
          Founded in 2018, AutoHub has grown to become the most trusted automotive marketplace.
        </p>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-elevated">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">{{ stat.value }}</div>
            <div class="text-muted">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-highlighted mb-6">Our Story</h2>
            <div class="space-y-4 text-muted">
              <p>
                AutoHub was born from a simple frustration: buying and selling cars was too complicated. 
                Our founder, Sarah Johnson, spent months trying to sell her first car and realized there 
                had to be a better way.
              </p>
              <p>
                In 2018, she assembled a team of automotive enthusiasts and tech experts to build a 
                platform that would make vehicle transactions as simple as ordering a pizza. What started 
                in a small garage office has now grown into a nationwide marketplace serving millions of users.
              </p>
              <p>
                Today, AutoHub connects thousands of buyers and sellers every day. We've facilitated over 
                $2 billion in vehicle transactions and helped countless families find their perfect ride. 
                But we're just getting started.
              </p>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-video rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
              <UIcon name="i-lucide-car" class="size-32 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values Section -->
    <section class="py-20 bg-elevated">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-highlighted mb-4">Our Values</h2>
          <p class="text-muted max-w-2xl mx-auto">
            These core principles guide everything we do at AutoHub.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <UCard v-for="value in values" :key="value.title" variant="subtle" class="text-center">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <UIcon :name="value.icon" class="size-8 text-primary" />
              </div>
              <h3 class="text-lg font-semibold text-highlighted mb-2">{{ value.title }}</h3>
              <p class="text-sm text-muted">{{ value.description }}</p>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-highlighted mb-4">Meet Our Team</h2>
          <p class="text-muted max-w-2xl mx-auto">
            The passionate people behind AutoHub who work tirelessly to improve your experience.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="member in team" :key="member.name" class="text-center">
            <UAvatar
              :src="member.image"
              :alt="member.name"
              size="3xl"
              class="mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold text-highlighted">{{ member.name }}</h3>
            <p class="text-primary font-medium text-sm mb-2">{{ member.role }}</p>
            <p class="text-sm text-muted">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p class="text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have found their perfect vehicle on AutoHub.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/listings" size="xl" color="white">
            Browse Listings
          </UButton>
          <UButton to="/sell" size="xl" variant="outline" class="text-white border-white hover:bg-white/10">
            Sell Your Car
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>
