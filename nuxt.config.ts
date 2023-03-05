// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        './modules/arco',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt'
    ],
    tailwindcss: {
        // Options
    }
})
