<template lang="pug">
  .content(v-if="track?.images?.jpg?.image_url")
    p.is-128x128
      img(:src="track.images.jpg.image_url")
    p
      strong {{ track?.title }}
      small {{ track?.background }}
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['track']),
  },
};
</script>
