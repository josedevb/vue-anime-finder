<template lang="pug">
main
  transition(name="move")
    pm-notification(v-show="showNotification")
      p(slot="body") No se encontraron resultados

  transition(name="move")
    pm-loader(v-show="isLoading")

  section.section(v-show="!isLoading")
    nav.navbar
      .field.has-addons
        .control.is-expanded
          input.input(
            type="text",
            placeholder="Buscar Canciones",
            v-model="searchQuery"
            @keyup.enter="search"
          )
        .control
        button.button.is-info(@click="search") Buscar
        button.button.is-danger &times;
    
    .container
      p
        small {{ searchMessage }}
        
    .container.custom.results
      .columns.is-multiline
        .column.is-one-quarter(v-for="t in tracks")
          pm-track(
            :class="{ 'is-active': t.mal_id === selectedTrack }",
            :track="t",
            @selected="setSelectedTrack"
            v-blur="t.background"
          )
</template>

<script>
import trackService from '@/services/track';
import PmTrack from '@/components/PmTrack.vue';
import PmLoader from '@/components/shared/PmLoader.vue';
import PmNotification from '@/components/shared/PmNotification.vue';
export default {
  components: {
    PmTrack,
    PmLoader,
    PmNotification,
  },
  data() {
    return {
      tracks: [],
      searchQuery: '',
      isLoading: false,
      selectedTrack: '',
      showNotification: false,
    };
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }
      this.isLoading = true;
      trackService.search(this.searchQuery).then((res) => {
        this.tracks = res.data;
        if (!this.tracks.length) {
          this.showNotification = true;
        }
        this.isLoading = false;
      });
    },
    setSelectedTrack(trackId) {
      this.selectedTrack = trackId;
    },
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    },
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
