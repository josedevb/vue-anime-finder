<template lang="pug">
.container(v-if="track && track.mal_id")
  .columns
    .column.is-3.has-text-centered
      figure.media-left
        p.image
          img(:src="track.images.jpg.image_url")
        p.button-bar
          a.button.is-primary.is-large
            span.icon(@click="selectTrack") ▶️

    .column.is-8
      .panel
        .panel-heading
          h1.title {{ trackTitle }}
        .panel-block
          article.media
            .media-content
              .content
                ul(v-for="(v, k) in track")
                  li
                    strong {{ k }}:&nbsp; 
                    span {{ v }}
            .nav.level
              .level-left
                a.level-item

      
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import trackMixin from '@/mixins/track';

export default {
  mixins: [trackMixin],
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle']),
  },

  created() {
    const id = this.$route.params.id;

    if (!this.track || !this.track.mal_id || this.track.mal_id !== id) {
      this.getTrackById({ id }).then(() => {
        console.log('Track loaded');
      });
    }
  },
  methods: {
    ...mapActions(['getTrackById']),
  },
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
.button-bar {
  margin-top: 20px;
}
</style>
