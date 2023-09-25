const msToMm = {};
function convertMsToMm(ms) {
  const min = Math.floor(ms / 6000);
  const sec = ((ms % 60000) / 1000).toFixed(0);

  return `${min}:${sec}`;
}

msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => convertMsToMm(val));
};

export default msToMm;
