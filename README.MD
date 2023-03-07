# wa-verified-checker

This is Node.js library that checks whether a number is whatsapp verified account.

## Instalation

npm i wa-verified-checker

## Sample Usage

(async () => {
const waCheck = require('wa-verified-checker')
console.log(await waCheck.check('628121214017'))
})();

## Result

{
verified: true,
name: 'Bank BRI',
pictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/264603113_5683574605067336_2526095602271632834_n.jpg?ccb=11-4&oh=01_AdQfC3JtaUzH5mxVJmL7eu_O3vZX5OC_cIkBxbFHwi_alA&oe=6409F840'
}
