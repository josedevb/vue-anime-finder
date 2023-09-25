import platziMusicService from './platzi-music';

const trackService = {};

trackService.search = (q) => {
  return platziMusicService
    .get('/anime', {
      params: { q },
    })
    .then((res) => res.data);
};

trackService.getById = (id) => {
  return platziMusicService.get(`/anime/${id}/full`).then((res) => res.data);
};

export default trackService;
