export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = useCookie('auth_token')
  const isLoggedIn = computed(() => !!token.value)

  async function login(credentials) {
    // TODO: Implement actual API login
    console.log('Login attempt', credentials)
    // Mock login for now
    token.value = 'mock-token-' + Date.now()
    user.value = { name: 'Test User', email: credentials.email }
    navigateTo('/')
  }

  async function register(credentials) {
    console.log('Register attempt', credentials)
    // Mock register
    token.value = 'mock-token-' + Date.now()
    user.value = { name: credentials.name, email: credentials.email }
    navigateTo('/')
  }

  function logout() {
    user.value = null
    token.value = null
    navigateTo('/auth/login')
  }

  function loadProfile() {
    // TODO: Implement load profile
  }

  return {
    user,
    token,
    isLoggedIn,
    login,
    register,
    logout,
    loadProfile
  }
})
