const trackMixin = {
  methods: {
    selectTrack() {
      if (!this.track.background) {
        return;
      }
      this.$store.commit('setTrack', this.track);
    },
  },
};

export default trackMixin;
