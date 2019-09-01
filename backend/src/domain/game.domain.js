const request = require('../service/request.service');

const headers =   { 
  'cache-control': 'no-cache',
  Host: 'store.steampowered.com',
  'Cache-Control': 'no-cache',
  Connection: 'keep-alive',
  'X-Requested-With': 'XMLHttpRequest',
  Referer: 'https://store.steampowered.com/?l=spanish',
  Accept: '*/*',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
  'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
  'Accept-Encoding': 'gzip, deflate, br',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors' 
};

const requestPriceSteam = async (name) => {
  const url = `https://store.steampowered.com/search/suggest?term=gris^&f=games^&cc=ES^&l=spanish^&excluded_content_descriptors^%^5B^%^5D=3^&excluded_content_descriptors^%^5B^%^5D=4^&v=6809493`;
  request.doRequest('GET', )
};

module.exports = {
  getPrice: (name, platform) => {

  },
};
