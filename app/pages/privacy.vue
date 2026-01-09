<script setup>
definePageMeta({
  title: 'Privacy Policy'
})

const lastUpdated = 'January 1, 2026'

const sections = [
  {
    title: '1. Introduction',
    content: `AutoHub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and services (collectively, the "Services").

Please read this Privacy Policy carefully. By using our Services, you consent to the collection and use of your information as described in this policy. If you do not agree with our policies and practices, please do not use our Services.`
  },
  {
    title: '2. Information We Collect',
    content: `We collect several types of information from and about users of our Services:

Personal Information You Provide:
• Name, email address, phone number, and mailing address
• Account credentials (username and password)
• Payment information (credit card numbers, billing address)
• Vehicle information when creating listings
• Profile information and photos
• Communications with other users and our support team

Information Collected Automatically:
• Device information (type, operating system, unique identifiers)
• IP address and location data
• Browser type and settings
• Usage data (pages visited, time spent, clicks)
• Cookies and similar tracking technologies

Information from Third Parties:
• Social media profiles (when you connect accounts)
• Vehicle history data from third-party providers
• Identity verification services
• Marketing partners and data providers`
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect for various purposes, including:

Service Delivery:
• Creating and managing your account
• Processing transactions and payments
• Facilitating communication between buyers and sellers
• Providing customer support
• Sending service-related notifications

Platform Improvement:
• Analyzing usage patterns to improve our Services
• Developing new features and functionality
• Conducting research and analytics
• Testing and troubleshooting

Marketing and Communications:
• Sending promotional emails and newsletters (with your consent)
• Personalizing your experience
• Displaying relevant advertisements
• Conducting surveys and collecting feedback

Safety and Security:
• Detecting and preventing fraud
• Enforcing our Terms of Service
• Protecting the rights and safety of our users
• Complying with legal obligations`
  },
  {
    title: '4. Information Sharing and Disclosure',
    content: `We may share your information in the following circumstances:

With Other Users:
• Your public profile information is visible to other users
• Listing information is publicly available
• Contact information may be shared with interested buyers/sellers

With Service Providers:
• Payment processors and financial institutions
• Cloud hosting and data storage providers
• Analytics and advertising partners
• Customer support tools
• Email and communication services

For Legal Purposes:
• To comply with legal obligations and court orders
• To respond to government requests
• To protect our rights and property
• To investigate suspected fraud or violations

Business Transfers:
• In connection with a merger, acquisition, or sale of assets
• Your information may be transferred as part of such transactions

With Your Consent:
• We may share information for other purposes with your explicit consent`
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content: `We use cookies and similar tracking technologies to collect and store information about your interactions with our Services.

Types of Cookies We Use:
• Essential Cookies: Required for basic functionality
• Performance Cookies: Help us understand how visitors use our site
• Functionality Cookies: Remember your preferences and settings
• Advertising Cookies: Deliver relevant ads and track campaign performance

Managing Cookies:
You can control cookies through your browser settings. Most browsers allow you to:
• View what cookies are stored
• Delete individual or all cookies
• Block third-party cookies
• Block all cookies

Please note that disabling cookies may affect the functionality of our Services.

Do Not Track:
Our Services do not currently respond to "Do Not Track" signals. However, you can opt out of certain tracking through the cookie settings on our website.`
  },
  {
    title: '6. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information, including:

• Encryption of data in transit and at rest
• Secure servers and databases
• Regular security assessments and audits
• Access controls and authentication
• Employee training on data protection

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.

In the event of a data breach that affects your personal information, we will notify you in accordance with applicable laws.`
  },
  {
    title: '7. Your Privacy Rights',
    content: `Depending on your location, you may have certain rights regarding your personal information:

Access and Portability:
• Request a copy of your personal data
• Receive your data in a portable format

Correction:
• Update or correct inaccurate information
• Complete incomplete data

Deletion:
• Request deletion of your personal data
• Subject to certain exceptions (legal obligations, legitimate interests)

Opt-Out Rights:
• Unsubscribe from marketing communications
• Opt out of certain data sharing
• Disable cookies and tracking

California Residents:
Under the CCPA, you have additional rights including:
• Right to know what personal information is collected
• Right to delete personal information
• Right to opt-out of the sale of personal information
• Right to non-discrimination for exercising your rights

To exercise any of these rights, please contact us using the information provided at the end of this policy.`
  },
  {
    title: '8. Data Retention',
    content: `We retain your personal information for as long as necessary to:

• Provide our Services to you
• Fulfill the purposes described in this policy
• Comply with legal obligations
• Resolve disputes and enforce agreements

Retention periods vary based on:
• Type of data collected
• Purpose for which it was collected
• Legal requirements
• Legitimate business needs

Account Information:
• Active accounts: Retained while account is active
• Closed accounts: Retained for 3 years, then deleted

Transaction Records:
• Retained for 7 years for tax and legal purposes

Marketing Data:
• Retained until you opt out or withdraw consent

You can request deletion of your data at any time, subject to applicable legal requirements.`
  },
  {
    title: '9. Children\'s Privacy',
    content: `Our Services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18.

If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. We will take steps to delete such information from our records.

If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we will delete that information as quickly as possible.`
  },
  {
    title: '10. International Data Transfers',
    content: `AutoHub is based in the United States. If you access our Services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States.

For users in the European Economic Area (EEA):
• We rely on Standard Contractual Clauses approved by the European Commission
• We implement appropriate safeguards to protect your data
• You have the right to obtain details of the transfer mechanism

For users in other jurisdictions:
• We comply with applicable data protection laws
• We implement appropriate security measures for international transfers

By using our Services, you consent to the transfer of your information to the United States and other countries where we operate.`
  },
  {
    title: '11. Third-Party Links and Services',
    content: `Our Services may contain links to third-party websites, applications, and services. This Privacy Policy does not apply to those third-party services.

We are not responsible for:
• The privacy practices of third-party websites
• The content of third-party websites
• Any information you provide to third parties

We encourage you to review the privacy policies of any third-party services you access through our platform.

Third-Party Integrations:
When you connect third-party services (such as social media accounts), those services may collect information in accordance with their own privacy policies.`
  },
  {
    title: '12. Changes to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.

When we make changes:
• We will update the "Last Updated" date at the top of this policy
• For material changes, we will provide prominent notice on our website
• We may also send an email notification to registered users

Your continued use of our Services after any changes indicates your acceptance of the updated Privacy Policy.

We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.`
  },
  {
    title: '13. Contact Us',
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

AutoHub Privacy Team
123 Auto Drive
San Francisco, CA 94102

Email: privacy@autohub.com
Phone: 1-800-AUTO-HUB

For EEA residents, you may also contact our Data Protection Officer at dpo@autohub.com.

You also have the right to lodge a complaint with your local data protection authority if you believe we have not handled your information appropriately.`
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-elevated py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl font-bold text-highlighted mb-4">Privacy Policy</h1>
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
              Your privacy is important to us. This Privacy Policy explains how AutoHub collects, uses, 
              shares, and protects your personal information. We encourage you to read this policy carefully 
              to understand our practices regarding your data.
            </p>
          </div>

          <!-- Key Points Summary -->
          <UCard class="mb-12" variant="soft">
            <template #header>
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-shield" class="size-5 text-primary" />
                <h2 class="text-lg font-semibold text-highlighted">Key Points</h2>
              </div>
            </template>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check-circle" class="size-5 text-success shrink-0 mt-0.5" />
                <span class="text-muted">We collect information you provide and data about how you use our Services</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check-circle" class="size-5 text-success shrink-0 mt-0.5" />
                <span class="text-muted">Your data is used to provide, improve, and personalize our Services</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check-circle" class="size-5 text-success shrink-0 mt-0.5" />
                <span class="text-muted">We share data with service providers and as required by law</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check-circle" class="size-5 text-success shrink-0 mt-0.5" />
                <span class="text-muted">You can access, correct, or delete your data at any time</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-lucide-check-circle" class="size-5 text-success shrink-0 mt-0.5" />
                <span class="text-muted">We use industry-standard security measures to protect your information</span>
              </li>
            </ul>
          </UCard>

          <!-- Table of Contents -->
          <UCard class="mb-12">
            <template #header>
              <h2 class="text-lg font-semibold text-highlighted">Table of Contents</h2>
            </template>
            <nav class="grid md:grid-cols-2 gap-2">
              <a
                v-for="(section, index) in sections"
                :key="index"
                :href="`#privacy-section-${index + 1}`"
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
              :id="`privacy-section-${index + 1}`"
              class="scroll-mt-24"
            >
              <h2 class="text-2xl font-bold text-highlighted mb-4">{{ section.title }}</h2>
              <div class="prose dark:prose-invert max-w-none">
                <p class="text-muted whitespace-pre-line">{{ section.content }}</p>
              </div>
              <USeparator class="mt-12" />
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="mt-12 grid md:grid-cols-2 gap-6">
            <UCard>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-download" class="size-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-semibold text-highlighted mb-1">Download Your Data</h3>
                  <p class="text-sm text-muted mb-3">Request a copy of all your personal data</p>
                  <UButton size="sm" variant="outline" to="/account/settings">
                    Go to Settings
                  </UButton>
                </div>
              </div>
            </UCard>
            <UCard>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-mail" class="size-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-semibold text-highlighted mb-1">Questions?</h3>
                  <p class="text-sm text-muted mb-3">Contact our privacy team for assistance</p>
                  <UButton size="sm" variant="outline" to="/contact">
                    Contact Us
                  </UButton>
                </div>
              </div>
            </UCard>
          </div>

          <!-- Footer Note -->
          <div class="mt-12 p-6 bg-elevated rounded-lg">
            <p class="text-sm text-muted text-center">
              By using AutoHub, you acknowledge that you have read and understood this Privacy Policy. 
              If you have any questions or concerns, please 
              <NuxtLink to="/contact" class="text-primary hover:underline">contact us</NuxtLink>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
