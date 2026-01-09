<script setup>
definePageMeta({
  middleware: 'auth'
})

const auth = useAuthStore()

const conversations = ref([
  {
    id: 1,
    user: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?u=1',
      status: 'online'
    },
    lastMessage: 'Is the BMW still available?',
    time: '10:30 AM',
    unread: 2,
    active: true
  },
  {
    id: 2,
    user: {
      name: 'Sarah Smith',
      avatar: 'https://i.pravatar.cc/150?u=2',
      status: 'offline'
    },
    lastMessage: 'Thanks for the info!',
    time: 'Yesterday',
    unread: 0,
    active: false
  },
  {
    id: 3,
    user: {
      name: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/150?u=3',
      status: 'offline'
    },
    lastMessage: 'I can offer $30,000',
    time: '2 days ago',
    unread: 0,
    active: false
  }
])

const messages = ref([
  {
    id: 1,
    senderId: 2, // Them
    text: 'Hi, I saw your listing for the BMW M4.',
    time: '10:00 AM'
  },
  {
    id: 2,
    senderId: 1, // Me
    text: 'Hello! Yes, it is still available.',
    time: '10:05 AM'
  },
  {
    id: 3,
    senderId: 2, // Them
    text: 'Great, can I come see it this weekend?',
    time: '10:15 AM'
  },
  {
    id: 4,
    senderId: 1, // Me
    text: 'Sure, Saturday works best for me.',
    time: '10:20 AM'
  },
  {
    id: 5,
    senderId: 2, // Them
    text: 'Is the BMW still available?',
    time: '10:30 AM'
  }
])

const newMessage = ref('')

const sendMessage = () => {
  if (!newMessage.value.trim()) return
  
  messages.value.push({
    id: messages.value.length + 1,
    senderId: 1,
    text: newMessage.value,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })
  
  newMessage.value = ''
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Sidebar -->
      <aside class="w-full md:w-64 space-y-4 hidden md:block">
        <UCard>
          <div class="flex flex-col items-center py-4">
            <UAvatar :src="auth.user?.avatar" :alt="auth.user?.name" size="3xl" />
            <h3 class="mt-4 font-semibold text-lg">{{ auth.user?.name }}</h3>
            <p class="text-gray-500 text-sm">{{ auth.user?.email }}</p>
            <UButton to="/sell" block class="mt-6" icon="i-heroicons-plus">Sell a Car</UButton>
          </div>
        </UCard>

        <nav class="space-y-1">
          <UButton to="/account" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-home">Dashboard</UButton>
          <UButton to="/account/products" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-list-bullet">My Listings</UButton>
          <UButton to="/account/messages" block variant="soft" color="primary" class="justify-start" icon="i-heroicons-chat-bubble-left-right">Messages</UButton>
          <UButton to="/account/saved" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-heart">Saved Cars</UButton>
          <UButton to="/account/settings" block variant="ghost" color="gray" class="justify-start" icon="i-heroicons-cog-6-tooth">Settings</UButton>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 h-[calc(100vh-8rem)] flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
        <!-- Conversations List -->
        <div class="w-full md:w-80 border-r border-gray-200 dark:border-gray-800 flex flex-col">
          <div class="p-4 border-b border-gray-200 dark:border-gray-800">
            <UInput icon="i-heroicons-magnifying-glass" placeholder="Search messages..." />
          </div>
          <div class="flex-1 overflow-y-auto">
            <div 
              v-for="chat in conversations" 
              :key="chat.id"
              class="p-4 border-b border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              :class="{ 'bg-primary-50 dark:bg-primary-900/10': chat.active }"
            >
              <div class="flex gap-3">
                <div class="relative">
                  <UAvatar :src="chat.user.avatar" :alt="chat.user.name" />
                  <span v-if="chat.user.status === 'online'" class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-baseline">
                    <h4 class="font-semibold text-sm truncate">{{ chat.user.name }}</h4>
                    <span class="text-xs text-gray-500">{{ chat.time }}</span>
                  </div>
                  <p class="text-sm text-gray-500 truncate" :class="{ 'font-semibold text-gray-900 dark:text-white': chat.unread > 0 }">
                    {{ chat.lastMessage }}
                  </p>
                </div>
                <div v-if="chat.unread > 0" class="flex flex-col justify-center">
                  <UBadge :label="chat.unread" size="xs" color="primary" variant="solid" :ui="{ rounded: 'rounded-full' }" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Area -->
        <div class="flex-1 flex flex-col min-w-0">
          <!-- Chat Header -->
          <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <div class="flex items-center gap-3">
              <UButton icon="i-heroicons-arrow-left" variant="ghost" color="gray" class="md:hidden" />
              <UAvatar src="https://i.pravatar.cc/150?u=1" alt="John Doe" />
              <div>
                <h3 class="font-semibold">John Doe</h3>
                <p class="text-xs text-green-500 flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Online
                </p>
              </div>
            </div>
            <div class="flex gap-2">
              <UButton icon="i-heroicons-phone" color="gray" variant="ghost" />
              <UButton icon="i-heroicons-ellipsis-vertical" color="gray" variant="ghost" />
            </div>
          </div>

          <!-- Messages -->
          <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950">
            <div 
              v-for="msg in messages" 
              :key="msg.id" 
              class="flex"
              :class="msg.senderId === 1 ? 'justify-end' : 'justify-start'"
            >
              <div 
                class="max-w-[75%] rounded-2xl px-4 py-2 text-sm"
                :class="msg.senderId === 1 
                  ? 'bg-primary-500 text-white rounded-br-none' 
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-bl-none'"
              >
                <p>{{ msg.text }}</p>
                <p 
                  class="text-[10px] mt-1 text-right"
                  :class="msg.senderId === 1 ? 'text-primary-100' : 'text-gray-400'"
                >
                  {{ msg.time }}
                </p>
              </div>
            </div>
          </div>

          <!-- Input Area -->
          <div class="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <form @submit.prevent="sendMessage" class="flex gap-2">
              <UButton icon="i-heroicons-paper-clip" color="gray" variant="ghost" />
              <UInput 
                v-model="newMessage" 
                placeholder="Type a message..." 
                class="flex-1" 
                :ui="{ icon: { trailing: { pointer: '' } } }"
              >
                <template #trailing>
                  <UButton 
                    type="submit" 
                    color="gray" 
                    variant="link" 
                    icon="i-heroicons-paper-airplane" 
                    :padded="false"
                  />
                </template>
              </UInput>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
