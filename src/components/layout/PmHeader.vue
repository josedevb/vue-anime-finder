<template lang="pug">
section.hero.is-success
  .hero-head
    .header.navbar
      .container
        .navbar-start
          .navbar-item
            strong Platzi Anime
            
        .navbar-end
          .navbar-item
            router-link.navbar-item(:to="{ name: 'search' }") Buscar
            router-link.navbar-item(to="about") Nosotros


  .hero-body
    .container.has-text-centered
      h1.title Platzi Anime
      h2.subtitle Anime que estan Vue-nisimos!
      pm-player
</template>

<script>
import PmPlayer from '@/components/PmPlayer.vue';

export default {
  components: {
    PmPlayer,
  },
};
</script>
