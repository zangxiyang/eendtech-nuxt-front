// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        'nuxt-headlessui',
        '@nuxtjs/tailwindcss',
        './modules/arco',
        '@pinia/nuxt'
    ],
    // Optionally change the default prefix.
    headlessui: {
        prefix: 'Headless'
    },
    tailwindcss: {
        // Options
    }
})
