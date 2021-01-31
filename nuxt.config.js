export default {
    server: {
        host: '0.0.0.0',
        port: 8000
    },
    head: {
        title: 'bug-tracker',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    purgeCSS: {    
        whitelist: ['dark-mode'],  
    },
    loading: { color: '#fff' },
    components: true,
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxtjs/google-analytics',
        ['@nuxtjs/fontawesome', {
            component: 'fa',
            icons: {
                solid: true,
                brands: true
            }
        }]        
    ],
    css: [
        '~/assets/css/main.css'
    ],
    colorMode: {
        classSuffix: ""
    },
    modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/auth'],
    axios: {},
    pwa: {
        manifest: {
            lang: 'en'
        }
    },
    build: {}
}
