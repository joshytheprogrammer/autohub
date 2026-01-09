<script setup>
definePageMeta({
  title: 'Terms of Service'
})

const lastUpdated = 'January 1, 2026'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using AutoHub's website, mobile applications, or any of our services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.

These Terms apply to all visitors, users, and others who access or use the Services. By using our Services, you represent that you are at least 18 years old and have the legal capacity to enter into these Terms.`
  },
  {
    title: '2. Description of Services',
    content: `AutoHub provides an online marketplace platform that connects vehicle buyers and sellers. Our Services include:

• Vehicle listing and browsing capabilities
• Communication tools between buyers and sellers
• Search and filtering functionality
• User account management
• Vehicle history reports (where available)
• Saved searches and favorites

AutoHub does not own, sell, or purchase any vehicles. We serve solely as an intermediary platform to facilitate transactions between independent buyers and sellers.`
  },
  {
    title: '3. User Accounts',
    content: `To access certain features of our Services, you must create an account. When creating an account, you agree to:

• Provide accurate, current, and complete information
• Maintain and promptly update your account information
• Keep your password secure and confidential
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized access

We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, abusive, or illegal activities.`
  },
  {
    title: '4. Listing Guidelines',
    content: `When listing a vehicle on AutoHub, you agree to:

• Provide accurate and truthful information about the vehicle
• Only list vehicles you own or are authorized to sell
• Include clear, recent photographs of the actual vehicle
• Disclose any known defects, damage, or issues
• Set fair and honest pricing
• Respond promptly to inquiries from potential buyers
• Remove listings once the vehicle is sold

Prohibited listings include stolen vehicles, vehicles with undisclosed liens, salvage vehicles misrepresented as clean title, and any listing containing false or misleading information.`
  },
  {
    title: '5. Buyer Responsibilities',
    content: `As a buyer using our Services, you understand and agree that:

• All transactions are between you and the seller directly
• AutoHub does not guarantee the condition, quality, or legality of any vehicle
• You are responsible for inspecting vehicles before purchase
• You should verify all information provided by sellers independently
• You are responsible for arranging payment and transfer of ownership
• AutoHub is not a party to any transaction between buyers and sellers

We strongly recommend having any vehicle inspected by a qualified mechanic before completing a purchase.`
  },
  {
    title: '6. Fees and Payments',
    content: `AutoHub offers both free and paid services:

Free Services:
• Basic vehicle listings
• Searching and browsing listings
• Contacting sellers
• Creating saved searches

Paid Services:
• Featured listings and premium placement
• Extended listing duration
• Vehicle history reports
• Additional photos and features

All fees are non-refundable unless otherwise stated. We reserve the right to modify our pricing at any time with reasonable notice.`
  },
  {
    title: '7. Prohibited Conduct',
    content: `You agree not to:

• Violate any applicable laws or regulations
• Infringe on the rights of others
• Post false, misleading, or fraudulent content
• Harass, threaten, or intimidate other users
• Attempt to circumvent our security measures
• Use automated tools to access our Services without permission
• Interfere with the proper functioning of our platform
• Collect user information without consent
• Use our Services for any illegal purpose
• Engage in price manipulation or bid shielding`
  },
  {
    title: '8. Intellectual Property',
    content: `All content on AutoHub, including but not limited to text, graphics, logos, icons, images, audio clips, and software, is the property of AutoHub or its content suppliers and is protected by copyright and other intellectual property laws.

You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our Services without our prior written consent.

By posting content on AutoHub, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display that content in connection with our Services.`
  },
  {
    title: '9. Disclaimer of Warranties',
    content: `OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:

• MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
• NON-INFRINGEMENT
• ACCURACY OR COMPLETENESS OF CONTENT
• AVAILABILITY OR RELIABILITY OF SERVICES
• SECURITY OF DATA TRANSMISSION

We do not warrant that our Services will be uninterrupted, error-free, or free of viruses or other harmful components.`
  },
  {
    title: '10. Limitation of Liability',
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, AUTOHUB AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.

Our total liability for any claims arising from these Terms or your use of our Services shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.

Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so some of the above limitations may not apply to you.`
  },
  {
    title: '11. Indemnification',
    content: `You agree to indemnify, defend, and hold harmless AutoHub and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:

• Your use of our Services
• Your violation of these Terms
• Your violation of any third-party rights
• Any content you post or submit through our Services
• Any transaction between you and another user`
  },
  {
    title: '12. Dispute Resolution',
    content: `Any disputes arising from these Terms or your use of our Services shall be resolved through binding arbitration in accordance with the American Arbitration Association's rules. The arbitration shall take place in San Francisco, California.

You agree to waive any right to a jury trial or to participate in a class action lawsuit. You may opt out of this arbitration agreement by sending written notice within 30 days of creating your account.

For claims under $10,000, you may choose small claims court instead of arbitration if the claim qualifies.`
  },
  {
    title: '13. Modifications to Terms',
    content: `We reserve the right to modify these Terms at any time. We will notify users of material changes by:

• Posting a notice on our website
• Sending an email to registered users
• Displaying a prominent notice within our Services

Your continued use of our Services after such modifications constitutes acceptance of the updated Terms. If you do not agree to the modified Terms, you must stop using our Services.`
  },
  {
    title: '14. Termination',
    content: `We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.

Upon termination:
• Your right to use our Services will immediately cease
• We may delete your account and all associated data
• Any outstanding fees remain due and payable
• Provisions that should survive termination will remain in effect`
  },
  {
    title: '15. Contact Information',
    content: `If you have any questions about these Terms of Service, please contact us:

AutoHub Legal Department
123 Auto Drive
San Francisco, CA 94102
Email: legal@autohub.com
Phone: 1-800-AUTO-HUB`
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-elevated py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl font-bold text-highlighted mb-4">Terms of Service</h1>
          <p class="text-muted">
            Last updated: {{ lastUpdated }}
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <!-- Introduction -->
          <div class="prose dark:prose-invert max-w-none mb-12">
            <p class="text-lg text-muted">
              Welcome to AutoHub. These Terms of Service govern your use of our website and services. 
              Please read these terms carefully before using our platform. By using AutoHub, you agree 
              to be bound by these terms and our Privacy Policy.
            </p>
          </div>

          <!-- Table of Contents -->
          <UCard class="mb-12">
            <template #header>
              <h2 class="text-lg font-semibold text-highlighted">Table of Contents</h2>
            </template>
            <nav class="grid md:grid-cols-2 gap-2">
              <a
                v-for="(section, index) in sections"
                :key="index"
                :href="`#section-${index + 1}`"
                class="text-sm text-primary hover:underline"
              >
                {{ section.title }}
              </a>
            </nav>
          </UCard>

          <!-- Sections -->
          <div class="space-y-12">
            <div
              v-for="(section, index) in sections"
              :key="index"
              :id="`section-${index + 1}`"
              class="scroll-mt-24"
            >
              <h2 class="text-2xl font-bold text-highlighted mb-4">{{ section.title }}</h2>
              <div class="prose dark:prose-invert max-w-none">
                <p class="text-muted whitespace-pre-line">{{ section.content }}</p>
              </div>
              <USeparator class="mt-12" />
            </div>
          </div>

          <!-- Footer Note -->
          <div class="mt-12 p-6 bg-elevated rounded-lg">
            <p class="text-sm text-muted text-center">
              By using AutoHub, you acknowledge that you have read, understood, and agree to be bound 
              by these Terms of Service. If you have any questions, please 
              <NuxtLink to="/contact" class="text-primary hover:underline">contact us</NuxtLink>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
