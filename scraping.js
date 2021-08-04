const axios = require('axios');
const {load} = require('cheerio');

async function doScrape() {
  const {data} = await axios.get('https://news.ycombinator.com');
    const $ = load(data);

    const lists = [];

    $('.athing').each((index, element) => {
      const title = $(element)
      .children()
      .text();
      lists[index] = { title: title };
    });
    console.log(lists);
    return lists;
}

module.exports = { doScrape };
