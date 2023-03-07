const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  async check(jid) {
    var result={
        verified:false,
        name: ""
        pictureUrl:""
    }
    try {
        var resp = await axios.get("https://wa.me/" + jid)
        const $ = await cheerio.load(resp.data);
        const images = $('div > div > img');
        if (images.length>0) {
            const urls = images.map((index, element) => $(element).attr('src')).get();
            const headings = $('div > div > h3');
            const texts = headings.map((index, element) => $(element).text()).get();
            result={
                verified: true,
                name: texts[0]
                pictureUrl:urls[0]
            }
        }        
    } catch (error) {
        
    }
    return result;
  }
};
