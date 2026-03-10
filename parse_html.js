const fs = require('fs');
const html = fs.readFileSync('Сайт №30 copy.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);

console.log("Images:");
$('#rec1022218486 .tn-elem[data-elem-type="image"]').each((i, el) => {
    let id = $(el).attr('data-elem-id');
    let src = $(el).find('img').attr('data-original') || $(el).find('img').attr('src');
    console.log(`Elem: ${id}, Src: ${src}`);
});

console.log("\nText elements:");
$('#rec1022218486 .tn-elem[data-elem-type="text"]').each((i, el) => {
    let id = $(el).attr('data-elem-id');
    let text = $(el).find('.tn-atom').text().trim();
    console.log(`Elem: ${id}, Text: ${text}`);
});
