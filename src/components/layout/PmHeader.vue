<template lang="pug">
section.hero.is-success
  .hero-head
    .header.navbar
      .container
        .navbar-start
          .navbar-item
            strong Anime Finder
            
        .navbar-end
          .navbar-item
            a.nav-item(@click="selectLang('en')") 🏴󠁧󠁢󠁥󠁮󠁧󠁿
            a.nav-item(@click="selectLang('es')") 🇪🇸
            router-link.navbar-item(to="search") {{ $t('search') }}
            router-link.navbar-item(to="about") {{ $t('about') }}


  .hero-body
    .container.has-text-centered
      h1.title Anime Finder
      h2.subtitle Anime que estan Vue-nisimos!
      pm-player
</template>

<script>
import PmPlayer from '@/components/PmPlayer.vue';

export default {
  components: {
    PmPlayer,
  },
  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
