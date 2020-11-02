<template>
  <header class="p-4 lg:flex lg:justify-between lg:p-8">
    <nuxt-link to="/" class="text-2xl leading-none inline-block mb-4 md:text-3xl lg:text-4xl">
      Łukasz Rados
      <transition
        enter-class="h-0 opacity-0"
        enter-to-class="h-16 opacity-100"
        enter-active-class="transition-all duration-300"
        leave-class="opactiy-100 h-16"
        leave-to-class="h-0 opacity-0"
        leave-active-class="transition-all duration-300"
      >
        <div v-show="$route.name === 'index'">
          <div class="h-16">
            Front End Developer<br>
            Landscape Photographer
          </div>
        </div>
      </transition>
    </nuxt-link>
    <nav class="flex items-center h-10">
      <button type="button" class="text-0 focus:outline-none lg:hidden" @click="open = !open">
        <menu-icon :open="open" />
      </button>
      <ul
        class="flex items-center lg:flex"
        :class="{ 'hidden': !open }"
      >
        <li><nuxt-link to="/" class="link">gallery</nuxt-link></li>
        <li><nuxt-link to="/blog" class="link">blog</nuxt-link></li>
        <li><nuxt-link to="/contact" class="link">info</nuxt-link></li>
        <li><nuxt-link to="/pl" class="link">polski?</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      open: false,
    }
  },
}
</script>

<style lang="postcss" scoped>
.link {
  @apply inline-block text-lg ml-5;
}
.link.is-active,
.link:hover {
  @apply underline;
}
@screen lg {
  .link {
    @apply text-xl;
  }
  li:not(:first-child):before {
    content: '/';
    @apply inline-block ml-5;
  }
}
</style>