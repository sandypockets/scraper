const axios = require('axios').default;
const cheerio = require('cheerio');

const scrape = (url, beacon) => {
  axios.get(url)
    .then((res) => {
      const $ = cheerio.load(res.data);
      const target = $(beacon).text();
      console.log(target.trim());
    })
    .catch(function() {
      console.log("error")
    })
}

scrape(`https://www.apple.com/ca/mac/`, ".typography-buystrip-copy");