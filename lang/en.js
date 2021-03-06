export default {
    globals: {
        photographer: 'Landscape Photographer',
        title: 'Landscape Photography & Front End Development',
        description: 'Personal website of Landscape Photographer & Front End Developer',
        menu: 'Navigation',
    },
    navigation: {
        blog: 'blog',
        photography: 'gallery',
        contact: 'info',
    },
    blog: {
        title: 'Blog',
        description: 'Blog about landscape photography, travelling and front end development',
        categories: {
            'all': 'wszystkie',
            'photography': 'photography',
            'coding': 'coding'
        },
        followMe: 'If you would like to see more photos, feel free to follow me on Instagram where I regularly publish new pictures.'
    },
    contact: {
        title: 'Info'
    },
    lightbox: {
        'next': 'Next photo',
        'prev': 'Previous photo',
        'close': 'Close gallery',  
    },
    footer: {
        love: 'Made with ❤️ using Nuxt &amp; TailwindCSS'
    }
}
