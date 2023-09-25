import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    search: 'Search',
    about: 'About',
  },
  es: {
    search: 'Busqueda',
    about: 'Nosotros',
  },
};

export default new VueI18n({
  locale: 'en',
  messages,
});
