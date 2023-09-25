<template lang="pug">
.card(v-if="track")
  .card-image
    figure.image.is-1by1
      img(:src="track.images.jpg.image_url")
  
  .card-content
    .media
      .media-left
        figure.image.is-48x48
          img(:src="track.images.jpg.image_url")
      .media-content
        p.title.is-6
          strong {{ track.title }}
        p.subtitle.is-6 {{ track.producers[0].name }}

    .content
      small {{ track.duration }}
      nav.level
        .level-left
          button.level-item.button.is-primary
            span.icon.is-small(@click="selectTrack") ▶️
          button.level-item.button.is-warning
            span.icon.is-small(@click="goToTrack(track.mal_id)") 🌍
</template>

<script>
import trackMixin from '@/mixins/track';
export default {
  mixins: [trackMixin],
  props: {
    track: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToTrack(id) {
      if (!this.track.background) {
        return;
      }
      this.$router.push({
        name: 'track',
        params: { id },
      });
    },
  },
};
</script>
