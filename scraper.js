const axios = require('axios').default;

const scrape = (url, beacon) => {
  axios.get(url)
    .then((res) => {
      console.log(res.data);
    })
    .catch(function() {
      console.log("error")
    })
}

scrape(`https://google.com`);