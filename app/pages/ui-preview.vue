<template>
  <div class="container mx-auto p-4 space-y-8">
    <h1 class="text-3xl font-bold">UI Design System Preview</h1>
    
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2">Buttons</h2>
      <div class="flex flex-wrap gap-4 items-center">
        <UButton>Primary Button</UButton>
        <UButton color="gray">Secondary Button</UButton>
        <UButton variant="outline">Outline Button</UButton>
        <UButton variant="ghost">Ghost Button</UButton>
        <UButton color="red">Danger Button</UButton>
        <UButton disabled>Disabled</UButton>
        <UButton loading>Loading</UButton>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2">Form Inputs</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <UFormField label="Text Input" help="Helper text goes here">
          <UInput placeholder="Enter text..." />
        </UFormField>
        
        <UFormField label="Select Menu">
          <USelect :items="['Option 1', 'Option 2', 'Option 3']" placeholder="Select an option" />
        </UFormField>

        <UFormField label="Checkbox">
          <UCheckbox label="I agree to terms" />
        </UFormField>

        <UFormField label="Toggle">
          <USwitch />
        </UFormField>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2">Feedback & Overlays</h2>
      <div class="flex gap-4">
        <UBadge>Badge</UBadge>
        <UBadge color="green">Success</UBadge>
        <UBadge color="red">Error</UBadge>
      </div>
      
      <div class="p-4 border rounded bg-gray-50 dark:bg-gray-800">
        <UAlert
          icon="i-heroicons-command-line"
          description="This is an alert component to show important messages."
          title="Heads up!"
        />
      </div>
    </section>
  </div>
</template>


<script lang="js">

</script>