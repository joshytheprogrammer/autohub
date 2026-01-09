export const useApi = () => {
  const config = useRuntimeConfig()

  return $fetch.create({
    baseURL: config.public.apiBase,
    onResponse({ response }) {
      // unwrap API envelope
      if (response._data?.data !== undefined) {
        response._data = response._data.data
      }
    }
  })
}
