/*
   Server example to get document data from github
*/
const axios = require('axios')

axios.get('https://api.github.com/repos/netbeast/yetilog/contents/log.json')
.then(function (response) {
   const buff64 = response.data.content
   const content = JSON.parse(Buffer.from(buff64, 'base64').toString()) // Transform buff to JSON
   console.log('New', content.new) // Array that contains all new features
   console.log('Fixes', content.fix) // Array that contais all new fixes
})
.catch(function (error) {
   console.log(error);
});
