<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-950">
    <TheHeader />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
