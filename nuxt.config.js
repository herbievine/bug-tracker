export default {
    server: {
        host: 'localhost',
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
        whitelist: ['dark-mode']
    },
    loading: { color: '#fff' },
    components: true,
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxtjs/google-analytics',
        [
            '@nuxtjs/fontawesome',
            {
                component: 'fa',
                icons: {
                    solid: true,
                    brands: true
                }
            }
        ]
    ],
    css: ['~/assets/css/main.css'],
    colorMode: {
        classSuffix: ''
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/firebase'
    ],
    axios: {
        baseURL: 'http://192.168.8.141:5000/api'
    },
    pwa: {
        manifest: {
            lang: 'en'
        }
    },
    firebase: {
        config: {
            apiKey: "AIzaSyDz0btIhqFwvjc1QvkuVA7ef19drH7p090",
            authDomain: "bug-tracker-4233d.firebaseapp.com",
            projectId: "bug-tracker-4233d",
            storageBucket: "bug-tracker-4233d.appspot.com",
            messagingSenderId: "528837323379",
            appId: "1:528837323379:web:f48f4cd4a5d017b8ffd806",
            measurementId: "G-2ENVDDGW65"
        },
        services: {
            auth: true,
            performance: true,
            analytics: true,
        }
    },
    build: {}
}
